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
  position: String,
});
</script>

<style scoped lang="scss">
.member-item {
  text-align: center;
  background-color: $grey-1;
  border-radius: 0.5rem;
  width: 15rem;
  height: 20rem;
}

.body--dark .member-item {
  background-color: #222;
  color: white;
}

.avatar {
  width: 100%;
  height: 200px;
  border-radius: 0.5rem 0.5rem 0 0;
  user-select: none;
}

p {
  margin: 1rem 0.5rem 0.5rem;

  &.heading {
    font-size: 2rem;
  }
}
</style>
