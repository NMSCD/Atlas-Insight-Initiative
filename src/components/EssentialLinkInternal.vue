<script setup lang="ts">
import { EssentialLinkInternalProps } from '@/types/props';
withDefaults(defineProps<EssentialLinkInternalProps>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>

<template>
  <q-item
    clickable
    class="link-internal-wrapper"
  >
    <router-link
      class="link-internal"
      :to="link"
    >
      <q-item-section
        v-if="icon"
        avatar
        class="icon"
      >
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="title">{{ title }}</q-item-label>
        <q-item-label caption>{{ caption }}</q-item-label>
      </q-item-section>
    </router-link>
  </q-item>
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
