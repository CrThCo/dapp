<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
        <profile-sidebar />        
      </div>
      <div class="col-md-7">
        <TweetForm />
        <PostList />
      </div>
    </div>
  </div>
</template>

<script>
import Users from '@/js/users'
import ProfileSidebar from '@/components/user/profile/Sidebar'

export default {
  name: 'dashboard',
  components: {
    ProfileSidebar
  },
  data () {
    return {
      msg: 'Welcome to Connect!',
      pseudo: undefined
    }
  },
  computed: {
    userExists: function () {
      return (typeof this.pseudo !== 'undefined')
    }
  },
  beforeCreate: function () {
    Users.init().then(() => {
      Users.exists(window.web3.eth.accounts[0]).then((exists) => {
        if (exists) {
          Users.authenticate().then(pseudo => {
            this.pseudo = pseudo
          })
        }
      })
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    destroyAccount: function (e) {
      e.preventDefault()
      Users.destroy().then(() => {
        this.pseudo = undefined
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  display: block;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
