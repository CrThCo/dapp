import PostService from '@/services/post.service'

const state = {
  payload: {
    loading: false,
    message: {
      type: '',
      text: ''
    },
    data: []
  }
}

const getters = {
  postPayload: state => state.payload,
  postLoading: state => state.payload.loading
}

const actions = {
  SavePost ({commit, dispatch}, post) {
    commit('setPostLoading', true)
    // commit('pushItem', post)
    PostService.save(post).then(r => {
      console.log(r)
      commit('setPostLoading', true)
      if (r.status === 200 || r.status === 201) {
        dispatch('GetPosts')
      }
    }).catch((err) => {
      console.log(err)
    })
  },
  GetPosts ({commit}) {
    PostService.all().then(r => {
      console.log(r)
      commit('setPostData', r.data)
    }).catch(err => {
      console.log(err)
      commit('setPostData', [])
    })
  }
}

const mutations = {
  pushItem (state, data) {
    state.payload.data.unshift({...data, verified: true})
  },
  setPostLoading (state, loading) {
    state.payload.loading = loading
  },
  setPostData (state, data) {
    state.payload.data = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
