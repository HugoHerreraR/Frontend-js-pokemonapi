import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons:[],
    pokemonsFilter:[]
  },
  mutations: {
    setPokemons(state, payload){
      state.pokemons = payload
    },
    setPokemonsFilter(state, payload){
      state.pokemonsFilter = payload
    }
  },
  actions: {
    async getPokemons({commit}){
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await response.json()
        commit('setPokemons', data.results)
        commit('setPokemonsFilter', data.results)
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
    api
  }
})
