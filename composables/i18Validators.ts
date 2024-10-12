import * as validators from '@vuelidate/validators'

export function useI18nValidators() {
  const { $i18n } = useNuxtApp()
  const { createI18nMessage } = validators
  const messagePath = ({ $validator }: { $validator: string }) => `form.validations.${$validator}`

  const withI18nMessage = createI18nMessage({ t: $i18n.t.bind($i18n), messagePath })

  const required = withI18nMessage(validators.required)
  const email = withI18nMessage(validators.email)
  const requiredIf = withI18nMessage(validators.requiredIf, { withArguments: true })
  const minLength = withI18nMessage(validators.minLength, { withArguments: true })
  const maxLength = withI18nMessage(validators.maxLength, { withArguments: true })

  return {
    required,
    email,
    requiredIf,
    minLength,
    maxLength,
  }
}
