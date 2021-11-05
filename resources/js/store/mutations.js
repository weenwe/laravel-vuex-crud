import Vue from 'vue';

const mutations = {
  SET_POSTS(state, value) {
    state.posts = value
  },
  SET_ERRORS (state, value) {
    state.errors = value
  },
  SET_POST(state, value) {
    state.posts.unshift(value)  
  },
  SET_POST_UPDATED(state, value) {
    const index = state.posts.findIndex(post => post.slug === value.slug);
    Vue.set(state.posts, index, value);    
  },
  SET_POST_DELETED(state, value) {
    const index = state.posts.findIndex(post => post.slug === value); 
    state.posts.splice(index, 1); 
  }
  
}
export default mutations