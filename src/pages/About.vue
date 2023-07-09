<template>
  <q-page class="row items-center justify-evenly member-cards">
    <MemberItem
      v-for="member in members"
      :imgUrl="member.imgUrl"
      :memberName="member.memberName"
      :position="member.position"
      :key="member.id"
    />
  </q-page>
</template>

<script setup lang="ts">
import MemberItem from '../components/MemberItem.vue';

let id = 0;

const members = [
  {
    id: id++,
    memberName: 'Lenni',
    imgUrl: 'profilePictures/Lenni.png',
    position: 'Script Kiddie',
  },
  {
    id: id++,
    memberName: 'Cyberpunk2350',
    imgUrl: 'profilePictures/CP2350.png',
    position: 'Network Guy',
  },
  {
    id: id++,
    memberName: 'ThatBomberBoi',
    imgUrl: 'profilePictures/Bomber.gif',
    position: 'Expedition Hacker',
  },
  {
    id: id++,
    memberName: 'KhaozTopsy',
    imgUrl: 'profilePictures/Khaoz.png',
    position: 'Magic Man',
  },
  {
    id: id++,
    memberName: 'Sphynxcolt',
    imgUrl: 'profilePictures/Sphynxcolt.png',
    position: 'Art Boi',
  },
  {
    id: id++,
    memberName: 'Corvus',
    imgUrl: 'profilePictures/Corvus.png',
    position: 'Professional Crow',
  },
  {
    id: id++,
    memberName: 'Blend3rman',
    imgUrl: 'profilePictures/Blend3rman.png',
    position: 'Probably a person',
  },
];
</script>

<style lang="scss">
.member-cards {
  align-items: start;
  margin-block-start: 10rem;
  gap: 2rem;
  margin-inline: 2rem;
}
</style>
