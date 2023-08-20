<template>
  <q-page>
    <h1 class="text-center text-h3 q-my-xl">Atlas Insight Initiative</h1>
    <div class="row justify-evenly cards">
      <div v-for="link in pages">
        <router-link
          class="link"
          :to="(link.link as string)"
          :key="link.link"
        >
          <q-card
            :class="{ 'color-black': !$q.dark.isActive }"
            class="card"
          >
            <q-card-section>
              <q-icon
                :name="link.icon"
                size="4rem"
              />
            </q-card-section>
            <q-separator />
            <q-card-section class="title">
              {{ link.title }}
            </q-card-section>
            <q-card-section>
              {{ link.caption }}
            </q-card-section>
          </q-card>
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { pages } from 'src/variables/objects';
</script>

<style scoped lang="scss">
@use 'sass:color';
.link {
  text-decoration: none;
}

.card {
  text-align: center;
  width: 15rem;
  transition: background-color 0.3s;

  .title {
    font-size: 1.75rem;
  }
}

.body--dark .card:hover {
  background-color: color.scale(#222, $lightness: +10%);
}
.body--light .card:hover {
  background-color: color.scale(#fff, $lightness: -10%);
}

.cards {
  gap: 1rem;
}

.color-black {
  color: black;
}
</style>
