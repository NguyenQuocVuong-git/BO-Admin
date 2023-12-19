<template>
  <a-layout style="min-height: 100vh">
    <Sider />
    <a-layout>
      <!-- header -->
      <Content />
      <Footer />
      <FloatButton />
    </a-layout>
  </a-layout>
</template>

<script setup>
import Sider from "./components/Sider.vue";
import Footer from "./components/Footer.vue";
import Content from "./components/Content.vue";
import FloatButton from "./components/FloatButton.vue";
</script>
<style>
.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
