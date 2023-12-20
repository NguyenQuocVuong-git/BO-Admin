<script setup>
import { ref } from 'vue';


const show = ref(true);

const handleSwitchMode = (checked) => {
    show.value = checked;
};

</script>

<template>
    <div class="header">
        <a-input-search v-model:value="value" placeholder="input search text" style="width: 304px" @search="onSearch" />
        <div>
            <div class="button-changeMode">
                <a-switch :class="{ 'nightMode': show }" class="button-switch" v-model:checked="show"
                    @change="handleSwitchMode" />
                <img class="icon-sun" v-if="!show" src="../assets/images/sun-icon.svg" alt="icon" />
                <img class="icon-night" v-if="show" src="../assets/images/night-icon.svg" alt="icon" />
            </div>

        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    flex: 1s;
    justify-content: space-between;
}

</style>