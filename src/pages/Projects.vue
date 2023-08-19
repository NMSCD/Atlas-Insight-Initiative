<script setup lang="ts">
import ProjectCard from 'components/ProjectCard.vue';

interface Project {
  name: string;
  url1: string;
  url1desc: string;
  url2?: string;
  url2desc?: string;
  description: string;
}

const projects: Project[] = [
  {
    name: 'Hub Discovery Data',
    url1: 'https://data.nmsgalactichub.com/',
    url1desc: 'Project Website',
    url2: 'https://github.com/Lenni009/Hub-Discovery-Data',
    url2desc: 'Project Repository',
    description: 'Website to search the discovery data of the Galactic Hub',
  },
];
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <ProjectCard
      v-for="project in projects"
      :heading="project.name"
      :description="project.description"
      :url1="project.url1"
      :url1desc="project.url1desc"
      :url2="project.url2"
      :url2desc="project.url2desc"
    />
  </q-page>
</template>
