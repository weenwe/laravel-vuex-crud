<template> 
  <div class="posts">
    <div class="item" v-for="(post, index) in posts" :key="index">     
      <router-link class="title" :to="'/posts/' + post.slug">
        <h2>{{post.title}}</h2>
      </router-link>
      <div class="action">
        <router-link class="edit" :to="'/posts/' + post.slug + '/edit'">
          Edit
        </router-link>
        <a href="#" class="delete" @click="deletePost(post)">Delete</a> 
      </div>
    </div> 
  </div>  
</template>

<script>
export default {
  props: ['posts'], 
  methods:{   
    deletePost(post){
      this.$store.dispatch('deletePost', post.slug); 
    }
  }
}
</script>

<style scoped>
.item{
    padding: 10px 16px;
    border: 1px solid #dcdcdc;
    margin-bottom: 16px;
    background: #e4e3e6;
    border-radius: 2px;
}  
a {
  text-decoration: none;
}
.item h2{
  color: #49545f;
  text-decoration: none; 
  margin: 0;
  line-height: 2;
}
.item h2:hover{ 
  color: #4a6ce8;
}

.action a{
  margin-right: 10px;
  border: 1px solid #c7c7c7;
  padding: 2px 4px;
  border-radius: 2px;
  font-size: 14px;
  line-height: 2;
}
.action .edit{
  color: #2f8d4c;
}
.action .delete{
  color: #c55555;
}
</style>
 