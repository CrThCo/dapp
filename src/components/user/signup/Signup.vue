<template>
  <div class="container">
      <GenerateWallet v-if="payload.wizard.step1" />
      <ProfileBuilder v-if="payload.wizard.step2" />      
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Signup',
  computed: {
    ...mapGetters({
      loading: 'signupLoading',
      payload: 'signupPayload'
    })
  }
}
</script>
