<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-validate="'required|email'" name="email" type="text"><br>
    <span>{{ errors.first('email') }}</span>
  </div>
</template>

<script>
import { Validator } from 'vee-validate'

const dict = {
  custom: {
    email: {
      required: 'メールアドレスが入力されていません'
    },
  }
}
Validator.localize('ja', dict)
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Appsss'
    }
  }
}
</script>

