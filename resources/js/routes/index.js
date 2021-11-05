import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/homepage'
import Index from '../pages/posts/index'
import Posts from '../pages/posts/Posts'
import Create from '../pages/posts/create'  
import View from '../pages/posts/view' 
import Edit from '../pages/posts/edit' 

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Home
  }, 
  {
    path: '/posts', 
    component: Index,  
    children: [
      { 
        path: '', 
        name: 'posts',
        component: Posts, 
      },
      { 
        path: 'create', 
        component: Create 
      }, 
      { 
        path: ':slug',   
        component: View 
      },
      { 
        path: ':slug/edit',   
        component: Edit 
      },
    ]
  }
   
]

const router = new VueRouter({
  mode: 'history', 
  routes
}) 

export default router




