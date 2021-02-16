<template>
  <v-container>
    <div v-for="project in projects" :key="project.name">
      <project v-bind:project="project" class="mb-4" />
    </div>
  </v-container>
</template>

<script>
import Project from "../components/project.vue";
export default {
  data() {
    return {
      projects: [
        {
          date: "April 2021",
          name: "test123",
          img: "headshot.png",
          languages: "Golang 4ever",
          description: "it be like that",
          link: "https://github.com/allenkaplan",
        },
        {
          date: "April 2021",
          name: "test123",
          img: "headshot.png",
          languages: "Golang 4ever",
          description: "it be like that",
          link: "https://github.com/allenkaplan",
        },
        {
          date: "April 2021",
          name: "test123",
          img: "headshot.png",
          languages: "Golang 4ever",
          description: "it be like that",
          link: "https://github.com/allenkaplan",
        },
        {
          date: "April 2021",
          name: "test123",
          img: "headshot.png",
          languages: "Golang 4ever",
          description: "it be like that",
          link: "https://github.com/allenkaplan",
        },
        {
          date: "April 2021",
          name: "test123",
          img: "headshot.png",
          languages: "Golang 4ever",
          description: "it be like that",
          link: "https://github.com/allenkaplan",
        },
      ],
    };
  },
};
</script>

<style>
</style>