<template>
  <q-page class="row justify-evenly cards">
    <router-link
      class="link"
      v-for="link in pages"
      :to="(link.link as string)"
      :key="link.link"
    >
      <q-card class="card">
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
  margin-block-start: 4rem;
  gap: 1rem;
}
</style>
