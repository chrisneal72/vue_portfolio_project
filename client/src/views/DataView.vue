<template>
  <v-container class="data-view">
    <v-row class="text-center">
      <v-col class="col-12 mb-4">
        <h1>This page displays text pulled from&nbsp;MongoDB</h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col  v-for="(sample, i) in samples" :key="i" class="col-sm-12 col-md-6 mb-4">
        <h2>{{ sample.title }}</h2>
        <p v-html="sample.bodyCopy" />
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="col-sm-12 col-md-4 mb-4">
        {{ recordCount }}
      </v-col>
      <v-col class="col-sm-12 col-md-8 mb-4">
        asd
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SampleDataService from "../services/SampleDataService";

export default {
  name: "sampless-list",
  data() {
    return {
      samples: [],
      currentSample: null,
      currentIndex: -1,
      title: "",
      recordCount: null,
    };
  },

  methods: {
    retrieveRecordCount() {
      SampleDataService.retrieveRecordCount()
        .then((response) => {
          this.recordCount = response.data.data;
          console.log(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    retrieveSamples() {
      SampleDataService.getAll()
        .then((response) => {
          this.samples = response.data.data;
          console.log(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveSamples();
      this.currentSample = null;
      this.currentIndex = -1;
    },

    setActiveSample(sample, index) {
      this.currentSample = sample;
      this.currentIndex = index;
    },

    removeAllSamples() {
      SampleDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle(x) {
      SampleDataService.findByTitle(x)
        .then((response) => {
          this.samples = response.data.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    // this.retrieveSamples();
    this.retrieveRecordCount();
    this.searchTitle('Data 1');
  },
};
</script>
