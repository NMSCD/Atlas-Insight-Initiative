<script setup lang="ts">
import { Dark } from 'quasar';
import { onMounted } from 'vue';

onMounted(() => {
  const prefersDark = globalThis.matchMedia('(prefers-color-scheme: dark)').matches;
  Dark.set(prefersDark);
});
</script>

<template>
  <RouterView />
</template>
