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

        <q-toolbar-title>
          About HG-NMS-API-RE-Team
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

      <q-separator />

      <q-list>
        <q-item-label
          header
        >
          Pages
        </q-item-label>

        <EssentialLinkInternal
          v-for="page in pages"
          :key="page.title"
          v-bind="page"
        />
      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue'
import EssentialLinkInternal, { EssentialLinkInternalProps } from 'components/EssentialLinkInternal.vue'

const pages: EssentialLinkInternalProps[] = [
  {
    title: 'NMSCD',
    caption: 'Main Page',
    icon: 'img:https://raw.githubusercontent.com/NMSCD/About/master/logo/NMSCD.png',
    link: '/nmscd'
  },
  {
    title: 'Github',
    caption: 'github.com/NMSCD',
    icon: 'code',
    link: '/About'
  }
]

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'NMSCD',
    caption: 'Main Page',
    icon: 'img:https://raw.githubusercontent.com/NMSCD/About/master/logo/NMSCD.png',
    link: 'https://nmscd.com'
  },
  {
    title: 'Github',
    caption: 'github.com/NMSCD',
    icon: 'code',
    link: 'https://github.com/NMSCD'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
