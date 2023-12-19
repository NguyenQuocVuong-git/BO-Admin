<script setup>
import { ref } from 'vue';
import {
    BellOutlined,
    MessageOutlined,
    DownOutlined
} from "@ant-design/icons-vue";

const show = ref(true);

const handleSwitchMode = (checked) => {
    show.value = checked;
};

</script>

<template>
    <div class="right-header">
        <div class="button-changeMode">
            <a-switch :class="{ 'nightMode': show }" class="button-switch" v-model:checked="show"
                @change="handleSwitchMode" />
            <img class="icon-sun" v-if="!show" src="../assets/images/sun-icon.svg" alt="icon" />
            <img class="icon-night" v-if="show" src="../assets/images/night-icon.svg" alt="icon" />
        </div>
        <a class="button-notification">
            <bell-outlined />
        </a>
        <a class="button-message">
            <message-outlined />
        </a>
        <div class="info-user">
            <span class="">
                <span class="name">Thomas Anree</span>
                <span class="job">UX Designer</span>
            </span>
            <a-avatar :size="48">USER</a-avatar>
            <down-outlined />
        </div>
    </div>
</template>

<style scoped>
.right-header {
    display: flex;
    flex: 1;
    gap: 20px;
    max-height: 60px;
    padding: 0px 24px;
    align-items: center;
    background-color: white;
    justify-content: flex-end;
}

.button-switch {
    outline: none !important;
    height: 26px;
    width: 60px;
}

.button-notification,
.button-message {
    background-color: #eff4fb;
    padding: 8px;
    border-radius: 50px;
    height: 20px;
    width: 20px;
    font-size: 18px;
    cursor: pointer;
}

.info-user {
    display: flex;
    gap: 16px;
    text-align: right;
    align-items: center;
}

.name {
    display: block;
    font-size: 14px;
    color: black;
}

.job {
    font-size: 12px;
}

.button-switch>>>.ant-switch-handle {
    width: 24px;
    height: 24px;
    /* inset-inline-start: calc(100% - 26px); */
    top: 1px;
}

.button-switch>>>.ant-switch-handle::before {
    border-radius: 50px;
}

.button-changeMode {
    position: relative;
}

.icon-sun {
    position: absolute;
    left: 6px;
    top: 5px;
}

.icon-night {
    position: absolute;
    right: 6px;
    top: 5px;
}

.nightMode>>>.ant-switch-handle {
    inset-inline-start: calc(100% - 26px);
}
</style>