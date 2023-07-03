<template>
  <div class="member-item">
    <q-img
      :src="props.imgUrl"
      spinner-color="white"
      class="avatar"
    />
    <h3>{{ props.memberName }}</h3>
    <p>{{ props.position }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imgUrl: String,
  memberName: String,
  position: String
})
</script>

<style scoped lang="scss">
  .member-item {
    display: grid;
    grid-template-rows: repeat(3, auto);
    text-align: center;
    background-color: #eee;
    border-radius: .5rem;
    width: 15rem;
    height: 20rem;
  }

  h3 {
    font-size: 2rem;
    margin-block: auto;
  }

  .avatar {
    width: 100%;
    border-radius: .5rem .5rem 0 0;
  }

  p {
    margin-block: auto;
  }
</style>
