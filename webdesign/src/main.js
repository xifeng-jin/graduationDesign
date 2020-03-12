import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import toast from 'common/toast'
// import stageToast from "common/backStage"
// Vue.use(stageToast);
Vue.use(toast);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
