<template>
  <v-card class="mx-auto" max-width="80%" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline">{{ project.languages }}</div>
        <div class="mb-4">{{ project.date }}</div>
        <v-list-item-title class="headline mb-1">
          {{ project.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ project.description }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="128" color="grey">
        <v-img :src="project.img" />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded :href="project.link"> Github Link</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {};
  },
};
</script>

<style>
</style>