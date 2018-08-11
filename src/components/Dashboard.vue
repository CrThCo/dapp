<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
        <div class="card shadow-dm">
          <div class="card-body p-2 d-flex flex-row">
            <div class="profile-img">
              <img class="mr-2 rounded shadow-sm" style="width:72px" src="./../assets/img/user.png" alt="Generic placeholder image">
            </div>
            <div class="profile-meta ml-2">
              <p class="ls-1 label mb-1">Basit Raza</p>
              <p class="mb-1 ls-1 font-weight-bold">@basitraza</p>
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

export default {
  name: 'dashboard',
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
