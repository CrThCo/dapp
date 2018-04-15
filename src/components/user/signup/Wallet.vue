<template>
  <div class="row justify-content-md-center">
    <div class="col-md-8">
        <div class="card mt-5">
            <div class="card-header">
                <h3 class="card-title">Generate your wallet!</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="processStep1">
                  <!-- <div class="form-group">
                      <label>Email:</label>
                      <input v-validate="'required|email'" data-vv-name="email" type="email" v-model="user.email" class="form-control" placeholder="your email address" />
                      <p v-show="errors.has('email')" class="help is-danger">{{errors.first('email')}}</p>                            
                  </div>
                  <div class="form-group">
                      <label>Username</label>
                      <input v-validate="'required|alpha_dash|min:4|max:32'" data-vv-name="username" type="text" v-model="user.username" class="form-control" placeholder="your username" />
                  </div> -->
                  <div class="form-group">
                      <label>Password</label>
                      <input v-validate="'required|alpha_dash|min:8|max:32'" data-vv-name="password" type="password" v-model="password" class="form-control" placeholder="new password" />
                  </div>
                  <!-- <div class="form-group">
                      <label>Repeat Password</label>
                      <input v-validate="'required|alpha_dash'" data-vv-name="password" type="password" v-model="user.rpassword" class="form-control" placeholder="repeat new password" />
                  </div> -->
                  <button class="btn btn-primary"><icon v-if="loading" name="spinner" scale="1" spin></icon> Singup</button>
              </form>
            </div>
        </div>              
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'GenerateWallet',
  data () {
    return {
      password: ''
    }
  },
  computed: {
    ...mapGetters({
      loading: 'signupLoading'
    })
  },
  methods: {
    processStep1 () {
      this.$validator.validateAll().then((res) => {
        if (res) {
          this.$store.dispatch('signupStep1', this.password)
        }
      })
    }
  }
}
</script>
