<script setup>
import {
    UserOutlined
} from "@ant-design/icons-vue";

</script>

<template>
    <div class="login-warper">
        <div class="login-header">
            <a-avatar :size="64">
            <template #icon><user-outlined /></template>
        </a-avatar>
        <h1>Hello</h1>
        <p>Create an account</p>
        </div>
        <div>
            
        </div>
    </div>
</template>

<style scoped>

.login-warper {
    text-align: center;
    width: 480px;
    padding: 48px;
    background-color: white;
}
.login-header {
    text-align: center;
}
</style>