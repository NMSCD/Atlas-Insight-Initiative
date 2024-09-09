<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink from '@/components/EssentialLink.vue';
import EssentialLinkInternal from '@/components/EssentialLinkInternal.vue';
import { pages } from '@/variables/objects';
import { useRoute, useRouter } from 'vue-router';
import { EssentialLinkProps } from '@/types/props';

const route = useRoute();
const router = useRouter();

const essentialLinks: EssentialLinkProps[] = [
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
  <QLayout view="lHh Lpr lFf">
    <QHeader elevated>
      <QToolbar>
        <QBtn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <QBtn
          v-if="route.meta.title"
          icon="arrow_back"
          flat
          dense
          round
          @click="router.push('/')"
        />

        <QToolbarTitle class="title"> {{ route.meta.title }} </QToolbarTitle>

        <div>Atlas Insight Initiative</div>
      </QToolbar>
    </QHeader>

    <QDrawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <QList>
        <QItemLabel header>Pages</QItemLabel>

        <EssentialLinkInternal
          v-for="page in pages"
          :key="page.title"
          v-bind="page"
        />
      </QList>

      <QSeparator />

      <QList>
        <QItemLabel header>Links</QItemLabel>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </QList>
    </QDrawer>

    <QPageContainer>
      <RouterView />
    </QPageContainer>
  </QLayout>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
}
</style>
