const getters = { 
  getPostBySlug: (state) => (slug) => {
    return state.posts.find(post => post.slug === slug)
  }
}

export default getters