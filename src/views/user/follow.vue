<template>
  <div class="follow">
    <div class="top-fo">
      <pagetitle router="/regiest">
        <template>登录</template>
      </pagetitle>
    </div>
    <ul class="cen-fo">
      <li class="item-cen">
        <div class="left-it">
          <img src alt />
        </div>
        <div class="cen-it">
          <span>火星新闻报</span>
          <i>2019-10-10</i>
        </div>
        <div class="ri-it">
          <button>取消关注</button>
        </div>
      </li>
      <li class="item-cen">
        <div class="left-it">
          <img src alt />
        </div>
        <div class="cen-it">
          <span>火星新闻报</span>
          <i>2019-10-10</i>
        </div>
        <div class="ri-it">
          <button>取消关注</button>
        </div>
      </li>
      <li class="item-cen">
        <div class="left-it">
          <img src alt />
        </div>
        <div class="cen-it">
          <span>火星新闻报</span>
          <i>2019-10-10</i>
        </div>
        <div class="ri-it">
          <button>取消关注</button>
        </div>
      </li>
    </ul>
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
.follow {
  background-color: #f2f2f2;
  .cen-fo {
    // padding-top: 15px;
    margin-top: 15px;
    .item-cen {
      font-size: 14px;
      height: 80px;
      padding-top: 15px;
      box-sizing: border-box;
      display: flex;
      border-bottom: 1px solid #e1e1e1;
      .left-it {
        width: 80px;
        img {
          display: block;
          height: 40px;
          width: 40px;
          background-color: #b3b3b3;
          margin: 0 auto;
          border-radius: 50%;
        }
      }
      .cen-it {
        flex: 1;
        span {
          font-size: 16px;
        }
        i {
          display: block;
        }
      }
      .ri-it {
        width: 90px;
        button {
          font-size: 12px;
          width: 70px;
          height: 30px;
          border-radius: 15px;
          border: none;
          background-color: #e1e1e1;
        }
      }
    }
  }
}
</style>
