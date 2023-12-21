<template>
  <li>
    <a
      class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-gray-800 dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4"
      :href="Statistic"
    >
      <svg
        class="text-gray-800 text-white"
        :class="SidebarOpen ? 'w-4 h-4' : 'w-5 h-5'"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
        />
      </svg>
      <span v-if="SidebarOpen">Statistic</span>
    </a>
  </li>
</template>
<script setup>
const Statistic = "Statistic";
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
