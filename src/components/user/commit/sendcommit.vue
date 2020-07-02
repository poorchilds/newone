<template>
  <div class="send-com">
    <div class="time">
      <slot name="time"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="article">
      <div class="le-ar">原文:</div>
      <div class="cen-ar">
        <slot name="article"></slot>
      </div>
      <div class="ri-ar">
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
  </div>
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
.send-com {
  font-size: 14px;
  padding: 35px 10px 0 15px;
  width: 360px;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;
  .time {
    line-height: 0px;
    color: #a0a0a0;
    margin-bottom: 15px;
  }
  .content {
    line-height: 30px;
  }
  .article {
    color: #a0a0a0;
    display: flex;
    width: 100%;
    line-height: 45px;
    height: 45px;
    font-size: 14px;
    .le-ar {
      width: 45px;
    }
    .cen-ar {
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .ri-ar {
      width: 60px;
      text-align: right;
    }
  }
}
</style>
