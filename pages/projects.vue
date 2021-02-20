<template>
  <v-container>
    <h1 class="projectTitle">PROJECTS</h1>
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
          date: "September 2020 - December 2020",
          name: "WheyPal",
          imgs: ["headshot.png", "headshot.png", "headshot.png"],
          languages: [
            "Golang",
            "Vue.js",
            "Vuex",
            "Docker",
            "Kubernetes",
            "ElasticSearch",
            "Redis",
            "PostgreSQL",
            "Amazon Web Services",
          ],
          description:
            "Architected system by designing a Vue.JS + Go web platform to match users as workout partners. " +
            "Used Go, SQL & Redis to create a service-oriented architecture with API Gateway. Implemented DevOps and CI/CD pipeline with Docker, Kubernetes & Elastic on AWS",
          links: [
            {
              name: "github",
              link: "https://github.com/eecs4314prismbreak/WheyPal",
            },
          ],
        },
        {
          date: "October 2020 - December 2020",
          name: "TheSmartShopper.Online",
          // imgs: ["headshot.png"],
          languages: [
            "Golang",
            "Vue.js",
            "Vuex",
            "Docker",
            "PostgreSQL",
            "Amazon Web Services",
          ],
          description:
            "Led the development of a 6 person team in implementing a system for optomizing time to find items for customers to increase efficency during COVID-19. The project was created as the EECS 4313 - Software Requirements Engineering Term Project",
          links: [
            { name: "github", link: "https://github.com/AkinAD/basedCode/" },
          ],
        },
        {
          date: "January 2021",
          name: "mtnr.tech",
          imgs: ["headshot.png"],
          languages: [
            "Golang",
            "Vue.js",
            "Vuex",
            "Docker",
            "CockroachDB",
            "Google Cloud Platform",
            "Firebase",
          ],
          description:
            "Throughout this hackathon, I mentored a team of new students who had never bmuilt a project before. Our project, mntr.tech is a flexible online platform for connecting mentors and mentees in a way that encourages user retention. ",
          links: [
            { name: "devpost", link: "https://devpost.com/software/mntr-tech" },
          ],
        },
        {
          date: "Febuary 2021",
          name: "Paers - Hackville20201",
          imgs: ["headshot.png"],
          languages: ["Flutter", "Dart", "Google Cloud Platform", "Firebase"],
          description:
            "Paers lets users select their specific personal attributes like their religion, race, ethnicity, sexual orientation, and helps them meet mentors, and peers who are willing to share their experiences. They will get a guide on how to be successful in life and their educational path.",
          links: [
            { name: "devpost", link: "https://devpost.com/software/paers" },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.projectTitle {
  font-size: 72pt;
  text-align: center;
}
</style>