<template>
  <div class="container mt-5 mb-3">
    <div class="row justify-content-md-center">      
      <div class="col-md-6 mt-3">
        <div v-if="payload.data.auth === 'warn'" class="alert alert-warning">
          <strong class="ls-1 text-uppercase">Warning - </strong>
          <span>{{payload.data.message}}</span>
        </div>
        <div v-if="payload.data.auth === 'success'" class="alert alert-success">
          <strong class="ls-1 text-uppercase">Sucess - </strong>
          <span>{{payload.data.message}}</span>
        </div>        
        <div class="card mt-3 bg-white" v-if="authmode === 'email'">
          <div class="card-header">
            <h5 class="card-title text-uppercase mb-1">
              <i class="fas fa-unlock-alt"></i>
              <span class="d-inline-block pl-1 label">Sign in to your account! </span>              
            </h5>
          </div>
          <div class="card-body">            
            <form @submit.prevent="doLogin">
              <div class="form-group">
                <label class="label">Email Address:</label>
                <input type="email" v-model="user.email" class="form-control" />
              </div>
              <div class="form-group">
                <label class="label">Password:</label>
                <input type="password" v-model="user.password"  class="form-control" />
              </div>
              <span v-if="loading" class="btn btn-outline-light pt-2">
                <span class="d-inline-block pr-2 label">please wait</span>
                <i class="fas fa-spinner fa-spin"></i>                
              </span>
              <button v-else class="btn btn-outline-dark pt-2">
                <span class="d-inline-block pr-2 label">Sign in</span>
                <i class="fas fa-arrow-circle-right"></i> </button>
            </form>
          </div>
        </div>
        <div class="card mt-3" v-else>
          <div class="card-body pb-3">
            <h4 class="card-subtitle">
              <i class="fas fa-unlock"></i>
              <span class="d-inline-block pl-1 ls-1">Sign in to your account</span>
            </h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item list-group-item-action cursor"
              @click.prevent="chooseAuthmethod('email')">
                <i class="far fa-envelope"></i>
                <span class="d-inline-block pl-3 label"> Using Email &amp; Password</span>
            </li>
            <li class="list-group-item list-group-item-action cursor"
              @click.prevent="chooseAuthmethod('twitter')">
                <i class="fab fa-twitter"></i>
                <span class="d-inline-block pl-3 label">Using Twitter</span>
            </li>
          </ul>                  
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Signin',
  data () {
    return {
      authmode: '',
      user: {
        email: 'geek96@gmail.com',
        password: 'basit123'
      }
    }
  },
  created () {
    this.$store.commit('setDefaultPayload')
  },
  mounted () {
    this.$store.commit('setDefaultPayload')
  },
  computed: {
    ...mapGetters({
      loading: 'signinLoading',
      payload: 'signinPayload'
    })
  },
  methods: {
    chooseAuthmethod (method) {
      this.authmode = method
    },
    doLogin () {
      this.$store.dispatch('doSignin', this.user)
      setTimeout(() => {
        console.log(this.payload)
        if (this.payload.data.auth === 'success') {
          console.log('redirecting to dashboard!')
          this.$router.push('dashboard')
        }
      }, 1000)
    }
  }
}
</script>
