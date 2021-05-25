<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <h1>{{ appName }}</h1>
  <PostList />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PostList from '@/post/components/post-list.vue';

export default {
  data() {
    return {
      appName: 'Welcome to Webfaster'
    };
  },

  components: {
    PostList
  }
};
</script>

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
