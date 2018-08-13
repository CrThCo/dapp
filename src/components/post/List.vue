<template>
  <div class="posts bg-white rounded-bottom">
    <div class="media pt-3 pl-3 pr-3 border-bottom pb-3" v-if="payload.data.length > 0" v-for="(p,i) in payload.data" v-bind:key="i">
      <img class="mr-2 rounded shadow-sm" style="width:48px" src="./../../assets/img/user.png" alt="Generic placeholder image">
      <div class="media-body">
        <div class="row mb-1">
          <div class="col" v-if="p.user.length > 0">
            <span class="ls-1 font-weight-bold">{{p.user[0].first_name}} {{p.user[0].last_name}}</span>
            <span class="ls-1"> @{{p.user[0].username}}</span>
          </div>
          <div class="col  text-right">
            <span class="ls-1" title="post is verified" v-if="p.verified">
              <i class="fas fa-check-circle text-info"></i>
            </span>
            <span v-else  title="post is not verified">
              <i class="fas fa-exclamation-circle text-warning"></i>
            </span> 
          </div>          
        </div>
        <p class="post-text mb-1">{{p.content}}</p>
        <p v-if="p.image && p.image != ''">
          <img class="border rounded" width="100%" :src="p.image | toImageUrl" />
        </p>
        <div class="post-meta text-muted pt-2">
          <span class="d-inline-block pr-3">
              <i class="far fa-clock text-info"></i>
              <span>{{p.created_at | toLocalTime}}</span>
            </span>
          <span class="">
            <i class="far fa-heart text-info"></i>&nbsp;
            <span class="font-weight-bold">{{p.vote_count}}</span>
          </span>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.$store.dispatch('GetPosts')
  },
  computed: {
    ...mapGetters({
      payload: 'postPayload'
    })
  }
}
</script>

<style>

</style>
