import Vue from 'vue';
import App from './App';
import VeeValidate from '@vee-validate';

Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});