<template>
  <!-- <a-layout style="min-height: 100vh">
    <Sider />
    <a-layout>
      <a-layout-header class="custom-layout-header" style="background-color: white;padding: 0;">
        <Header />
      </a-layout-header>

    </a-layout>
  </a-layout> -->
  <div class="container">
    <div>
      <Sider />
    </div>
    <div>
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Sider from "./components/Sider.vue";

export default {
  name: 'App',
  components: {
    Header,
    Sider
  }
}
</script>
<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  display: flex;
}
</style>
