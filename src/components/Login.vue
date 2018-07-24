<template>
  <div class="container pt-3">
    <TweetForm />
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    twitterLogin () {
      this.$auth.authenticate('twitter').then(function () {
        alert('Auth')
      })
    }
  }
}
</script>

<style>

</style>
