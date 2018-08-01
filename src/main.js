import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import config from '../config/config';
import VueConfigManager from "./plugins/VueConfigManager";

//Import CSS Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueConfigManager, {
	config: config
})

new Vue({
	router,
	store,
	render: (h) => h(App),
	mounted() {
		console.log("Running App in mode: " + process.env.NODE_ENV);
		console.log("Copyright (c) 2017-2018 Verize.com - All rights reserved.");
	}
}).$mount('#app');
