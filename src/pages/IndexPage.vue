<template>
  <q-page class="row items-center justify-evenly">
    <MemberItem v-for="member in members"
      :imgUrl="member.imgUrl"
      :memberName="member.memberName"
      :position="member.position"
      :key="member.id"
    />
  </q-page>
</template>

<script setup lang="ts">
import MemberItem from '../components/MemberItem.vue'

let id = 0

const members = [
  {
    id: id++,
    memberName: 'Lenni',
    imgUrl: 'src/assets/profilePictures/Lenni.png',
    position: 'Script Kiddie'
  },
  {
    id: id++,
    memberName: 'Cyberpunk2350',
    imgUrl: '../assets/profilePictures/CP2350.png',
    position: 'Network Guy'
  },
  {
    id: id++,
    memberName: 'ThatBomberBoi',
    imgUrl: '../assets/profilePictures/Bomber.png',
    position: 'Expedition Hacker'
  },
  {
    id: id++,
    memberName: 'KhaozTopsy',
    imgUrl: '../assets/profilePictures/Khaoz.png',
    position: 'Magic Man'
  }
]
</script>
