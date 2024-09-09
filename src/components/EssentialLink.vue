<script setup lang="ts">
import { EssentialLinkProps } from '@/types/props';

withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>

<template>
  <QItem
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <QItemSection
      v-if="icon"
      avatar
    >
      <QIcon :name="icon" />
    </QItemSection>

    <QItemSection>
      <QItemLabel>{{ title }}</QItemLabel>
      <QItemLabel caption>{{ caption }}</QItemLabel>
    </QItemSection>
  </QItem>
</template>
