<template>
  <div class="login-toggle">
    未注册去
    <span @click="toggle('/regiest')">注册</span>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  methods: {
    toggle(value) {
      this.$router.push(value)
    }
  },
  computed: {},
  created() {},
  mounted() {}
}
</script>

<style scoped lang="less">
.login-toggle {
  height: 26px;
  text-align: right;
  margin-right: 20px;
  font-size: 16px;
  span {
    background-color: pink;
    margin-left: 5px;
  }
}
</style>
