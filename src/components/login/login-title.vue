<template>
  <div class="login-title">
    <div class="icon iconfont iconjiantou2" @click="toggle"></div>
    <div class="tit">
      <slot></slot>
    </div>
    <div class="le-icon"></div>
  </div>
</template>

<script>
export default {
  props: {
    router: {
      type: String
    }
  },
  data() {
    return {}
  },
  methods: {
    toggle() {
      // console.log(this.router);
      this.$router.push(this.router)
    }
  }
}
</script>

<style scoped lang="less">
.login-title {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #757575;
  display: flex;
  line-height: 50px;
  text-align: center;
  .icon,
  .le-icon {
    width: 50px;
    height: 50px;
  }
  .tit {
    flex: 1;
  }
}
</style>
