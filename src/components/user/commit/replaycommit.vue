<template>
  <div class="rep">
    <div class="replay-com">
      <div class>
        <slot name="time"></slot>
      </div>
      <div class="content-com">
        <div class="box-replay">
          <div>回复：</div>
          <div>
            <slot name="rpelay-user"></slot>
          </div>
        </div>
        <div class="content-box">
          <slot name="content"></slot>
        </div>
      </div>
      <!-- <div></div> -->
      <p class="replay-contet">
        <!-- 不是 -->
        <slot name="replay-contet"></slot>
      </p>
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
.replay-com {
  font-size: 14px;
  padding: 20px 10px 0 15px;
  width: 360px;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;
  .time {
    line-height: 0px;
    color: #a0a0a0;
    margin-bottom: 15px;
  }
  .content-com {
    box-sizing: border-box;
    line-height: 25px;
    font-size: 12px;
    background-color: #e4e4e4;
    margin: 10px 7px 15px 3px;
    padding: 10px;
    color: #a0a0a0;
    .box-replay {
      display: flex;
      div:nth-child(1) {
        width: 45px;
        // font-size: 14px;
      }
      div:nth-child(2) {
        // width: 35px;
        flex: 1;
        // font-size: 14px;
      }
    }
    .content-box {
      font-size: 14px;
    }
  }
  .article {
    color: #a0a0a0;
    display: flex;
    width: 100%;
    line-height: 30px;
    height: 32px;
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
