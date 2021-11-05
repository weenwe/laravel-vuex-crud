require('./bootstrap');

import Vue from 'vue';
import App from './layouts/App'
import router from './routes/index';
import store from './store/index'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

 