<template>
  <div class="commit">
    <div class="top-com">
      <pagetitle router="/regiest">
        <template>我的跟帖</template>
      </pagetitle>
    </div>
    <div class="cen-com">
      <sendcommit>
        <template v-slot:time>2019-10-10 10:25</template>
        <template v-slot:content>啊信是张信哲吗？张信哲是不是的张学友弟弟？</template>
        <template v-slot:article>这是一段最多显示一行jslfjalsaljla的文字，多余的内容会被省略</template>
      </sendcommit>
    </div>
    <div class="bot-com">
      <replaycommit>
        <template v-slot:time>2019-10-10 10:25</template>
        <template v-slot:rpelay-user>火星彩票原</template>
        <template v-slot:content>啊信是张信哲吗？张信哲是不是的张学友弟弟？</template>
        <template v-slot:replay-contet>不是</template>
        <template v-slot:article>这是一段最多显示一行jslfjalsaljla的文字，多余的内容会被省略</template>
      </replaycommit>
    </div>
    <div class="more-replay">
      <span>
        更多跟帖
        <span class="iconfont iconjiantou1"></span>
        <span class="iconfont iconjiantou1"></span>
      </span>
    </div>
  </div>
</template>

<script>
import sendcommit from '.././../components/user/commit/sendcommit.vue'
import replaycommit from '.././../components/user/commit/replaycommit.vue'
export default {
  props: {},
  data() {
    return {}
  },
  components: {
    sendcommit,
    replaycommit
  },
  created() {}
}
</script>

<style scoped lang='less'>
.commit {
  background-color: #f2f2f2;
  box-sizing: border-box;
  width: 360px;
  .more-replay {
    text-align: center;
    // line-height: ;
    font-size: 14px;
    padding-top: 30px;
    padding-bottom: 10px;
    // span {
    //   padding: 0;
    //   margin: 0;
    //   span {
    //     padding: 0;
    //     margin: 0;
    //   }
    // }
  }
}
</style>
