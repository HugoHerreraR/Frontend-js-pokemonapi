<template>
  <v-container>
    <v-row>
      <v-col
        class="mx-auto"
        cols="3"
        v-for="(pokemon, id) in pokemons"
        :key="id"
      >
        <v-card class="mx-auto" max-width="344" >
          <div justify="center" align="center" style="background-color:#FF1744;"> 
          <v-avatar size="140" style="background-color:white">
          <v-img contain :src="pokemon.sprites.front_default"  height="200px"></v-img>
          </v-avatar>
          </div>
          <v-card-title>{{ pokemon.name }}</v-card-title>

          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Ver más <v-spacer></v-spacer>
              </v-expansion-panel-header>
              <v-expansion-panel-content height="400">
                <span>Datos basicos</span><br /><br />

                <v-row align="center">
                  <v-col cols="4"
                    ><span class="mx-auto"
                      >ID<br />
                      {{ pokemon.id }}</span
                    ></v-col
                  >
                  <v-col cols="4"
                    >Altura<br />
                    {{ pokemon.height }}</v-col
                  >
                  <v-col cols="4"
                    >Peso<br />
                    {{ pokemon.weight }}</v-col
                  >
                </v-row>
                <v-row align="center" justify="center">
                  <v-col cols="4">HP</v-col>
                  <v-col cols="8">
                    <v-progress-linear
                      class="mx-auto"
                      v-model="pokemon.stats[0].base_stat"
                      color="#388E3C"
                      height="16"
                    >
                      <template v-slot:default="{ value }">
                        <strong>{{ Math.ceil(value) }}</strong>
                      </template>
                    </v-progress-linear>
                  </v-col>

                  <v-col cols="4">Ataque</v-col>
                  <v-col cols="8">
                    <v-progress-linear
                      v-model="pokemon.stats[1].base_stat"
                      color="#F44336"
                      height="16"
                    >
                      <template v-slot:default="{ value }">
                        <strong>{{ Math.ceil(value) }}</strong>
                      </template>
                    </v-progress-linear>
                  </v-col>

                  <v-col cols="4">Defensa</v-col>
                  <v-col cols="8">
                    <v-progress-linear
                      v-model="pokemon.stats[2].base_stat"
                      color="#FFEB3B"
                      height="16"
                    >
                      <template v-slot:default="{ value }">
                        <strong>{{ Math.ceil(value) }}</strong>
                      </template>
                    </v-progress-linear>
                  </v-col>
                  <v-col cols="4">Ataque especial</v-col>
                  <v-col cols="8">
                    <v-progress-linear
                      v-model="pokemon.stats[3].base_stat"
                      color="#E91E63"
                      height="16"
                    >
                      <template v-slot:default="{ value }">
                        <strong>{{ Math.ceil(value) }}</strong>
                      </template>
                    </v-progress-linear>
                  </v-col>
                  <v-col cols="4">Defensa especial</v-col>
                  <v-col cols="8">
                    <v-progress-linear
                      v-model="pokemon.stats[4].base_stat"
                      color="#AEEA00"
                      height="16"
                    >
                      <template v-slot:default="{ value }">
                        <strong>{{ Math.ceil(value) }}</strong>
                      </template>
                    </v-progress-linear>
                  </v-col>
                  <v-col cols="4">Speed</v-col>
                  <v-col cols="8">
                    <v-progress-linear
                      v-model="pokemon.stats[5].base_stat"
                      color="#3F51B5"
                      height="16"
                    >
                      <template v-slot:default="{ value }">
                        <strong>{{ Math.ceil(value) }}</strong>
                      </template>
                    </v-progress-linear>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
    <!-- <div class="hello" v-for="pokemon in pokemons" :key="pokemon.item">
      <h1>{{ pokemon.name }}</h1>
      <v-img :src="pokemon.img" height="200px"></v-img>
    </div> -->
  </v-container>
</template>

<script>
// import todos from "../store/todos";
export default {
  data() {
    return {
      userData: [],
      pokemons: [],
      img: "",
      // show: false,
    };
  },

  created() {
    this.$store
      .dispatch("api/GET_USERS")
      .then((response) => {
        response.results.forEach((element) => {
          this.userData.push(element); //TODO
        });
        this.userData.forEach((pokemon) => {
          // this.pokemons.push(pokemon);
          // pokemon["img"] =
          //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
          //   pokemon.url.split("/")[6] +
          //   ".png";
          this.$store
            .dispatch("api/GET_ABOUT", pokemon.name)
            .then((response) => {
              this.pokemons.push(response);
              // pokemon["height"] = response.height;
              // pokemon["weight"] = response.weight;
              // pokemon["stats"] = response.stats;
              // pokemon["id"] = pokemon.url.split("/")[6];
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("p", this.pokemons);
  },
  methods: {
  },
};
</script>
<style scoped>
.margen {
  margin-bottom: 20px;
}
</style>
