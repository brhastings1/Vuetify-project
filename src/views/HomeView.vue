<template>

  <NavBar> </NavBar>
  <div class="home">
    <h1 class="text-h4">This is the HomeView Component ...</h1>

    <div > 
      <v-btn class="bg-pink text-white ma-1" prepend-icon="mdi-heart" right>
        <span>click me</span>
      </v-btn>
    </div>
    
    <div > 
      <v-btn class="bg-pink text-white ma-1"  prepend-icon="mdi-heart mx-4">
        <span>click me</span>
      </v-btn>
    </div>

    <v-btn variant="text" color="pink">click me</v-btn>
    <v-btn variant="tonal" color="pink">
      <v-icon icon="mdi-email-outline" left="true" class="mr-2"></v-icon>text</v-btn>

    <v-btn class="ma-2" color="primary" size="medium" dark>
      <span class="mx-2">Accept</span>
      <v-icon dark left class="ma-2">
        mdi-checkbox-marked-circle
      </v-icon>
    </v-btn>

    <v-btn color="primary" dark>
      <span>Accept</span>
      <v-icon right>
        mdi-checkbox-marked-circle
      </v-icon>
    </v-btn>

    <p class="bg-red-lighten-5 text-yellow-darken-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
      dolores quo doloribus eaque placeat fuga debitis fugiat veniam, aspernatur reprehenderit labore odio. Doloribus,
      consectetur. Tempore non eius autem vero dolorem.</p>
  </div>

</template>

<script setup>
import NavBar from '@/components/NavBar.vue';

  // 
</script>


