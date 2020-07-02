<template>
  <ul class="body">
    <li class="lis">
      <div class="left">
        <slot></slot>
      </div>
      <div class="center">
        <slot name="cen"></slot>
      </div>
      <div class="right">
        <span class="iconfont iconjiantou1"></span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  components: {},
  created() {}
}
</script>

<style scoped lang='less'>
.body {
  height: 45px;
  list-style: none;
  .lis {
    height: 45px;
    font-size: 14px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 50px;
    display: flex;
    .left {
      width: 60px;
    }
    .center {
      padding-right: 10px;
      flex: 1;
      color: #ded4c3;
      text-align: right;
    }
    .right {
      width: 15px;
    }
  }
}
</style>
