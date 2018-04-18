<template>
  <div class="container mt-5 mb-3">
    <div class="row justify-content-md-center">      
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Authentication methods</h3>
          </div>          
          <ul class="list-group list-group-flush">
            <li class="list-group-item list-group-item-action cursor" @click.prevent="chooseAuthmethod('pk')"><icon name="key" scale="2" class="text-muted"></icon> <span> Using Privatekey</span></li>
            <li class="list-group-item list-group-item-action cursor" @click.prevent="chooseAuthmethod('ks')"><icon name="user-secret" scale="2" class="text-muted"></icon> <span>Using Ethereum Keystore</span></li>
          </ul>
          <div class="card-body" v-if="method.privateKey">
            <form @submit.prevent="viaPK">
              <div class="form-group">
                <label>Private Key:</label>
                <textarea v-model="wallet.pk" class="form-control"></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-block btn-lg">Signin</button>
            </form>
          </div>
          <div class="card-body" v-else-if="method.keystore">
            <form @submit.prevent="viaKS">
              <div class="form-group">
                <label>Keystore Content:</label>
                <textarea class="form-control"></textarea>
              </div>
              <div class="separator text-center">OR</div>
              <div class="form-group">
                <label>Keystore file:</label>
                <input @change.prevent="chooseFile" type="file" class="form-control" />
              </div>              
              <div class="form-group">
                <label>Password:</label>
                <input type="password" class="form-control" v-model="wallet.password" />
              </div>
              <button type="submit" class="btn btn-primary btn-block btn-lg">Signin</button>
            </form>
          </div>       
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Misc from './../../../lib/misc'
export default {
  name: 'Signin',
  data () {
    return {
      method: {
        'privateKey': false,
        'keystore': true
      },
      wallet: {
        pk: null,
        ks: null,
        password: null
      }
    }
  },
  methods: {
    chooseAuthmethod (method) {
      switch (method) {
        case 'pk':
          this.method.privateKey = true
          this.method.keystore = false
          break
        default:
          this.method.privateKey = false
          this.method.keystore = true
      }
    },
    viaPK () {
      console.log(this.wallet.pk)
    },
    viaKS () {
      const payload = {
        password: this.password
      }
      if (this.wallet.ks) {
        payload['data'] = this.wallet.ks
        payload['method'] = 'ks'
      } else if (this.wallet.pk) {
        payload['data'] = this.wallet.pk
        payload['method'] = 'pk'
      } else {
        console.log('error')
      }
      this.$store.dispatch('signin', payload)
    },
    chooseFile (e) {
      const file = e.target.files[0]
      console.log(file.name, file.type, file.size)
      this.wallet.ks = file
      Misc.validateKS(file)
      // Misc.readContent(file, (e) => {
      //   console.log(e.target.result)
      // }, (error) => {
      //   console.log(error)
      // })
    }
  }
}
</script>
