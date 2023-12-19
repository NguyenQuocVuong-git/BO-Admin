<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible >
    <template #icon>
      <CustomerServiceOutlined />
    </template>
    <div class="logo">
      <WindowsOutlined />
      <span>BO</span>
    </div>
    <a-divider style="border-color: #7cb305" dashed />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <HomeOutlined />
        <span>Home</span>
      </a-menu-item>
      <a-menu-item key="2">
        <DashboardOutlined />
        <span>Dashboard</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <UserOutlined />
            <span>User</span>
          </span>
        </template>
        <a-menu-item key="3">
          <SettingOutlined />
          <span>Setting</span>
        </a-menu-item>
        <a-menu-item key="4">
          <SafetyOutlined />
          <span>Security</span>
        </a-menu-item>
        <a-menu-item key="5">
          <CreditCardOutlined />
          <span>Billding</span>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <TeamOutlined />
            <span>Terms sevice</span>
          </span>
        </template>
        <a-menu-item key="6">
          <CustomerServiceOutlined />
          <span>Help</span>
        </a-menu-item>
        <a-menu-item key="8">
          <HeartOutlined />
          <span>Policy</span>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <MenuFoldOutlined />
        <span>Show</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script setup>
import { ref } from "vue";
import {
  WindowsOutlined,
  HomeOutlined,
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  SafetyOutlined,
  CreditCardOutlined,
  TeamOutlined,
  CustomerServiceOutlined,
  MenuFoldOutlined,
  HeartOutlined,
} from "@ant-design/icons-vue";

const collapsed = ref(false);
const selectedKeys = ref(["1"]);
</script>
<style scoped>
.logo {
  padding-top: 7px;
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
  text-align: center;
  color: aliceblue;
}
</style>
