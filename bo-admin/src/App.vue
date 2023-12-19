<template>
  <a-layout style="min-height: 100vh">
    <Sider />
    <a-layout>
      <a-layout-header class="custom-layout-header" style="background-color: white;padding: 0;">
        <Header />
      </a-layout-header>

    </a-layout>
  </a-layout>
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
  text-align: center;
  color: #2c3e50;
}

.custom-layout-header {
  line-height: 0px !important;
  height: unset;
}
</style>
