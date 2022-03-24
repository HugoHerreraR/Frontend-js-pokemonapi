<template>
  <div>
    <v-navigation-drawer v-model="sidebar" app color="#880E4F" dark>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="margen" color="#880E4F" dark>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="#" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-main>
      <transition>
        <router-view></router-view>
      </transition>
    </v-main>
    <!-- <pokemons/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import pokemons from '@/components/pokemons.vue'

export default {
  name: 'Home',
  components: {
    // pokemons
  },
  data() {
    return {
      appTitle: "Pokémons",
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/pokemons" },
        { title: "Busca tu Pokémon", path: "/search" },
      ],
      pagina: ""
    };
  },
  created() {
  },
  computed: {

  },


}
</script>
