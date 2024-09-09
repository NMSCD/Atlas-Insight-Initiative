<script setup lang="ts">
import MemberItem from '@/components/MemberItem.vue';
import members from '@/assets/members.json';
</script>

<template>
  <QPage class="row items-center justify-evenly member-cards q-mx-xl q-mt-xl">
    <MemberItem
      v-for="member in members"
      :imgUrl="member.imgUrl"
      :memberName="member.memberName"
      :position="member.position"
      :key="member.memberName"
      class="shadow-1"
    />
  </QPage>
</template>

<style scoped lang="scss">
.member-cards {
  align-items: start;
  gap: 2rem;
}
</style>
