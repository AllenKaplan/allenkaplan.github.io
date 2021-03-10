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
          name:
            "WheyPal -- Your Workout Buddy Finder // EECS 4314 Advanced Software Engineering",
          imgs: ["wheypal-1.png", "wheypal-2.png"],
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
          name:
            "TheSmartShopper.Online -- Shopping, but smarter // EECS 4312 Software Requirements Engineering",
          imgs: [
            "thesmartshopper-1.png",
            "thesmartshopper-2.png",
            "thesmartshopper-3.png",
          ],
          languages: [
            "Golang",
            "Vue.js",
            "Vuex",
            "Docker",
            "PostgreSQL",
            "Amazon Web Services",
          ],
          description:
            "Led the development of a 6 person team in implementing a system for optomizing time to find items for customers to increase efficency during COVID-19.",
          links: [
            { name: "github", link: "https://github.com/AkinAD/basedCode/" },
            { name: "website", link: "https://thesmartshopper.online/home" },
          ],
        },
        {
          date: "Feburary 2021",
          name: "Rendezvous - Brickhack 7 // CockroachDB Prize",
          imgs: [
            "rendezvous-1.png",
            "rendezvous-2.png",
            "rendezvous-3.png",
            "rendezvous-4.png",
          ],
          languages: [
            "Golang",
            "React.js",
            "Docker",
            "CockroachDB",
            "Google Cloud Platform",
            "Firebase",
          ],
          description:
            "Created a 3-tier web platform to create 'rendezvous'' through matching users based on interest at locations around them. Now, people can focus on where they want to go instead of who they want to go with. Our team won the CockroachDB Prize for use of the platform to enable large scale matchmaking.",
          links: [
            {
              name: "devpost",
              link: "https://devpost.com/software/rendezvous-bredsm",
            },
            {
              name: "github org",
              link: "https://github.com/brickhack7",
            },
            {
              name: "pitch deck",
              link:
                "https://docs.google.com/presentation/d/15dhcTAOOlJLnyDyCVQNPwH8hMKHtCepHoQ3SjE5OA1U/edit?usp=sharing",
            },
          ],
        },
        {
          date: "January 2021",
          name: "mtnr.tech - HackTheNorth++",
          imgs: [
            "mntr-1.png",
            "mntr-2.png",
            "mntr-3.png",
            "mntr-4.jpg",
            "mntr-5.jpg",
          ],
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
            {
              name: "github - backend",
              link: "https://github.com/hackthenorth2020/mntr-backend/",
            },
            {
              name: "github - frontend",
              link: "https://github.com/hackthenorth2020/vue-firebase",
            },
          ],
        },
        {
          date: "Febuary 2021",
          name: "Paers - Hackville20201",
          imgs: ["paers-1.png", "paers-2.jpg", "paers-3.jpg", "paers-4.png"],
          languages: ["Flutter", "Dart", "Google Cloud Platform", "Firebase"],
          description:
            "Paers lets users select their specific personal attributes like their religion, race, ethnicity, sexual orientation, and helps them meet mentors, and peers who are willing to share their experiences. They will get a guide on how to be successful in life and their educational path.",
          links: [
            { name: "devpost", link: "https://devpost.com/software/paers" },
            {
              name: "github",
              link: "https://github.com/sunoftherock/HackvilleChat",
            },
            { name: "pitch", link: "https://youtu.be/0lM3O-PBC34" },
          ],
        },
        {
          date: "January 2020 - April 2020",
          name: "Hunter x Hunter Card Shop // EECS 4413 E-Commerce Systems",
          languages: [
            "Java",
            "Apache Tomcat",
            "Java Servlets",
            "REST API",
            "JSON",
            "SQL",
            "DB2",
            "HTML",
            "CSS",
            "JavaScript",
          ],
          description:
            "On a team of 4 people, I worked as the project manager and systems desicner to create an e-commerce solution. " +
            "The Masadora Card Shop was based on the fictional card shop based on the book and show 'Hunter x Hunter'." +
            " System was created through Java Tomcat with an MVC framework and SQL database.",
          links: [
            {
              name: "github",
              link: "https://github.com/AllenKaplan/Card-Shop",
            },
          ],
        },
        {
          date: "January 2019 - April 2019",
          name: "Radio Reader",
          languages: ["Go"],
          description:
            "Built with Golang in August 2019 to add microservices communicating through gRPC and concurrency." +
            " Used cron jobs to perform HTTP GET requests to web player’s API which stored responses to a SQL database. " +
            "Developed analytics dashboard of the most played songs, most played artists and new songs this week.",
          links: [
            {
              name: "github - go",
              link: "https://github.com/AllenKaplan/RadioReader-Go",
            },
            {
              name: "github - java",
              link: "https://github.com/AllenKaplan/RadioReader-Java",
            },
          ],
        },
        {
          date: "August 2018 - September 2018",
          name:
            "TalkBox -- NLP x Assistive Speech Device // EECS 2311 Software Development Project",
          languages: ["Java", "Jenkins", "CI/CD"],
          description:
            "Developed by a team of three people, the assistive speech device named TalkBox supports individuals who are unable to speak. " +
            "With the Natural Language Generation Java Library, the TalkBox allows the user to select various nouns, verbs and pronouns to generate sentences that are then read with text-to-speech. The TalkBox simulator and configuration apps are derived from the TalkBox Community Research Project, which has been undertaken by faculty and students of the Lassonde School of Engineering at York University to provide a low-cost open-source, open-hardware Speech Generating Device for those who need such devices.",
          links: [
            {
              name: "github",
              link: "https://github.com/AllenKaplan/TalkBox",
            },
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