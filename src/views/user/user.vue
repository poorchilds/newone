<template>
  <div class="user">
    <div class="head">
      <div class="img">
        <img src="../../access/images/新闻详情/u80.png" alt />
      </div>
      <div class="nickname">
        <div class="nick-top">
          <span class="iconfont iconxingbienan"></span>
          火星网友
        </div>
        <span class="time">2019-10-10</span>
      </div>
      <div class="icon-ri">
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
    <!-- 引入全局组件 -->
    <div class="table">
      <tables>
        <template>我的关注</template>
        <template v-slot:cen>关注的用户</template>
      </tables>
      <tables>
        <template>我的跟帖</template>
        <template v-slot:cen>跟帖/回复</template>
      </tables>
      <tables>
        <template>我的收藏</template>
        <template v-slot:cen>文章/视频</template>
      </tables>
      <tables>
        <template>我的收藏</template>
      </tables>
    </div>
  </div>
</template>

<script>
// import tables from '../../components/'
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
.user {
  // padding: 24px 10px 30px 25px;
  background-color: #f2f2f2;
  .head {
    height: 130px;
    // background-color: red;
    padding-left: 25px;
    padding-right: 10px;
    display: flex;
    border-bottom: 5px solid #e4e4e4;
    .img {
      position: relative;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin: auto;
        width: 70px;
        height: 70px;
      }
    }
    .nickname {
      flex: 1;
      float: left;
      font-size: 14px;
      position: relative;
      left: 80px;
      padding-top: 45px;
      .nick-top {
        margin-bottom: 10px;
        span {
          background-color: #fff;
          color: aqua;
        }
      }
      .time {
        color: #ded4c3;
      }
    }
    .icon-ri {
      width: 15px;
      line-height: 130px;
      font-size: 16px;
    }
  }
  .table {
    padding: 0 10px 0 20px;
  }
}
</style>
