<template>  
  <form @submit.prevent="doSignup">
    <div class="form-group d-flex flex-row">
      <div class="flex-fill">
        <label>First name </label>
        <input v-validate="'required|alpha_dash'" data-vv-name="first_name" type="text" v-model="user.first_name" placeholder="first name" class="form-control" />
        <p v-show="errors.has('first_name')" class="help text-warning">
          <icon name="exclamation-circle" scale="1"></icon>
          {{errors.first('first_name')}}
        </p>
      </div>
      <div>&nbsp;&nbsp;&nbsp;</div>
      <div class="flex-fill">
        <label>Last name </label>
        <input v-validate="'required|alpha_dash'" data-vv-name="last_name" type="text" v-model="user.last_name" placeholder="last name" class="form-control" />
        <p v-show="errors.has('last_name')" class="help text-warning">
          <icon name="exclamation-circle" scale="1"></icon>
          {{errors.first('last_name')}}
        </p>
      </div>
    </div>
    <div class="form-group">
      <label>Email</label>
      <input v-validate="'required|email'" data-vv-name="email" type="email" v-model="user.email" class="form-control" placeholder="your email address" />
      <p v-show="errors.has('email')" class="help text-warning">
        <icon name="exclamation-circle" scale="1"></icon>
        {{errors.first('email')}}
      </p>                            
    </div>
    <div class="form-group">
      <label>Username</label>
      <input v-validate="'required|alpha_dash|min:4|max:32'" data-vv-name="username" type="text" v-model="user.username" class="form-control" placeholder="your username" />
      <p v-show="errors.has('username')" class="help text-warning">
        <icon name="exclamation-circle" scale="1"></icon>
        {{errors.first('username')}}
      </p>
    </div>
    <div class="form-group">
      <label>New Password</label>
      <input v-validate="'required|alpha_dash|min:4|max:32'" data-vv-name="password" type="password" v-model="user.password" class="form-control" placeholder="your twitter handle" />
      <p v-show="errors.has('password')" class="help text-warning">
        <icon name="exclamation-circle" scale="1"></icon>
        {{errors.first('password')}}
      </p>
    </div>
    <button class="btn btn-outline-dark btn-lg"><icon v-if="loading" name="spinner" scale="1" spin></icon>&nbsp;Create Account</button>
  </form>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'SignupForm',
  data () {
    return {
      user: {
        email: '',
        username: '',
        first_name: '',
        last_name: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      loading: 'signupLoading',
      payload: 'signupPayload'
    })
  },
  methods: {
    doSignup () {
      this.$store.dispatch('Singup', this.user)
    }
  }
}
</script>

<style>

</style>
