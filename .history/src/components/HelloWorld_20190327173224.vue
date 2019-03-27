<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-validate="'required|email'" name="email" type="text">
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

<style>
input {
  border: 1px solid #ddd;
}
</style>
