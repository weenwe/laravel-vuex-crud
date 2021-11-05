<template>
  <div class="posts">
    <div class="wrapper">
     <div class="menu">
      <ul> 
        <li><router-link to="/posts">All Posts</router-link></li> 
        <li><router-link to="/posts/create">+ New Post</router-link></li> 
      </ul>
    </div> 
    <div>  
      <router-view :posts="posts"></router-view>
    </div>
    </div>
  </div>
</template> 

<script>
export default {  
  computed: {
    posts(){
        return this.$store.state.posts
    },
  },
  mounted() {
     
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$store.dispatch('getPosts');
    }
  },
}
</script>

<style scoped>
.wrapper{ 
  background: #eee;
  border-radius: 2px;
  padding: 22px;
  min-height: 500px;
}
.menu{
  display: inline-block;
  width: 100%;
}
.menu ul{
      float: right;
  margin-top: 0;
}
.menu ul li{
  background: #b78686;
}
</style>