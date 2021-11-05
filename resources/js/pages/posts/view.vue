<template>
  <div class="post" v-if="post">
    <h1>{{post.title}}</h1>
    <hr>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
export default { 
  computed: {
    post(){ 
      return this.$store.getters.getPostBySlug(this.$route.params.slug);
    }
  }, 
}
</script>