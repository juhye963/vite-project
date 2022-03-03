
<template>
<h1>VUE & VITE & TS</h1>
<div><router-link to="/">HOME</router-link></div>
<div><router-link to="/login">LOGIN</router-link></div>
<hr>
<router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<script>
import { onMounted } from 'vue'
import router from './router';
import store from './store';

export default {
  setup() {
    onMounted(() => {
      
    });
    return {}
  },
}
</script>

