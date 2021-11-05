import router from '../routes';
import store from '../store';

const actions = { 
  addPost({ commit }, value) {  
    axios.post('/api/post/store', value)
      .then(response => { 
        commit('SET_POST', response.data.post)    
        
        if(store.state.errors !== null){
          commit('SET_ERRORS', null)  
        } 
      
        router.replace({ name: 'posts' });

      }).catch(error => { 
        commit('SET_ERRORS', error.response.data.errors) 
      })
  },

  async getPosts({ commit }) { 
    const res = await axios.get('/api/posts') 
    commit('SET_POSTS', res.data.posts)
  },

  editPost({ commit }, value) {   
    axios.post('/api/post/' + value.slug + '/edit', value.formData)
      .then(response => { 
        console.log(response);
        commit('SET_POST_UPDATED', response.data.post)    
        
        if(store.state.errors !== null){
          commit('SET_ERRORS', null)  
        } 
      
        router.replace({ name: 'posts' });

      }).catch(error => { 
        commit('SET_ERRORS', error.response.data.errors) 
      })
  },

  deletePost({ commit }, postSlug) { 
    axios.delete('/api/post/' + postSlug) 
      .then(res => { 
        commit('SET_POST_DELETED', postSlug) 
      }).catch(error => { 
        console.log(error)
      })
  },
  
}

export default actions

 