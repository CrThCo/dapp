<template>
  <div class="row mt-5">
    <div class="col-md-7">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Wallet</h3>
          <p class="alert alert-warning">
            <strong>Warning!</strong> Please download your keystore and keep it safe because there is no way to login or recover your account if you've lost the keystore.
          </p>          
          <button @click.prevent="exportKeystore" class="btn btn-lg btn-primary">Download Keystore</button>
        </div>
      </div>
    </div>
    <div class="col-md-5">
      <div class="card">
        <div class="card-body">
            <h3 class="card-title">Complete your profile</h3>
            <p class="alert alert-info">
              <strong>Note!</strong> Enter your information carefully, because you cannot modify once saved!
            </p>
            <form @submit.prevent="processStep2">
                  <div class="form-group d-flex flex-row">
                    <div class="flex-fill">
                      <label>First name </label>
                      <input v-validate="'required|alpha_dash'" data-vv-name="firstname" type="text" v-model="user.firstName" placeholder="first name" class="form-control" />
                      <p v-show="errors.has('firstname')" class="help is-danger">{{errors.first('firstname')}}</p>
                    </div>
                    <div>&nbsp;&nbsp;&nbsp;</div>
                    <div class="flex-fill">
                      <label>Last name </label>
                      <input v-validate="'required|alpha_dash'" data-vv-name="lastname" type="text" v-model="user.lastName" placeholder="last name" class="form-control" />
                      <p v-show="errors.has('lastname')" class="help is-danger">{{errors.first('lastname')}}</p>
                    </div>
                  </div>
                  <div class="form-group">
                      <label>Email</label>
                      <input v-validate="'required|email'" data-vv-name="email" type="email" v-model="user.email" class="form-control" placeholder="your email address" />
                      <p v-show="errors.has('email')" class="help is-danger">{{errors.first('email')}}</p>                            
                  </div>
                  <div class="form-group">
                      <label>Username</label>
                      <input v-validate="'required|alpha_dash|min:4|max:32'" data-vv-name="username" type="text" v-model="user.username" class="form-control" placeholder="your username" />
                      <p v-show="errors.has('username')" class="help is-danger">{{errors.first('username')}}</p>
                  </div>
                  <div class="form-group">
                      <label>Twitter</label>
                      <input v-validate="'required|alpha_dash|min:4|max:32'" data-vv-name="twitter" type="text" v-model="user.twitter" class="form-control" placeholder="your twitter handle" />
                      <p v-show="errors.has('twitter')" class="help is-danger">{{errors.first('twitter')}}</p>
                  </div>
                  <div class="form-group">
                      <label>Facebook</label>
                      <input v-validate="'required|alpha_dash|min:4|max:32'" data-vv-name="facebook" type="text" v-model="user.facebook" class="form-control" placeholder="your facebook username" />
                      <p v-show="errors.has('facebook')" class="help is-danger">{{errors.first('facebook')}}</p>
                  </div>
                  <button class="btn btn-primary btn-block btn-lg"><icon v-if="loading" name="spinner" scale="1" spin></icon> Save</button>
              </form>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'ProfileBuilder',
  data () {
    return {
      user: {
        email: '',
        username: '',
        firstName: '',
        lastName: '',
        bio: ''
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
    exportKeystore () {
      console.log(this.payload)
      const p = {
        password: this.payload.data.password,
        pk: this.payload.data.privateKey
      }
      this.$store.dispatch('exportkeystore', p)
    },
    processStep2 () {
      this.$store.dispatch('signupStep2', this.user)
    }
  }
}
</script>

