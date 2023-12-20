<template>
  <a-float-button-group
    trigger="click"
    type="primary"
    :style="{ right: '24px' }"
  >
    <template #icon>
      <CustomerServiceOutlined />
    </template>
    <a-float-button @click="report" />
    <a-float-button @click="chatSupport">
      <template #icon>
        <CommentOutlined />
      </template>
    </a-float-button>
  </a-float-button-group>
</template>
<script>

export default {
  name: "FloatButton",
  components: {
    CustomerServiceOutlined,
    CommentOutlined,
  },
  data() {
    return {
      property: "value",
    };
  },
  methods: {
    report() {
      console.log("report");
    },
    chatSupport() {
      console.log("chatSupport");
    },
  },
};
</script>
