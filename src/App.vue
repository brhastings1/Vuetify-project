<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <v-app class="bg-grey-lighten-4">

    <v-app-bar :elevation="1">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>App Title</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn variant="text" router to="/">
        Home
      </v-btn>

      <v-btn variant="text" router to="/about">
        About
      </v-btn>


      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon="mdi-heart">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
            <v-list-item-title >{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>


    </v-app-bar>

    <v-navigation-drawer width=200 v-model="drawer">

      <v-list nav :lines="true">
        <v-list-subheader>Menu List</v-list-subheader>
        <v-divider></v-divider>

        <v-list-item v-for="(item, i) in items" :key="i" :value="item" active-color="primary" router :to="item.route">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>

        </v-list-item>

      </v-list>

    </v-navigation-drawer>

    <v-main>
      <v-container style="min-height: 400px ">
        <router-view />
        Content
      </v-container>

      <v-container>
        Some other content
      </v-container>

    </v-main>

    <v-footer fixed class="d-flex align-end bg-grey-lighten-1">
      <v-card tile flat width="100%" color="teal" dark class="pa-5 align-baseline d-flex align-center justify-center">
        &copy; 2022 My Footer
      </v-card>
    </v-footer>

  </v-app>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)

const items = [
  { text: 'Home', icon: 'mdi-clock', route: '/' },
  { text: 'About', icon: 'mdi-account', route: '/about' },
  { text: 'More', icon: 'mdi-flag', route: '/more' },
]

</script>
