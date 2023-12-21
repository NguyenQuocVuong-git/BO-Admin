<template>
    <ul class="mb-6 flex flex-col gap-1.5">
      <Profile :Sidebar-Open="SidebarOpen"/>
    </ul>
</template>
<script setup>
import Profile from "../Setting/Profile.vue";
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
