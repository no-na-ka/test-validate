<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="form-group">
      <label for="form_title">タイトル</label>
      <input type="text" name="app[title]" class="form-control"
              v-model="app.title"
              data-vv-as="タイトル"
              v-validate="'required|max:255'"
            :class="{'input': true, 'form-danger': 
            errors.has('app[title]') }"
      />
      <div class="form-control-feedback" v-show="errors.has('app[title]')">
        <p class="alert alert-danger">{{ errors.first('app[title]') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import VeeValidate, { Validator } from'vee-validate'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Appsss'
    }
  }
}
</script>