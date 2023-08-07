<template>
  <div
    v-editable="blok"
    class="teaser"
  >
    {{ blok.headline }}
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
