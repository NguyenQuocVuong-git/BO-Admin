<template>
  <div class="container">
    <div class="left-menu"> 
      <Sider />
    </div> 
    <Header/>
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
  text-align: center;
  color: #2c3e50;
}
.container {
  display: flex
}
.left-menu {
  width: 290px ;
  background-color: black;
  height: 400px;
}
</style>
