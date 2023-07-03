<template>
  <div class="member-item">
    <q-img
      :src="props.imgUrl"
      spinner-color="white"
      class="avatar"
      fit="contain"
    />
    <p class="heading">{{ props.memberName }}</p>
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

  .avatar {
    width: 100%;
    height: 200px;
    border-radius: .5rem .5rem 0 0;
    user-select: none;
  }

  p {
    margin-block: 1rem .5rem;

    &.heading {
      font-size: 2rem;
    }
  }
</style>
