<script setup lang="ts">
import type { ValidationRuleCollection } from '@vuelidate/core'
import { useVuelidate } from '@vuelidate/core'
import { email, helpers, maxLength, minLength, requiredIf } from '@vuelidate/validators'
import type { ContactFormStoryblok } from '~/component-types-sb'

interface Props {
  blok: ContactFormStoryblok
}

const props = defineProps<Props>()

const config = useRuntimeConfig()

// Initialize the form object with access_key and subject, and add dynamic fields from Storyblok
const form = ref<{ [key: string]: any }>({
  access_key: config.public.contactFormApiAccessKey,
  subject: 'New Submission from SaaSup Contact Form',
})

// Validation schema (dynamic based on Storyblok fields)
const validationRules = ref<{ [key: string]: ValidationRuleCollection }>({})

const requiredTextMinLength = ref(3)
const requiredTextMaxLength = ref(256)

// Initialize form fields and set validation rules
if (props.blok.form) {
  props.blok.form.forEach((field) => {
    form.value[field.name] = ''

    // Set up validation rules dynamically
    switch (field.type) {
      case 'email':
        validationRules.value[field.name] = {
          required: helpers.withMessage(`The Email field is required`, requiredIf(field.required)),
          email: helpers.withMessage('Invalid email format', email),
        }
        break
      case 'text':
      case 'textarea':
        validationRules.value[field.name] = {
          required: helpers.withMessage(`The ${capitalizeFirstChar(field.name)} field is required`, requiredIf(field.required)),
          minLength: minLength(requiredTextMinLength.value),
          maxLength: maxLength(requiredTextMaxLength.value),
        }
        break
      default:
        validationRules.value[field.name] = {}
    }
  })
}

const v$ = useVuelidate(validationRules, form, {
  $lazy: true,
})

const result = ref<string>('')
const status = ref<'loading' | 'success' | 'error' | ''>('')

const isContactFormSubmitted = useIsContactFormSubmitted()

async function submitForm() {
  const isFormValid = await v$.value.$validate()

  if (!isFormValid) {
    return
  }

  try {
    status.value = 'loading'

    const response = await $fetch<{ message: string, success: boolean }>(`${config.public.contactFormApiUrl}/submit`, {
      method: 'POST',
      // Automatically stringified by ofetch
      body: form.value,
    })

    result.value = response.message

    if (response.success) {
      isContactFormSubmitted.value = true
      status.value = 'success'

      await navigateTo('/success')
    }
    else {
      console.error('Form submission error:', response)
      status.value = 'error'
    }
  }
  catch (error) {
    console.error('Request failed:', error)
    status.value = 'error'
    result.value = 'Something went wrong! Please try again.'
  }
  finally {
    // Reset fields, result, status and form's $dirty state after 5 seconds
    setTimeout(() => {
      Object.keys(form.value).forEach((key) => {
        form.value[key] = ''
      })

      result.value = ''
      status.value = ''

      v$.value.$reset()
    }, 5000)
  }
}
</script>

<template>
  <BaseSection
    v-editable="blok"
    :is-top-gap-hidden="blok.hide_top_gap"
    class="contact-form"
  >
    <form
      class="contact-form__body"
      @submit.prevent="submitForm"
    >
      <div v-if="blok.form?.length" class="contact-form__fields">
        <StoryblokComponent
          v-for="formField in blok.form"
          :key="formField._uid"
          v-model="form[formField.name]"
          :blok="formField"
          :errors="v$[formField.name].$errors"
          @blur="v$[formField.name].$touch"
        />
      </div>
      <BaseButton
        :disabled="v$.$errors.length > 0"
        type="submit"
        color="dark-branded"
        class="contact-form__button"
      >
        {{ status === 'loading' ? 'Submitting...' : 'Submit' }}
      </BaseButton>
    </form>
    <p
      v-if="status === 'error'"
      class="error-message contact-form__error-message"
    >
      An error occurred. Please try again.
    </p>
  </BaseSection>
</template>

<style scoped lang="scss">
.contact-form {
  &__body {
    padding: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
    border-radius: $rounded--3xl;
    background-color: $color-white;
    box-shadow: $shadow--regular;
  }

  &__fields {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);

    @include breakpoint('md') {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__button {
    display: block;
    margin: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl) auto 0 auto;
  }
}
</style>
