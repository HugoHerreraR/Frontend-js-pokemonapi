import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pokemons from '../components/pokemons.vue'
import Buscador from '../views/Buscador.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: 'pokemons',
        name: "Pokemons",
        component: Pokemons
      },
      {
        path: "search",
        name: "Buscador",
        component: Buscador
      },
    ],
  },

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
