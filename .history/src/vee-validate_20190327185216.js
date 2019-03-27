import Vue from "vue";

Vue.use(VeeValidate);

const dict = {
  custom: {
    email: {
      required: 'メールアドレスが入力されていません'
    },
  }
}
Validator.localize('ja', dict)