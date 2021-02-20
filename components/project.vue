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

      <v-carousel v-if="project.imgs" v-model="model">
        <v-carousel-item v-for="img in project.imgs" :key="img">
          <v-sheet height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <v-img :src="img" />
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <div v-for="link in project.links" :key="link.link" class="my-4">
        <v-btn outlined rounded :href="link.link">{{ link.name }}</v-btn>
      </div>
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