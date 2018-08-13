<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-md-8">
        <div class="card mt-5">
          <div class="card-body">
            <div v-if="!payload.success">
              <h3 class="card-title"><i class="far fa-user"></i> &nbsp;Create new account!</h3>
              <div v-if="payload.error" class="alert alert-warning">
                <strong>Error! </strong> {{payload.message.text}}
              </div>
              <SignupForm  />
            </div>
            <div v-else class="mt-1">
              <h1>Thanks for joining Connect!</h1>
              <p class="lead">
                Shortly, You will receive an account activation email in your inbox.
              </p>
            </div>            
          </div>
        </div>
      </div>
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
