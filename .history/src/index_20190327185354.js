import Vue from 'vue';
import App from './App';
import { Validator } from 'vee-validate';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});