<script setup>
  import { ref } from 'vue';
  import Header from './layouts/Header.vue';
  import store from './store/store';

const isLogin = ref(!!store.getters.user.id);

</script>

<template>
  <div v-if='isLogin' class="container">
      <div>
        <!-- <Sider /> -->
      </div>
      <div>
        <Header />
        <router-view />
      </div>
  </div>
  <div class="container" v-else>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,500&display=swap');

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
