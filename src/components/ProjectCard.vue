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
  <QCard class="text-center">
    <QCardSection>
      <div class="text-h6">{{ heading }}</div>
    </QCardSection>

    <QCardSection class="q-pt-none">{{ description }}</QCardSection>
    <QCardSection>
      <QList class="flex q-pt-m flex-center">
        <QItem
          :class="{ 'link-item-border': $q.dark.isActive }"
          :href="url1"
          class="q-btn justify-center rounded-borders"
          target="_blank"
          tag="a"
          >{{ url1desc || url1 }}</QItem
        >
        <QItem
          v-if="url2"
          :class="{ 'link-item-border': $q.dark.isActive }"
          :href="url2"
          class="q-btn justify-center rounded-borders"
          target="_blank"
          tag="a"
          >{{ url2desc || url2 }}</QItem
        >
      </QList>
    </QCardSection>
  </QCard>
</template>

<style scoped lang="scss">
.flex {
  gap: 1rem;
}

.link-item-border {
  border: 1px solid $primary;
}
</style>
