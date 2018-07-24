<template>
  <div id="app">
    <p v-if="appLoading" class="global-loading">
        <icon name="spinner" scale="2" spin></icon>
    </p>
    <b-navbar toggleable="md" type="light" variant="white" class="shadow-sm mb-3">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand class="label">
          <i class="fas fa-link"></i>
          Connect
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">          
          <b-navbar-nav class="ml-auto" v-if="!appPayload.authenticated">            
            <router-link to="/signin" class="nav-link">Sign In</router-link>            
            <router-link to="/signup" class="nav-link">Sign Up</router-link>            
          </b-navbar-nav>
          <b-navbar-nav v-else class="ml-auto">
            <b-button variant="link" @click.prevent="appLogout">Sign Out</b-button>           
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>        
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters({
      appLoading: 'appLoading',
      appError: 'appError',
      appPayload: 'appPayload'
    })
  }
}
</script>

<style>
#app {  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
