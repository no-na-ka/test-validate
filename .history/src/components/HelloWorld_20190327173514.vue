<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-validate="'required|email'" name="email" type="text">
    <span>{{ errors.first('email') }}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Appsss'
    }
  }
}
</script>

