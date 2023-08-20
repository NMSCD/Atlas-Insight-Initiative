<script setup lang="ts">
defineProps<{
  heading: string;
  description: string;
  url1: string;
  url1desc: string;
  url2?: string;
  url2desc?: string;
}>();
</script>

<template>
  <q-card class="text-center">
    <q-card-section>
      <div class="text-h6">{{ heading }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">{{ description }}</q-card-section>
    <q-card-section>
      <q-list class="flex q-pt-m flex-center">
        <q-item
          :class="{ 'link-item-border': $q.dark.isActive }"
          :href="url1"
          class="q-btn justify-center rounded-borders"
          target="_blank"
          tag="a"
          >{{ url1desc || url1 }}</q-item
        >
        <q-item
          v-if="url2"
          :class="{ 'link-item-border': $q.dark.isActive }"
          :href="url2"
          class="q-btn justify-center rounded-borders"
          target="_blank"
          tag="a"
          >{{ url2desc || url2 }}</q-item
        >
      </q-list>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="scss">
.flex {
  gap: 1rem;
}

.link-item-border {
  border: 1px solid $primary;
}
</style>
