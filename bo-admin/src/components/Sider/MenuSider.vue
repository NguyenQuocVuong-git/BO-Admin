<template>
  <div class="py-4 px-6 flex flex-col items-start gap-2 flex-1 self-stretch mt-9 w-64">
    <MenuItem />
    <MenuSubItem />
  </div>
</template>
<script setup>
import MenuItem from "./Item/MenuItem.vue";
import MenuSubItem from "./SubItem/MenuSubItem.vue";
</script>
