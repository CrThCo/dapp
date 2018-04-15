<template>
  <div class="row justify-content-md-center">
    <div class="col-md-8">
        <div class="card mt-5">
            <div class="card-body">
              <h3 class="card-title">Generate your wallet!</h3>
              <p class="alert alert-warning">
                This password encrypts your private key. This does not act as a seed to generate your keys.
                You will need this password AND your private key to unlock your account!
              </p>
              <form @submit.prevent="processStep1">                  
                  <div class="form-group">
                      <label>Password</label>
                      <input v-validate="'required|alpha_dash|min:8|max:32'" data-vv-name="password" type="password" v-model="password" class="form-control font-26" placeholder="new password" />
                  </div>
                  <button class="btn btn-info btn-lg btn-block"><icon v-if="loading" name="spinner" scale="1" spin></icon> Sign Up</button>
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
