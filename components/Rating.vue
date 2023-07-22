<script setup lang="ts">
interface Props {
  rating: number
  maxRating?: number
}

const props = withDefaults(defineProps<Props>(), {
  rating: 0,
  maxRating: 5,
})

const totalStars = Array.from({ length: props.maxRating }, (_, index) => index + 1)
</script>

<template>
  <div class="rating">
    <span
      v-for="star in totalStars"
      :key="star"
      class="rating__star"
    >
      <Icon
        v-if="star <= rating"
        name="carbon:star-filled"
      />
      <Icon
        v-else
        name="carbon:star"
      />
    </span>
  </div>
</template>

<style scoped lang="scss">
$rating-star-color: #FFC226;

.rating {
  &__star {
    color: $rating-star-color;
  }
}
</style>
