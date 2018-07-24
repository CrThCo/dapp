<template>
  <div class="container">
      <SignupForm v-if="!payload.success" />    
      <div v-else class="mt-5">
        <h1>Thanks for joining Connect!</h1>
        <p class="lead">
          Shortly, You will receive an account activation email in your inbox.
        </p>
      </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Signup',
  created () {
    this.$store.dispatch('setSingupSuccess', false)
  },
  mounted () {
    this.$store.dispatch('setSingupSuccess', false)
  },
  computed: {
    ...mapGetters({
      loading: 'signupLoading',
      payload: 'signupPayload'
    })
  }
}
</script>
