import Vue from "vue";
import Vuex from "vuex";
import moment from 'moment';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fromDate: new Date(),
    toDate: new Date(),
    results: {}
  },
  getters: {
    results: state => {
      return state.results
    },
    counter: state => {
      return Object.keys(state.results).length
    },
    fromDate: state => {
      return moment(state.fromDate).format("YYYY-MM-DD");
    }
  },
  mutations: {
    setFromDate(state, date) {
      state.fromDate = date
    },
    setResults(state, results) {
      state.results = results
    }
  },
  actions: {
    setFromDate(context, date) {
      context.commit('setFromDate', date)
    },
    setResults(context, results) {
      context.commit('setResults', results)
    }
  }
});
