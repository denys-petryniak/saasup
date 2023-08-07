<template>
  <div
    v-editable="blok"
    class="feature"
  >
    <h3 class="feature__title">
      {{ blok.name }}
    </h3>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
