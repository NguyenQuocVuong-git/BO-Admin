  
<script setup>
  import { ref } from 'vue';
  import SunIcon from '../assets/images/sun-icon.svg'
  import NightIcon from '../assets/images/night-icon.svg'
  const darkMode = ref(false);
</script>

<template>
  <li>
    <label :class="darkMode ? 'bg-primary' : 'bg-stroke'" class="relative m-0 block h-7.5 w-14 rounded-full">
      <input type="checkbox" v-model="darkMode" class="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0" />
      <span :class="darkMode && '!right-[3px] !translate-x-full'"
        class="absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear">
        <span v-if="!darkMode" class="dark:hidden">
          <img :src="SunIcon" alt="icon" />
        </span>
        <span v-else class="">
          <img :src="NightIcon" alt="icon" />
        </span>
      </span>
    </label>
  </li>
</template>

  