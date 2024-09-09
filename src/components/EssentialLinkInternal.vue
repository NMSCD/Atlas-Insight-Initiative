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
    class="link-internal-wrapper"
  >
    <RouterLink
      class="link-internal"
      :to="link"
    >
      <QItemSection
        v-if="icon"
        avatar
        class="icon"
      >
        <QIcon :name="icon" />
      </QItemSection>

      <QItemSection>
        <QItemLabel class="title">{{ title }}</QItemLabel>
        <QItemLabel caption>{{ caption }}</QItemLabel>
      </QItemSection>
    </RouterLink>
  </QItem>
</template>

<style scoped lang="scss">
.link-internal-wrapper {
  padding: 0;
}

.link-internal {
  padding: 8px 16px;
  display: flex;
  flex-wrap: nowrap;
  text-decoration: none;
  color: black;
  width: 100%;
}

.body--dark .link-internal {
  color: white;
}
</style>
