<template>
  <li>
    <a
      class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-gray-800 dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4"
      :href="Data"
    >
      <svg
        class="text-gray-800 text-white"
        :class="SidebarOpen ? 'w-4 h-4' : 'w-5 h-5'"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 8"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
        />
      </svg>
      <span v-if="SidebarOpen">Data</span>
    </a>
  </li>
</template>
<script setup>
const Data = "Data";
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
