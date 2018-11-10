import Vue from "vue";
import Vuex from "vuex";
import moment from 'moment';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fromDate: new Date(),
    toDate: new Date(),
    counter: 0,
    requestError: false,
    results: {}
  },
  getters: {
    results: state => {
      return state.results
    },
    counter: state => {
      return state.counter;
    },
    fromDate: state => {
      return moment(state.fromDate).format("YYYY-MM-DD")
    },
    requestError: state => {
      return state.requestError;
    }
  },
  mutations: {
    setFromDate(state, date) {
      state.fromDate = date
    },
    setResults(state, results) {
      state.results = results
    },
    setCounter(state, counter) {
      state.counter = counter
    },
    setRequestError(state, requestError) {
      state.requestError = requestError
    }
  },
  actions: {
    setFromDate(context, date) {
      context.commit('setFromDate', date)
    },
    setResults(context, results) {
      context.commit('setResults', results)
    },
    setCounter(context, counter) {
      context.commit('setCounter', counter)
    },
    setRequestError(context, requestError) {
      context.commit('setRequestError', requestError)
    }
  }
});