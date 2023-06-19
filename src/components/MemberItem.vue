<template>
  <div class="member-item">
    <q-img
      :src="props.imgUrl"
      spinner-color="white"
    />
    <h3>{{ props.memberName }}</h3>
    <div>{{ props.position }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imgUrl: String,
  memberName: String,
  position: String
})
</script>

<style scoped>
  .member-item {
    text-align: center;
  }

  h3 {
    font-size: 2rem;
  }

  img {
    width: 250px;
  }
</style>
