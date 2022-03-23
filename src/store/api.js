
import Vue from 'vue'
//import store from '.'
import axios from 'axios'

export default{
    namespaced: true,
    actions:{
        
        GET_USERS(context) {
            return new Promise((resolve, reject) => {
                Vue.axios.get('https://pokeapi.co/api/v2/pokemon/').then(response => {
                    context
                    resolve(response.data);
                    // console.log("object", response.data);
                })
                    .catch(error => {
                        reject(error)
                    })
            });
        },
        GET_ABOUT(context, name) {
            return new Promise((resolve, reject) => {
                Vue.axios.get('https://pokeapi.co/api/v2/pokemon/' + name).then(response => {
                    context
                    resolve(response.data);
                })
                    .catch(error => {
                        reject(error)
                    })
            });
        },
    }
}