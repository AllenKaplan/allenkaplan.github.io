<template>
  <v-card class="mx-auto my-6 pa-4" max-width="80%" outlined>
    <div class="ma-2">
      <h1 class="headline mb-1">
        {{ project.name }}
      </h1>
      <p class="mb-4">{{ project.date }}</p>

      <v-chip
        v-for="lang in project.languages"
        :key="lang"
        class="overline mb-6 mx-1"
      >
        {{ lang }}
      </v-chip>

      <p class="description">{{ project.description }}</p>

      <v-carousel v-if="project.imgs" v-model="model" max-height="75vh">
        <v-carousel-item v-for="img in project.imgs" :key="img">
          <v-img :src="img" contain height="100%" />
        </v-carousel-item>
      </v-carousel>

      <v-row class="my-4">
        <div v-for="link in project.links" :key="link.link" class="mx-2">
          <v-btn outlined rounded :href="link.link">{{ link.name }}</v-btn>
        </div>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return { model: 0 };
  },
};
</script>

<style>
.description {
  font-size: 20px;
}
</style>