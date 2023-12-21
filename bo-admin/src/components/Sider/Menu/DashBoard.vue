<template>
  <li>
    <a
      class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-gray-800 dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4"
      :href="DashBoard"
    >
      <svg
        class="text-gray-800 text-white"
        :class="SidebarOpen ? 'w-4 h-4' : 'w-5 h-5'"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        />
      </svg>
      <span v-if="SidebarOpen">DashBoard</span>
    </a>
  </li>
</template>
<script setup>
const DashBoard = "DashBoard";
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
