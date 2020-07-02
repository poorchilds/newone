<template>
  <div class="editdata">
    <div class="top">
      <pagetitle router="/regiest">
        <template>编辑资料</template>
      </pagetitle>
    </div>
    <div class="cen">
      <img src="../../access/images/新闻详情/u80.png" />
    </div>
    <div class="bot">
      <tables>
        <template>昵称</template>
        <template v-slot:cen>火星网友</template>
      </tables>
      <tables>
        <template>密码</template>
        <template v-slot:cen>
          <input type="password" placeholder="*****" class="inp-pwd" />
        </template>
      </tables>
      <tables>
        <template>性别</template>
        <template v-slot:cen>男</template>
      </tables>
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
.editdata {
  background-color: #f2f2f2;
  height: 1000px;
  .cen {
    height: 135px;
    // display: flex;
    img {
      display: block;
      margin: 20px auto 0;
      height: 70px;
      width: 70px;
    }
  }
  .bot {
    // height: 45 * 3px;
    padding: 0 10px 0 20px;
    .inp-pwd {
      height: 45px;
      background-color: #f2f2f2;
      border: none;
      text-align: right;
      margin-right: 10px;
    }
  }
}
</style>
