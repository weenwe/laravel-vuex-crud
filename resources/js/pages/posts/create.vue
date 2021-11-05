<template>
  <div class="AddPost"> 
    <div class="form"> 
      <ul v-if="errors" class="err-msg">
          <li v-for="(error, index) in errors" :key="index">{{ error[0] }}</li>
      </ul>  
      <form @submit.prevent="submit">
        <div class="form-group"> 
          <label class="title" id="title" for="title">Title</label>
          <div>
            <input name="title" v-model="form.title" type="text" id="title" placeholder="Title..."> 
          </div>
        </div>
        <div class="form-group"> 
          <label class="body" id="body" for="body">Body</label>
            <div>
            <textarea name="body" v-model="form.body" id="body" placeholder="Body...">
            </textarea>
          </div>
        </div>  
        <button class="btn" type="submit">Submit</button> 
     </form>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex";  

export default {   
  data() {
    return {
      form: {
        title: '',
        body: '', 
      }
    }
  },
  computed: { 
    /** helper */
  ...mapState({
        errors: 'errors',
    }),

    // errors (){ ;
    //    return this.$store.state.errors;
    // },
  },
  beforeRouteLeave (to, from , next) { 
    if(this.$store.state.errors !== null){  
      const answer = window.confirm('Yakin meninggalkan halaman?') 
      if (answer) {
        this.$store.commit('SET_ERRORS', null);
      } else{
          return
      }
    }  
      next() 
  }, 
  methods: { 
    async submit() {   
      await this.$store.dispatch('addPost', this.form)
    } 

    // ...mapActions(["addPost"]),
    //     async submit(){ 
    //       await this.addPost(this.form);  
    //    }, 
  }
    
}
</script>

<style scoped>
.form{
  border: 1px solid #ddd;
  padding: 22px;
  border-radius: 2px;
  background: #fff;
}
.form-group{
  background: #eff4f4;
  padding: 18px;
  border-radius: 2px;
  margin-bottom: 16px;
}
input[type=text], textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}

button{
  background: #8daaaa;
  padding: 10px 24px;
  border: none;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
}
.err-msg li{
  color: #ea6464;
  font-size: 18px;
}
</style>



 