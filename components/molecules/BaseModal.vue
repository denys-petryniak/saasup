<script setup lang="ts">
interface Props {
  visible: boolean
}

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<Props>(), {
  visible: false,
})

const emit = defineEmits<{
  (event: 'close'): void
}>()

function close() {
  emit('close')
}

const { escape } = useMagicKeys()

whenever(escape, () => {
  close()
})

const modalBody = useTemplateRef<HTMLElement>('modalBody')

onClickOutside(modalBody, () => close())
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      v-bind="$attrs"
      class="modal"
    >
      <div
        v-if="$slots.default"
        ref="modalBody"
        class="modal__body"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  inset: 0;
  display: flex;
  max-width: 100vw;
  max-height: 100dvh;
  z-index: stacking(modal);
  padding: $spacing--2xl;
  background-color: rgba($primary-color--dark, 0.7);

  &__body {
    width: 100%;
    max-width: fit-content;
    margin: auto;
  }
}
</style>
