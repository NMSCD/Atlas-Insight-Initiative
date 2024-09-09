<script setup lang="ts">
import { pages } from '@/variables/objects';
</script>

<template>
  <QPage>
    <h1 class="text-center text-h3 q-my-xl">Atlas Insight Initiative</h1>
    <div class="row justify-evenly cards">
      <div
        v-for="link in pages"
        :key="link.title"
      >
        <RouterLink
          class="link"
          :to="link.link as string"
          :key="link.link"
        >
          <QCard
            :class="{ 'color-black': !$q.dark.isActive }"
            class="card"
          >
            <QCardSection>
              <QIcon
                :name="link.icon"
                size="4rem"
              />
            </QCardSection>
            <QSeparator />
            <QCardSection class="title">
              {{ link.title }}
            </QCardSection>
            <QCardSection>
              {{ link.caption }}
            </QCardSection>
          </QCard>
        </RouterLink>
      </div>
    </div>
  </QPage>
</template>

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
