<template>
  <div class="layout">
    <div class="menu">
      <ul> 
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/posts">Posts</router-link></li>
      </ul>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
body{
  background: #fafafa;
}
.layout{
  max-width: 800px;
  margin: 0 auto;
} 
.menu ul{
  padding: 0;
}
.menu ul li{
  display: inline-block;
  padding: 8px 16px;
  margin-right: 12px;
  background: #737373;
  border-radius: 2px;
}
.menu ul li a{
  color: #fff;
  font-size: 16px;
  text-decoration: none;
}
.menu ul li a:hover{
  color: #fff;
}
</style>