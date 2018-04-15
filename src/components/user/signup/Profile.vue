<template>
  <div class="row mt-5">
    <div class="col-md-7">
      <div class="card">
        <div class="card-header">
          <h3>Wallet</h3>
        </div>
        <div class="card-body">
          <p>
            <strong>Private Key</strong>
            <code>{{payload.data.privateKey}}</code>
          </p>
          <p>
            <strong>Address</strong>
            <code>{{payload.data.privateKey}}</code>
          </p>
          <button @click.prevent="exportKeystore" class="btn btn-primary">Export keystore</button>
        </div>
      </div>
    </div>
    <div class="col-md-5">
      <div class="card">
        <div class="card-header">
          <h3>Complete your profile</h3>
        </div>
        <div class="card-body">
            <form @submit.prevent="processStep1">
                  <div class="form-group d-flex flex-row">
                    <div class="flex-fill">
                      <label>First name </label>
                      <input v-validate="'required|alpha_dash'" data-vv-name="firstname" type="text" v-model="user.firstName" placeholder="first name" class="form-control" />
                      <p v-show="errors.has('firstname')" class="help is-danger">{{errors.first('firstname')}}</p>
                    </div>
                    <div>&nbsp;</div>
                    <div class="flex-fill">
                      <label>Last name </label>
                      <input v-validate="'required|alpha_dash'" data-vv-name="lastname" type="text" v-model="user.lastName" placeholder="last name" class="form-control" />
                      <p v-show="errors.has('lastname')" class="help is-danger">{{errors.first('lastname')}}</p>
                    </div>
                  </div>
                  <div class="form-group">
                      <label>Email:</label>
                      <input v-validate="'required|email'" data-vv-name="email" type="email" v-model="user.email" class="form-control" placeholder="your email address" />
                      <p v-show="errors.has('email')" class="help is-danger">{{errors.first('email')}}</p>                            
                  </div>
                  <div class="form-group">
                      <label>Username</label>
                      <input v-validate="'required|alpha_dash|min:4|max:32'" data-vv-name="username" type="text" v-model="user.username" class="form-control" placeholder="your username" />
                      <p v-show="errors.has('username')" class="help is-danger">{{errors.first('username')}}</p>
                  </div>
                  <div class="form-group">
                      <label>Bio</label>
                      <textarea v-validate="'required|max:400'" data-vv-name="bio" type="text" v-model="user.bio" class="form-control" placeholder="your bio" ></textarea>
                      <p v-show="errors.has('bio')" class="help is-danger">{{errors.first('bio')}}</p>
                  </div>
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
    Step2 () {
      this.$store.dispatch('signupStep2', this.user)
    }
  }
}
</script>

