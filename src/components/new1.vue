<template>
  <div class="new1">
    <div class="le-n1">
      <div class="h5">
        <slot name="h1"></slot>
      </div>
      <span class="nbsp">
        <slot name="press1"></slot>
      </span>
      <span>
        <slot name="num1"></slot>
      </span>
      <span>跟帖</span>
    </div>
    <div class="ri-n1">
      <slot name="img1"></slot>
      <!-- <img src="../../" alt /> -->
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
.new1 {
  padding: 15px 10px;
  display: flex;
  background-color: #f2f2f2;
  box-sizing: border-box;
  .le-n1 {
    flex: 1;
    font-size: 16px;
    .h5 {
      // margin-top: 20px;
      padding-top: 5px;
      margin-bottom: 8px;
      box-sizing: border-box;
    }
    .nbsp {
      padding-right: 15px;
    }
    span {
      font-size: 14px;
      color: #a0a0a0;
    }
  }
  .ri-n1 {
    width: 120px;
    height: 75px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
