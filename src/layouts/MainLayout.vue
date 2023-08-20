<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import EssentialLinkInternal from 'components/EssentialLinkInternal.vue';
import { pages } from 'src/variables/objects';
import { useRoute, useRouter } from 'vue-router';
import { EssentialLinkInternalProps } from '@/types/props';

const route = useRoute();
const router = useRouter();

const essentialLinks: EssentialLinkInternalProps[] = [
  {
    title: 'NMSCD',
    caption: 'Main Page',
    icon: 'img:https://raw.githubusercontent.com/NMSCD/About/master/logo/NMSCD.png',
    link: 'https://nmscd.com',
  },
  {
    title: 'Github',
    caption: 'github.com/NMSCD',
    icon: 'code',
    link: 'https://github.com/NMSCD',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-btn
          v-if="route.meta.title"
          icon="arrow_back"
          flat
          dense
          round
          @click="router.push('/')"
        />

        <q-toolbar-title class="title"> {{ route.meta.title }} </q-toolbar-title>

        <div>Atlas Insight Initiative</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header> Pages </q-item-label>

        <EssentialLinkInternal
          v-for="page in pages"
          :key="page.title"
          v-bind="page"
        />
      </q-list>

      <q-separator />

      <q-list>
        <q-item-label header> Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
}
</style>
