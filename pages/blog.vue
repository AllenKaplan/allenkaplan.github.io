<template>
  <v-container>
    <h1 class="blogTitle">BLOG</h1>
    <p class="blogSubtitle">
      <a href="https://dev.to/allenkaplan"> Articles from my dev.to blog</a>
    </p>
    <!-- -->
    <div class="container" :style="containerStyle">
      <v-card
        v-for="article of articles"
        :key="article.id"
        class="mx-auto"
        max-width="344"
      >
        <a :href="article.url" target="_blank">
          <v-img :src="article.cover_image"> </v-img>
        </a>
        <v-card-text>
          <v-card-title>
            {{ article.title }}
          </v-card-title>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn text color="teal accent-4" target="_blank" :href="article.url">
            Read <v-icon>external-link</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import axios from "Axios";
export default {
  data: () => ({
    articles: [],
    userName: "AllenKaplan",
    containerStyle: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
  }),

  methods: {
    async getArticles() {
      return axios.get(`https://dev.to/api/articles?username=${this.userName}`);
    },
  },

  async created() {
    this.articles = (await this.getArticles()).data.filter(
      (article) => article.type_of === "article"
    );
  },
};
</script>

<style>
.blogTitle {
  font-size: 72pt;
  text-align: center;
}

.blogSubtitle {
  text-align: center;
  font-size: 24pt;
}
</style>