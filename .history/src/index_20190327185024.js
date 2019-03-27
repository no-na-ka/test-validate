import Vue from 'vue';
import App from './App';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});

import { Validator } from 'vee-validate'

const dict = {
  custom: {
    email: {
      required: 'メールアドレスが入力されていません'
    },
  }
}
Validator.localize('ja', dict)