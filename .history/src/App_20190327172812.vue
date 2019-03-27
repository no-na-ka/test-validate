<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import VeeValidate, { Validator } from'vee-validate'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>