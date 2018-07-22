<template>
  <div class="container mt-5">
    <div v-if="authenticated">
      <h1>Home Page</h1>
      <p>Account: {{ authenticated }}</p>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <div class="card card-body form-group text-center">
        <h5 class="mb-3">Intialize</h5>
        <form @submit.prevent="callAction('printContract')">
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
      <div class="card card-body form-group text-center">
        <h5 class="mb-3">createPost Test</h5>
        <form @submit.prevent="callAction('createPost')">
          <textarea class="form-control" v-model="post"></textarea>
          <button class="btn btn-primary mt-4" type="submit">Submit</button>
        </form>
      </div>
      <div class="card card-body form-group text-center">
        <h5 class="mb-3">judgePost Test</h5>
        <form @submit.prevent="callAction('judgePost')">
          <textarea class="form-control" v-model="judgement"></textarea>
          <button class="btn btn-primary mt-4" type="submit">Submit</button>
        </form>
      </div>
      <div class="card card-body form-group text-center">
        <h5 class="mb-3">scorePost Test</h5>
        <form @submit.prevent="callAction('scorePost')">
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
      <div class="card card-body form-group text-center">
        <h5 class="mb-3">respondToJudgement Test</h5>
        <form @submit.prevent="callAction('respondToJudgement')">
          <textarea class="form-control" v-model="response"></textarea>
          <button class="btn btn-primary mt-4" type="submit">Submit</button>
        </form>
      </div>
      <div class="card card-body form-group text-center">
        <h5 class="mb-3">identifyDistortion Test</h5>
        <form @submit.prevent="callAction('printContract')">
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
      <div class="card card-body form-group text-center">
        <h5 class="mb-3">identifyFallacy Test</h5>
        <form @submit.prevent="callAction('printBigchainTransactions')">
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
    <div v-else>
      <h1>Not Authorized</h1>
      <p>{{ authenticated }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      user: {
        name: 'First Last',
        email: 'user@example.com'
      },
      post: null,
      judgement: null,
      response: null
    }
  },
  computed: {
    ...mapGetters({
      authenticated: 'authenticated'
    })
  },
  methods: {
    callAction (action) {
      var payload = {}
      payload['post'] = this.post
      console.log('calling', action)
      this.$store.dispatch(action, payload)
    }
  }
}
</script>
