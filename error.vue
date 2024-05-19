<script setup lang="ts">
const error = useError()

function handleError() {
  clearError({
    redirect: '/',
  })
}
</script>

<template>
  <NuxtLayout>
    <div>
      <div v-if="error.statusCode === 404">
        <h1>404</h1>
        <p>I guess that page doesn't exist.</p>
      </div>
      <div v-else>
        <h1>Dang</h1>
        <p>It looks like something broke.</p>
        <p>Sorry about that.</p>
      </div>
      <div>
        <p>
          <strong>{{ error.message }}</strong>
        </p>
        <p>
          Go to the
          <a @click="handleError">Home</a>
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>
