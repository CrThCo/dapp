<template>
  <div class="card shadow-dm">
     <div class="card-body p-2 d-flex flex-row" v-if="profile.data">      
      <div class="profile-img">
        <img class="mr-2 rounded shadow-sm" style="width:72px" src="./../../../assets/img/user.png" alt="Generic placeholder image">
      </div>
      <div class="profile-meta ml-2">
        <p class="ls-1 label mb-1">{{profile.data.first_name}} {{profile.data.last_name}}</p>
        <p class="mb-1 ls-1 font-weight-bold">@{{profile.data.username}}</p>
        <div>
          <span>
            <i class="fab fa-twitter"></i>
            <label class="ls-1 badge badge-light">10</label>
          </span>
          <span class="d-inline-block ml-2">
            <i class="far fa-star"></i>
            <label class="badge badge-light">5</label>
          </span>
        </div>
      </div>          
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      'profile': 'profileState'
    })
  },
  created () {
    this.$store.dispatch('GetProfileInfo')
  },
  mounted () {
    this.$store.dispatch('GetProfileInfo')
  }
}
</script>

<style>

</style>
