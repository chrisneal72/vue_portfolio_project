<template>
  <v-container class="map-view">
    <v-row class="text-center">
      <v-col
        class="col-sm-12 col-md-9 mb-4 ml-auto mr-auto text-center"
        justify="center"
        no-gutters
      >
        <h1>A fun Progress Map</h1>
      </v-col>
      <v-col
        class="col-sm-12 col-md-9 mb-4 ml-auto mr-auto text-left"
        justify="center"
        no-gutters
      >
        <p>
          I animated this map for a Culver's promotion while working at PrizeLogic. Customers were rewarded for participating over multiple days of the promotion’s life cycle. The participant could choose from 4 vehicles as their playing piece and when they would return to the promotion and redeem their code, they would move forward one day on the map.
        </p>
        <p>
          The progress was controlled from a C# .Net backend that would pass the users current number of days completed to the front. The map would load with their vehicle on their previous location and then move one space forward.
        </p>
        <p>
          This was originally built in Vanilla JavaScript. I have reworked this for Vue. I still need to add another pulldown menu to change the vehicle type. I will be puttting the current day and a few other variable into a state so that when the page is left and you come back it will remember where you were.
        </p>
        <p>
          Also, on the list is to figure out how Vuetify handles class level media breakpoints. I found some information, but a quick test was not successful, so I put it aside for the moment.
        </p>
      </v-col>
      <v-col
        class="col-12 col-md-9 mb-4 ml-auto mr-auto"
        justify="center"
        no-gutters
      >
        <v-select
          v-model="selectedDay"
          :items="items"
          item-text="day"
          item-value="value"
          filled
          label="Select current Day"
          id="daySelector"
          @change="changeCurrentDay"
        ></v-select>
      </v-col>
      <v-col class="col-12 mb-4 ml-auto mr-auto">
        <div class="map-box">
        <img
          src="../assets/map_images/rv.png"
          id="vehicleRV"
          alt="Your Vehicle"
        />
        <img
          src="../assets/map_images/car.png"
          id="vehicleCar"
          alt="Your Vehicle"
          :class="{showPiece: showVehicle, hidePiece: !showVehicle}"
          :style="carTranslate"
        />
        <img
          src="../assets/map_images/van.png"
          id="vehicleVan"
          alt="Your Vehicle"
        />
        <img
          src="../assets/map_images/truck.png"
          id="vehicleTruck"
          alt="Your Vehicle"
        />
        <v-img
          v-for="pin in pinList"
          :key="pin.currentPinID"
          :id="'pin'+pin.currentPinID"
          :style="pin.pinLocation"
          :class="{showPiece: showPin && pin.currentPinID === currentPlay - 1, hidePiece: !showPin && pin.currentPinID === currentPlay - 1}"
          class="pin"
          src="../assets/map_images/visited.png"
          height="2.1875rem"
          width="2.1875rem"
          alt="visited pin"
        />
        <v-img
          :style="nextPinLocation"
          :class="{showPiece: showNextPin , hidePiece: !showNextPin}"
          src="../assets/map_images/upcoming.png"
          id="upcomingPin"
          height="2.1875rem"
          width="2.1875rem"
          alt="upcoming pin"
          class="pin"
        />
        <v-img
          src="../assets/map_images/gameMap.png"
          class="map"
          alt="Road Trip Map"
        />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.map-view {
  /* //// MAP STYLES ///////////// */
  .map-box {
    position: relative;
    margin: 2rem auto;
    width: 1000px;
    // max-width: 320px;

    /* @include breakpoint(medium) {
        max-width: rem-calc(750);
    }

    @include breakpoint(large) {
        max-width: rem-calc(1000);
    } */

    .map {
      // max-width: 320px;
      max-width: 1000px;
      z-index: 5;
      margin: auto;

      /* @include breakpoint(medium) {
          max-width: rem-calc(750);
      }

      @include breakpoint(large) {
          max-width: rem-calc(1000);
      } */
    }
  }

  #vehicleRV {
    display: none;
    position: absolute;
    z-index: 7;
    left: 0;
    top: 0;
    transition: transform ease-in-out 1.5s;
  }

  #vehicleCar {
    position: absolute;
    z-index: 7;
    left: 0;
    top: 0;
    transition: transform ease-in-out 1.5s;
  }

  #vehicleVan {
    display: none;
    position: absolute;
    z-index: 7;
    left: 0;
    top: 0;
    transition: transform ease-in-out 1.5s;
  }

  #vehicleTruck {
    display: none;
    position: absolute;
    z-index: 7;
    left: 0;
    top: 0;
    transition: transform ease-in-out 1.5s;
  }

  .pin {
    position: absolute;
    z-index: 6;
    transition: transform ease-in-out 1.5s;
  }

  .showPiece {
    display: block;
  }

  .hidePiece {
    display: none;
  }
}
</style>

<script>
// import { mapGetters, mapState } from 'vuex';
  export default {
    data: () => ({
      currentPlay: 1,
      selectedDay: 0,
      path: [
        '588,107.77', '617.64,149', '621.21,200.19', '612.28,241.43', '662.19,218.83', '692.06,164.19', '715.43,232.87', '687.85,281', '669.6,317', '773.77,317', '748.36,362.83', '707.26,378.28', '720.28,439.81', '653.13,387.21', '498.91,426', '458.83,385.17', '552.79,279.34', '567,187.55', '527.64,119.89', '438.79,67', '443,132.66', '464.57,199.17', '463.81,260.45', '360.4,252.91', '322.49,157.81', '220.62,155', '261.34,257.26', '261.34,355.81'
      ],
      myVehicle: document.getElementById("vehicleCar"),
      mapDiv: document.getElementById("map-box"),
      vehicleStartCoords: null,
      startPointFixed: null, //Correct coords based on screen size and add units
      pinSize: 0,
      carTranslate: null,
      showVehicle: false,
      showPin: false,
      showNextPin: false,
      nextPinLocation: null,
    }),

    methods: {
      setupMap() {
        this.showVehicle = false; // Hide Vehicle to shift it to Start Point
        this.showNextPin = false; // Hide Nex Pin to shift it to Start Point
        //if day 1 use position [0] of array all others use the
        //position of the day before(-2 places in the array)
        this.vehicleStartCoords = this.currentPlay === 1 ? 0 : this.currentPlay - 2;
        this.startPointFixed = this.addVehicleUnits(this.path[this.vehicleStartCoords]); //Correct coords based on screen size and add units
        this.carTranslate = `transform: translate(${this.startPointFixed})`;
        if(this.currentPlay === 1){
          let units = this.addPinUnits(this.path[this.currentPlay])
          this.nextPinLocation = `transform: translate(${units})`;
        }else if(this.currentPlay < 28){
          let units = this.addPinUnits(this.path[this.currentPlay - 1])
          this.nextPinLocation = `transform: translate(${units})`;
        }
        setTimeout(() => {this.showVehicle = true;},1500); //Vehicle is hidden when it is placed because of the transition, we don't want it floating in from its start point, we need to let in get into place.
        setTimeout(() => {this.showNextPin = true;},1500); //Next pin is hidden when it is placed because of the transition, we don't want it floating in from its start point, we need to let in get into place.

        if (this.currentPlay > 1) {
            this.animateMap();
        }
      },

      animateMap() {
        //I put this Timeout in as an option to have tha animation start later if they have to scroll
          let self = this;
        setTimeout(() => {
          //Move Vehicle to the next day and put pin on previous day
          let vehicleUnits = this.addVehicleUnits(self.path[self.currentPlay - 1]);
          this.carTranslate = `transform: translate(${vehicleUnits})`; //Move the vehicle (accounting for 0 based array)
          if(this.currentPlay < 27){
            let units = this.addPinUnits(this.path[this.currentPlay])
            this.nextPinLocation = `transform: translate(${units})`;
          }
          setTimeout(() => {this.showPin = true;}, 750);
        }, 2500);
      },

      //********** CORRECTS PIN COORDS IF REQ BASED ON SIZE AND ANDS UNITS **********//
      addPinUnits(passedPinCoords) {
        let pinCoordsArray = passedPinCoords.split(",");

        //Adjust for screen size and add "px"
        if (window.innerWidth < 768) {
            return '' + ((pinCoordsArray[0] *= .32) - 4.375) + "px, " + ((pinCoordsArray[1] *= .32) - 8.75) + "px";
        }
        else if (window.innerWidth < 1024) {
            return '' + ((pinCoordsArray[0] *= .75) - 13.125) + "px, " + ((pinCoordsArray[1] *= .75) - 26.25) + "px";
        } else {
            return '' + (pinCoordsArray[0] - 17.5) + "px, " + (pinCoordsArray[1] - 35) + "px";
        }
      },

      //********** CORRECTS VEHICLE COORDS IF REQ BASED ON SIZE AND ANDS UNITS **********//
      addVehicleUnits(passedVehicleCoords) {
        let vehicleCoordsArray = passedVehicleCoords.split(",");

        //Adjust for screen size and add "px"
        if (window.innerWidth < 768) {
            return '' + ((vehicleCoordsArray[0] *= .32) - 13) + "px, " + ((vehicleCoordsArray[1] *= .32) - 13) + "px";
        }
        else if (window.innerWidth < 1024) {
            return '' + ((vehicleCoordsArray[0] *= .75) - 30) + "px, " + ((vehicleCoordsArray[1] *= .75) - 30) + "px";
        } else {
            return '' + (vehicleCoordsArray[0] - 40) + "px, " + (vehicleCoordsArray[1] - 40) + "px";
        }
      },
      changeCurrentDay(){
        this.showPin = false;
        this.currentPlay = this.selectedDay;
        this.setupMap();
        this.animateMap();
      },
    },

    computed: {
      items(){
        let itemList = [];
        for(var i = 1; i < 29; i++) { itemList[i-1] = {value: i, day: 'Day ' + i} }
        return itemList;
      },
      pinList(){
        let myPinList = [];
        for(var i = 1; i <= this.currentPlay - 1; i++) {
          let myPinCoords = this.addPinUnits(this.path[i - 1]);
          myPinList[i-1] = {
            currentPinID: i,
            pinLocation: `transform: translate(${myPinCoords})`,
          }
        }
        return myPinList;
      },
    },

    mounted() {
      if (window.innerWidth < 768) {
          this.myVehicle.width = "26";
          this.pinSize = "8.75";
      }
      else if (window.innerWidth < 1024) {
          this.myVehicle.width = "60";
          this.pinSize = "26.25";
      } else {
          this.pinSize = "35";
      }
      this.setupMap()
    },

  }
</script>
