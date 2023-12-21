<template>
  <div
    class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear translate-x-0"
  >
    <nav class="mt-5 py-4 lg:mt-9" :class="SidebarOpen ? 'lg:px-6 px-4' : ''">
      <h3 class="text-sm font-semibold text-bodydark2">MENU</h3>
      <Menu :Sidebar-Open="SidebarOpen" />
      <h3 :class="SidebarOpen ? 'mb-4 ml-4' : 'text-center'">SETTING</h3>
      <Setting :Sidebar-Open="SidebarOpen" />
    </nav>
  </div>
</template>
<script setup>
import { defineProps, watch, ref } from "vue";
import Menu from "./Menu/Menu.vue";
import Setting from "./Setting/Setting.vue";
const props = defineProps({
  SidebarOpen: {
    type: Boolean,
    require: true,
  },
});
const SidebarOpen = ref();
watch(
  () => props.SidebarOpen,
  (val) => {
    SidebarOpen.value = val;
  }
);
</script>
