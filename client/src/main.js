import './scss/index.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import SiteFooter from './components/Nav/SiteFooter';
import vuetify from './plugins/vuetify';

Vue.component('site-footer', SiteFooter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
