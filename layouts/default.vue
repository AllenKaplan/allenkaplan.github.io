<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      disable-resize-watcher
      disable-route-watcher
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-switch
            v-model="$vuetify.theme.dark"
            label="Dark Mode"
            class="pl-4"
          ></v-switch>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      </span>
      <v-app-bar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ title }}
        </router-link>
      </v-app-bar-title>
      <v-spacer />
      <v-app-bar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          class="ml-4"
        >
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-app-bar-items>
      <div class="pa-2">
        <v-switch
          v-model="$vuetify.theme.dark"
          label="Dark Mode"
          class="ml-4 pt-6"
        ></v-switch>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/",
        },
        // {
        //   icon: "mdi-account-circle",
        //   title: "About",
        //   to: "/about",
        // },
        {
          icon: "mdi-file-document",
          title: "Resume",
          to: "/resume",
        },
        {
          icon: "mdi-briefcase-variant",
          title: "Projects",
          to: "/projects",
        },
        {
          icon: "mdi-book-open-blank-variant",
          title: "Blog",
          to: "/blog",
        },
        {
          icon: "mdi-card-account-mail",
          title: "Contact",
          to: "/contact",
        },
      ],
      title: "Allen Kaplan // SWE",
    };
  },
};
</script>

<style>
#app {
  font-family: "Segoe UI", sans-serif;
}
</style>