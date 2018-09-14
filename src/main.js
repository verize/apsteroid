import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueConfigManager from "./plugins/VueConfigManager";

//Import CSS Styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const config = {
  name: process.env.VUE_APP_NAME,
  description: "A service to retrieve a list of Asteroids based on their closest approach date to Earth...",
  version: process.env.VUE_APP_VERSION,
  api_endpoint: process.env.VUE_APP_NASA_API_ENDPOINT,
  api_key: process.env.VUE_APP_NASA_API_KEY
};

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueConfigManager, {
  config: config
});

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    console.log("Running App in mode: " + process.env.NODE_ENV);
    console.log("Copyright (c) 2017-2018 Verize.com - All rights reserved.");
  }
}).$mount("#app");