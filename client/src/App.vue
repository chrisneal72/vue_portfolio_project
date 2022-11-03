<template>
  <v-app>
    <v-app-bar
      absolute
      color="#2e2e2e"
      dark
      shrink-on-scroll
      prominent
      src="./assets/images/main.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Chris Neal's Portfolio</v-app-bar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to='/'>Home</v-tab>
          <v-tab to='/about'>About</v-tab>
          <v-tab to='/data'>Data</v-tab>
          <v-tab to='/map'>Animated Map</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="100vh"
    >    
    <v-main>
      <router-view/>
    </v-main>
    </v-sheet>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
