<script setup lang="ts">
interface Props {
  visible: boolean
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<Props>(), {
  visible: false,
})

const emit = defineEmits<{
  (event: 'close'): void
}>()

function close() {
  emit('close')
}

const modalContent = ref<HTMLElement | null>(null)

onClickOutside(modalContent, () => close())

const { escape } = useMagicKeys()

whenever(escape, () => {
  close()
})

const modalBody = ref<HTMLElement | null>(null)
const isVisible = computed(() => props.visible)

useBodyScrollLock(modalBody, isVisible)
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      v-bind="$attrs"
      class="modal"
    >
      <div ref="modalContent" class="modal__content">
        <div v-if="$slots.header" class="modal__header">
          <button
            class="modal__close-button"
            @click="close"
          >
            <Icon
              name="material-symbols:cancel"
              class="modal__close-icon"
              size="1.75em"
            />
          </button>
          <slot name="header" />
        </div>
        <div v-if="$slots.default" ref="modalBody" class="modal__body">
          <slot />
        </div>
        <div v-if="$slots.footer" class="modal__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
$modal-content-gap: clamped(
  $min-size: $spacing--2xl,
  $max-size: $spacing--4xl,
);

.modal {
  position: fixed;
  inset: 0;
  display: flex;
  max-width: 100vw;
  max-height: 100dvh;
  z-index: stacking(modal);
  padding: $spacing--2xl;
  background-color: rgba($color--secondary--extra-dark, 0.7);

  &__content {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: auto;
    border-radius: $rounded--3xl;
    background-color: white;
  }

  &__header,
  &__body,
  &__footer {
    padding: $modal-content-gap;
  }

  &__header {
    border-bottom: 1px solid $color-border--regular;
  }

  &__body {
    max-height: 40vh;
    overflow-y: auto;
  }

  &__footer {
    border-top: 1px solid $color-border--regular;
  }

  &__close-button {
    position: absolute;
    top: $modal-content-gap;
    right: $modal-content-gap;
    background: none;
    border: none;
    cursor: pointer;
  }

  &__close-icon {
    color: $color--secondary--extra-dark;
  }
}
</style>
