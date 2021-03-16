import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from "vue-resource"

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  state: {
    towns: [],
    counties: []
  },
  mutations: {
    saveTowns(state, payload){
      state.towns = payload;
    },
    saveCounties(state, payload){
      state.counties = payload;
    },
    /* filterTowns(state, filter){
      var filteredTowns = state.towns.filter(filter)
      console.log(filteredTowns)
      return filteredTowns
    },
    filterCounties(state, filter){
      var filteredCounties = state.counties.filter(filter)
      console.log(filteredCounties)
      return filteredCounties
    } */
  },
  actions: {
    getCounties({ commit }) {
      Vue.http
      .get("http://localhost:3004/zupanije")
      .then((response) => response.json())
      .then((data) => commit("saveCounties", data))
      .catch(() => {
        console.log("Something went wrong");
      });
    },
    getTowns({ commit }) {
      Vue.http
      .get("http://localhost:3004/naselja")
      .then((response) => response.json())
      .then((data) => commit("saveTowns", data))
      .catch(() => {
        console.log("Something went wrong");
      });
    },
  },
});
