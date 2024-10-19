<script setup lang="ts">
const { visible, close } = inject(modalInjectionKey) as ModalOptions

const isLoaded = ref(false)
const isPlaying = ref(false)
const video = ref()

function stateChange(event: YT.OnStateChangeEvent) {
  isPlaying.value = event.data === 1
}

const RickAstleyVideoId = 'dQw4w9WgXcQ'
</script>

<template>
  <BaseModal
    :visible="visible"
    class="video-modal"
    @close="close"
  >
    <ScriptYouTubePlayer
      ref="video"
      class="player video-modal__player"
      :video-id="RickAstleyVideoId"
      @ready="isLoaded = true"
      @state-change="stateChange"
    >
      <template #awaitingLoad>
        <Icon
          name="material-symbols:play-circle"
          size="3em"
          class="player__awaiting-load-icon"
        />
      </template>
    </ScriptYouTubePlayer>
  </BaseModal>
</template>

<style scoped lang="scss">
.player {
  &__awaiting-load-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: $primary-color--light;
  }
}
</style>
