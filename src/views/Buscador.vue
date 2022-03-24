<template>
  <v-container>
    <br />
    <v-row>
      <v-col cols="4" justify="right" align="right">
        <v-text-field
          append-icon="mdi-magnify"
          label="Buscar proyecto"
          v-model="search"
          single-line
          solo
        ></v-text-field>
      </v-col>
      <v-col cols="3" >
        <v-btn @click="buscar">Buscar</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" justify="center" align="center">
        <v-card class="mx-auto" max-width="344px">
          <div
            justify="center"
            align="center"
            style="background-color: #ff1744"
          >
            <v-avatar size="140" style="background-color: white">
              <v-img contain :src="img" height="200px"></v-img>
            </v-avatar>
          </div>
          <v-card-title>{{ name }}</v-card-title>

          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Ver más <v-spacer></v-spacer>
              </v-expansion-panel-header>
              <v-expansion-panel-content height="400">
                <span>Datos</span><br /><br />

                <v-row align="center">
                  <v-col cols="4"
                    ><span class="mx-auto"
                      >ID<br />
                      {{ id }}</span
                    ></v-col
                  >
                  <v-col cols="4"
                    >Altura<br />
                    {{ height }}</v-col
                  >
                  <v-col cols="4"
                    >Peso<br />
                    {{ weight }}</v-col
                  >
                </v-row>
                <v-row align="center" justify="center">
                  <v-col cols="4">HP</v-col>
                  <v-col cols="8">
                    <v-progress-linear
                      class="mx-auto"
                      v-model="hp"
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
                      v-model="attack"
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
                      v-model="defense"
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
                      v-model="special_attack"
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
                      v-model="special_defense"
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
                      v-model="speed"
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "bulbasaur",
      consulta: [],
      pokemons: [{ name: String }],
      img: "",
      name: "",
      id: "",
      height: "",
      weight: "",
      base_stat:"",
      hp:"",
      attack:"",
      defense:"",
      special_attack:"",
      special_defense:"",
      speed: ""
      // nombre:""
    };
  },
  created() {
    var pokemon = this.search.toLowerCase();

    this.$store
      .dispatch("api/GET_ABOUT", this.search.toLowerCase())
      .then((response) => {
        this.name = response.name;
        this.img = response.sprites.front_default;
        this.id = response.id;
        this.height = response.height;
        this.weight = response.weight;
        this.hp = response.stats[0].base_stat;
        this.attack = response.stats[1].base_stat;
        this.defense = response.stats[2].base_stat;
        this.special_attack = response.stats[3].base_stat;
        this.special_defense = response.stats[4].base_stat;
        this.speed = response.stats[5].base_stat;
      })
      .catch((error) => {
        console.log(error);
      });
      
  },
  methods: {
    buscar() {
      // this.consulta.push("");
      this.$store
        .dispatch("api/GET_ABOUT", this.search.toLowerCase())
        .then((response) => {
          this.name = response.name;
          this.id = response.id;
          this.img = response.sprites.front_default;
          this.height = response.height;
          this.weight = response.weight;
                  this.hp = response.stats[0].base_stat;
        this.attack = response.stats[1].base_stat;
        this.defense = response.stats[2].base_stat;
        this.special_attack = response.stats[3].base_stat;
        this.special_defense = response.stats[4].base_stat;
        this.speed = response.stats[5].base_stat;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    nombre() {},
  },
};
</script>
