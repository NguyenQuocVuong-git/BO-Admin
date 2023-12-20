<script setup>
import { ref } from 'vue';

import IconSun from '../assets/images/sun-icon.svg';
import IconNight from '../assets/images/night-icon.svg'

const show = ref(false);

const handleSwitchMode = (checked) => {
    show.value = checked;
};

</script>

<template>
    <div class="header">
        <a-input-search class="button-search" v-model:value="value" placeholder="Search" style="width: 304px" @search="onSearch" />
        <div class="right-header">
            <div class="button-changeMode">
                <a-switch :class="{ 'nightMode': show }" class="button-switch" v-model:checked="show"
                    @change="handleSwitchMode" />
                <img class="icon-sun" v-if="!show" :src='IconSun' alt="icon" />
                <img class="icon-night" v-if="show" :src="IconNight" alt="icon" />
            </div>
            <div class="info-user">
                <a-badge count="5">
                    <bell-outlined class="bell" />
                </a-badge>
                <a-avatar :size="28">
                    <template #icon><user-outlined /></template>
                </a-avatar>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 14px 24px;
    background-color: white;
}

.button-changeMode {
    position: relative;
}

.icon-sun {
    position: absolute;
    left: 4px;
    top: 3px;
    width: 14px;
    height: 16px;
}

.icon-night {
    position: absolute;
    right: 5px;
    top: 2px;
    width: 15px;
    height: 16px;
}

.nightMode>>>.ant-switch-handle {
    inset-inline-start: calc(100% - 22px);
}

.right-header {
    display: flex;
    gap: 32px;
    align-items: center;
}

.info-user {
    display: flex;
    gap: 16px;
    align-items: center;
}

.bell {
    font-size: 16px;
    color: black;
    border: solid 1px rgba(0, 0, 0, 0.15);
    padding: 5px;
    border-radius: 8px;
}

.button-search >>> .ant-input-search-button {
    color: black !important;
}

</style>