
<template>
<h1>VUE & VITE & TS</h1>
<div class="nav">
<span><router-link :to="{ name: 'main' }">MAIN</router-link></span>
<span><router-link :to="{ name: 'login'}">LOGIN</router-link></span>
<span><router-link :to="{ name: 'features'}">FEATURES</router-link></span>
</div>
<hr>
<Title :name="pageName"></Title>
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

.nav > div {
  float: left;
}

.nav > span {
  padding: 5px 10px 5px 10px;
}

a {
  text-decoration-line: none;
  color : #41B883;
  /* text-decoration-line: underline; */
  /* text-decoration-line: overline; */
/*   text-decoration-line: line-through; */
  /* text-decoration-line: underline line-through overline; */
  /* text-decoration-line: underline overline; */
}
a:hover {
  color : #34495E;
}

</style>
<script>
import { computed, onMounted, watch } from 'vue'
import router from './router';
import store from './store';
import Title from './components/title.vue'

export default {
  components: { Title },
  setup() {
    onMounted(() => {
      
    });
    const pageName = computed(() => {
      return router.currentRoute.value.meta.pageName ?? 'MAIN';  
    })
    return {
      pageName
    }
  },
}
</script>

