<template>
  <ul class="mb-6 flex flex-col gap-1.5">
    <DashBoard :Sidebar-Open="SidebarOpen"/>
    <Statistic :Sidebar-Open="SidebarOpen"/>
    <Data :Sidebar-Open="SidebarOpen"/>
    <Calendar :Sidebar-Open="SidebarOpen"/>
  </ul>
</template>
<script setup>
import DashBoard from "./DashBoard.vue";
import Statistic from "./Statistic.vue";
import Data from "./Data.vue";
import Calendar from "./Calendar.vue";
import { defineProps, watch, ref } from "vue";
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
