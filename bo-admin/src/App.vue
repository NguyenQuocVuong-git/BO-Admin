<template>
  <div class="container">
    <div class="left-menu"> 
      Left menu
    </div> 
    <Header/>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
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
