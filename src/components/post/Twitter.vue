<template>
  <div class="bg-light p-2 rounded-top">
    <form @submit.prevent="signAndTweet">
      <div class="media">
        <img class="mr-2 rounded shadow-sm" style="width:75px" src="./../../assets/img/user.png" alt="Generic placeholder image">
        <div class="media-body">
          <div class="form-group mb-2">
            <textarea class="form-control" v-model="post.content"></textarea>          
          </div>
          <div class="text-right">
            <button class="btn btn-dark rounded">
              <small class="d-inline-block pr-2 font-weight-bold text-uppercase">Post</small>
              <i v-if="loading" class="fas fa-spinner fa-spin"></i>
              <i v-else class="fas fa-arrow-circle-right"></i>
            </button>
          </div>          
        </div>
      </div>
    </form>
  </div>  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'TweetForm',
  data () {
    return {
      post: {
        content: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      loading: 'postLoading'
    })
  },
  methods: {
    signAndTweet () {
      this.$store.dispatch('SavePost', this.post)
      this.post = {
        content: ''
      }
    }
  }
}
</script>

<style>

</style>
