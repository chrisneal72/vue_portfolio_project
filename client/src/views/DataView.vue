<template>
  <v-container class="data-view">
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1>This page displays text pulled from MongoDB</h1>
        <div class="pl-view-welcome grid-container">
          <div class="grid-x grid-margin-x align-center">
            <div v-for="(sample, i) in samples" :key="i" class="cell small-12 medium-6">
              <h2>{{ sample.title }}</h2>
              <p v-html="sample.bodyCopy" />
            </div>
          </div>
        </div>
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
    };
  },
  methods: {
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

    searchTitle() {
      SampleDataService.findByTitle(this.title)
        .then((response) => {
          this.samples = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveSamples();
  },
};
</script>
