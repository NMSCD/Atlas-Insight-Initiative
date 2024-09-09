<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import projects from '@/assets/projects.json';
</script>

<template>
  <QPage class="q-my-lg">
    <p class="text-center text-h5">Projects enabled by our research:</p>
    <div class="flex q-ma-xl projects-cards-wrapper justify-evenly">
      <ProjectCard
        v-for="project in projects"
        :description="project.description"
        :heading="project.name"
        :key="project.name"
        :url1="project.url1"
        :url1desc="project.url1desc"
        :url2="project.url2"
        :url2desc="project.url2desc"
        class="project-card"
      />
    </div>
  </QPage>
</template>

<style scoped lang="scss">
.projects-cards-wrapper {
  gap: 1rem;

  .project-card {
    width: 450px;
  }
}
</style>
