<script setup lang="ts">
import { onMounted } from 'vue';
import { Dark } from 'quasar';

onMounted(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  Dark.set(prefersDark);
});
</script>

<template>
  <RouterView />
</template>
