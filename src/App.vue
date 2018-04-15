<template>
  <div id="app">
    <p v-if="appLoading" class="global-loading">
        <icon name="spinner" scale="2" spin></icon>
    </p>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand>Connect Application</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">          
          <b-navbar-nav class="ml-auto" v-if="!isAuthenticated">            
            <router-link to="/signin" class="nav-link">Signin</router-link>            
            <router-link to="/signup" class="nav-link">Signup</router-link>            
          </b-navbar-nav>
          <b-navbar-nav v-else class="ml-auto">            
           <router-link v-on:click.prevent="appLogout" class="nav-link">Signout</router-link>
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
      appPayload: 'appPayload',
      isAuthenticated: 'appLoading'
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
