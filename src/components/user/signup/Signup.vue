<template>
  <div class="container">
      <GenerateWallet v-if="payload.wizard.step1" />
      <ProfileBuilder v-else-if="payload.wizard.step2" />      
      <div v-else-if="payload.wizard.complete" class="mt-5">
        <h1>Thanks for joining Connect!</h1>
      </div>
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
