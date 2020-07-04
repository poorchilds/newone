<template>
  <div class="firstpage">
    <!-- ---------------------search-  ---------------- -->
    <div class="search">
      <div class="le-se">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="cen-se">
        <input type="text" placeholder="搜索新闻" />
        <span class="iconfont iconsearch"></span>
      </div>
      <div class="ri-se">
        <span class="iconfont iconwode"></span>
      </div>
    </div>
    <!-- -----------------<nav></nav>---------------- -->
    <ul class="nav">
      <li>关注</li>
      <li>关注</li>
      <li>关注</li>
      <li>关注</li>
      <li>关注</li>
      <li>关注</li>
      <li>
        <span class="iconfont iconjiantou2"></span>
        <span class="iconfont iconjiantou1"></span>
      </li>
    </ul>
    <!-- --------------------new1 -------------------------->
    <new1>
      <template v-slot:h1>
        林志玲穿透视黑纱裙米兰看秀
        腹部微隆显孕味
      </template>
      <template v-slot:press1>火星时报</template>
      <template v-slot:num1>52</template>
      <template v-slot:img1>
        <img src="../../access/images/index/u11.jpg" alt />
      </template>
    </new1>
    <!---------------------- new2------------------------ -->
    <div class="new2"></div>
    <!-- --------------------new3 --------------------------->
    <div class="new3"></div>
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
.firstpage {
  background-color: #f2f2f2;
  .search {
    height: 50px;
    width: 100%;
    background-color: #ff0000;
    display: flex;
    .le-se {
      width: 75px;
      text-align: center;
      line-height: 50px;
      // font-size: 16px;
      span {
        font-size: 60px;
        color: #fff;
      }
    }
    .cen-se {
      flex: 1;
      position: relative;
      // width: 230px;
      .iconsearch {
        position: absolute;
        color: #fff;
        top: 18px;
        left: 60px;
      }
      input {
        margin-top: 7px;
        width: 100%;
        height: 34px;
        border-radius: 17px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        border: none;
        background-color: rgba(250, 250, 250, 0.5);
      }
      // input::after{
      //   content:''
      // }
    }
    .ri-se {
      width: 75px;
      text-align: center;
      line-height: 50px;
      // font-size: px;
      span {
        font-size: 26px;
        color: #fff;
      }
    }
  }
  .nav {
    display: flex;
    height: 40px;
    background-color: #e4e4e4;
    li {
      flex: 1;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      margin: 0 auto;
    }
  }
}
</style>
