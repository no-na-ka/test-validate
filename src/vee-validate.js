import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

const dict = {
  custom: {
    email: {
      required: 'メールアドレスが入力されていません'
    },
  }
}
Validator.localize('ja', dict)