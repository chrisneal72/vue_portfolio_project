<template>
  <v-container class="home-view">
    <v-row class="text-center">
      <!-- <v-col cols="12">
        <v-img
          :src="require('../assets/images/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col> -->

      <v-col class="mb-4">
        <h1>
          Welcome to my Vue Portfolio
        </h1>

        <p class="subheading font-weight-regular">
          This page is just beginning. I am currently in the process of gathering some of my previous work to combine and showcase here. Including work I did on https://19crimes.com/pages/rewards and https://energizergorewards.com/
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2>
          What's next?
        </h2>

        <v-row justify="center">
          <p>I am woring on the Data Tab to add some better retrieval and diplay of the data coming from MongoDB. I am also going to make a section where new data can be added.</p>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2>
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  
</style>

<script>
  export default {

    data: () => ({
      ecosystem: [
      ],
      importantLinks: [
        {
          text: 'github',
          href: 'https://github.com/chrisneal72',
        },
        {
          text: 'Energizer Go Rewards',
          href: 'https://energizergorewards.com/',
        },
        {
          text: '19 Crimes',
          href: 'https://19crimes.com/pages/rewards',
        },
      ],
    }),
  }
</script>