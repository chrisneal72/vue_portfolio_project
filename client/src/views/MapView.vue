<template>
  <v-container class="map-view">
    <v-row class="text-center">
      <v-col
        class="col-sm-12 col-md-9 mb-4 ml-auto mr-auto"
        justify="center"
        no-gutters
      >
        <h1>A fun Progress Map</h1>
        <p>
          This map was developed for a promotion that rewarded people for
          participating over multiple days of the promotions life cycle. The
          participant could choose the vehicle they wanted and when they would
          return to the promotion and redeem their code, they would move forward
          one day on the map. The progress was controlled from a C# .Net backend
          that would pass the users current number of days completed. The map
          would load with their vehicle on their previos location and then move
          one space forward.
        </p>
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
      width: 1000px;
      z-index: 50;
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
    z-index: 51;
    left: 0;
    top: 0;
    transition: transform ease-in-out 1.5s;
  }

  #vehicleCar {
    display: block;
    position: absolute;
    z-index: 51;
    left: 0;
    top: 0;
    transition: transform ease-in-out 1.5s;
  }

  #vehicleVan {
    display: none;
    position: absolute;
    z-index: 51;
    left: 0;
    top: 0;
    transition: transform ease-in-out 1.5s;
  }

  #vehicleTruck {
    display: none;
    position: absolute;
    z-index: 51;
    left: 0;
    top: 0;
    transition: transform ease-in-out 1.5s;
  }

  .pin {
    position: absolute;
    z-index: 9;
  }
}
</style>

<script>
// import { mapGetters, mapState } from 'vuex';
  export default {
    data: () => ({
      currentPlay: 5,

      path: [
        '588,107.77', '617.64,149', '621.21,200.19', '612.28,241.43', '662.19,218.83', '692.06,164.19', '715.43,232.87', '687.85,281', '669.6,317', '773.77,317', '748.36,362.83', '707.26,378.28', '720.28,439.81', '653.13,387.21', '498.91,426', '458.83,385.17', '552.79,279.34', '567,187.55', '527.64,119.89', '438.79,67', '443,132.66', '464.57,199.17', '463.81,260.45', '360.4,252.91', '322.49,157.81', '220.62,155', '261.34,257.26', '261.34,355.81'
      ],
      myVehicle: document.getElementById("vehicleCar"),
      mapDiv: document.getElementById("map-box"),
      vehicleStartCoords: null,
      startPointFixed: null, //Correct coords based on screen size and add units
      pinSize: 0,
      carTranslate: null,
    }),

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

      //if day 1 use position [0] of array all others use the
      //position of the day before(-2 places in the array)
      this.vehicleStartCoords = this.currentPlay === 1 ? 0 : this.currentPlay - 2;
      this.startPointFixed = this.addVehicleUnits(this.path[this.vehicleStartCoords]); //Correct coords based on screen size and add units
      this.vehicleMove(`transform: translate(${this.startPointFixed})`)
      // this.myVehicle.style.transform = "translate(" + this.startPointFixed + ")"; //Vehicle initially placed on first point of the map
      // this.myVehicle.style.display = "block"; //Vehicle is hidden when it is placed and after the first move to the start is revealed
      if (this.currentPlay > 2) {
          for (let i = 1; i < this.currentPlay - 1; i++) {
              this.constructPin(i, this.path[i - 1], "visited"); //Drop pin on visited location
          }
      }
      if (this.currentPlay > 1) {
          this.animateMap();
      } else {
          this.constructPin(2, this.path[this.currentPlay], "upcoming"); //Call the function to create the Upcoming PIN and position it
      }
    },

    methods: {
      animateMap() {
        //I put this Timeout in as an option to have tha animation start later if they have to scroll
          let self = this;
        setTimeout(() => {
          //Move Vehicle to the next day and put pin on previous day
          console.log(self.path[parseInt(self.currentPlay) - 1])
          let vehicleUnits = this.addVehicleUnits(self.path[self.currentPlay - 1]);
          console.log(vehicleUnits)
          this.vehicleMove(`transform: translate(${vehicleUnits})`); //Move the vehicle (accounting for 0 based array)
          // setTimeout(function () {
          //   this.constructPin((this.currentPlay - 1), this.path[this.currentPlay - 2], "visited"); //Drop pin on previous location
          // }, 750);
          // if (this.currentPlay < 28) { //On the move of the Vehicle we place the Upcoming Pin Play #28 the pin is not req
          //   setTimeout(function () { //This timer delays the Upcoming Pin
          //     this.constructPin((this.currentPlay + 1), this.path[this.currentPlay], "upcoming"); //Call the function to create the Upcoming PIN and position it
          //   }, 1500);
          // }

        }, 4500);
      },

      //********** CREATE AND POSITION PIN **********//
      // constructPin(currentPinID, visitedPinCoord, pinType) {
      constructPin() {
        // let upcomingPinCoordsFixed = this.addPinUnits(visitedPinCoord); //Correct coords based on screen size and add units
        // let elem = document.createElement("img"); //Create the img that will be our Visited Pin

        //elm.attributes are constructing our pin image
        // elem.setAttribute("src", "/images/map_images/" + pinType + ".png");
        // elem.setAttribute("height", this.pinSize);
        // elem.setAttribute("width", this.pinSize);
        // elem.setAttribute("alt", "pin" + currentPinID);
        // elem.setAttribute("class", "pin");
        // elem.setAttribute("id", "pin" + currentPinID);
        // this.mapDiv.insertBefore(elem, this.mapDiv.firstChild); //Places the pin on the map, initially before the map image inside #map-div

        // document.getElementById("pin" + currentPinID).style.transform = "translate(" + upcomingPinCoordsFixed + ")"; //Places pin in proper location
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
        console.log(passedVehicleCoords)
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
      vehicleMove(movement) {
        console.log(movement)
        this.carTranslate = movement ? movement : null;
      },
    },

    computed: {
    }

  }
</script>
