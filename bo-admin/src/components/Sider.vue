<template>
  <aside
    :class="{ setSidebarOpenClass }"
    class="bg-black dark:bg-boxdark h-screen"
  >
    <div
      class="flex py-4 items-center self-stretch text-white dark:text-white gap-2"
      :class="SidebarOpen ? 'pl-6 pr-4' : ''"
    >
      <LogoSider />
      <span v-if="SidebarOpen"> Logo BO Admin </span>
      <button @click="setSidebarOpen(!SidebarOpen)">
        <svg
          class="w-6 h-6 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="
              SidebarOpen
                ? 'M7.293 1.707 1.707 7.293a1 1 0 0 0 0 1.414l5.586 5.586A1 1 0 0 0 9 13.586V2.414a1 1 0 0 0-1.707-.707Z'
                : 'm2.707 14.293 5.586-5.586a1 1 0 0 0 0-1.414L2.707 1.707A1 1 0 0 0 1 2.414v11.172a1 1 0 0 0 1.707.707Z'
            "
          />
        </svg>
      </button>
    </div>
    <MenuSider :Sidebar-Open="SidebarOpen" />
  </aside>
</template>
<script setup>
import LogoSider from "./Sider/LogoSider.vue";
import MenuSider from "./Sider/MenuSider.vue";
import { ref } from "vue";
const SidebarOpen = ref(false);
const setSidebarOpenClass = ref(false);
const setSidebarOpen = (value) => {
  SidebarOpen.value = value;
  setSidebarOpenClass.value = `absolute left-0 top-0 z-9999 flex flex-col overflow-y-hidden duration-300 ease-linear lg:static lg:translate-x-0
 ${SidebarOpen.value ? "translate-x-0" : "-translate-x-full"}`;
};
</script>
