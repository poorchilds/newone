<template>
  <div class="editdata">
    <div class="top">
      <pagetitle router="/regiest">
        <template>编辑资料</template>
      </pagetitle>
    </div>
    <div class="cen">
      <img :src="$axios.defaults.baseURL + userdata.head_img" />
    </div>
    <div class="bot">
      <!--                昵称组件 -->
      <tables @click="ednick">
        <template>昵称</template>
        <template v-slot:cen>{{userdata.nickname}}</template>
      </tables>
      <!--                昵称弹框 -->
      <van-dialog v-model="nickshow" title="修改昵称" @confirm="nicksure" show-cancel-button>
        <van-field v-model="nickname" />
      </van-dialog>
      <!--                密码组件 -->
      <tables @click="edpwd">
        <template>密码</template>
        <template v-slot:cen>
          <input type="password" placeholder="*****" class="inp-pwd" />
        </template>
      </tables>
      <!--                密码弹框 -->
      <van-dialog v-model="pwdshow" title="修改昵称" @confirm="pwdsure" show-cancel-button>
        <van-field v-model="password" />
      </van-dialog>
      <!--                性别组件 -->
      <tables @click="edgender">
        <template>性别</template>
        <template v-slot:cen>{{userdata.gender === 1 ? '男' : '女'}}</template>
      </tables>
      <!-- 性别弹框 -->
      <van-dialog v-model="gendershow" title="修改昵称" @confirm="gendersure" show-cancel-button>
        <van-radio-group v-model="gender">
          <van-cell-group>
            <van-cell title="男" clickable @click="gender = 1">
              <template #right-icon>
                <van-radio :name="1" />
              </template>
            </van-cell>
            <van-cell title="女" clickable @click="gender = 0">
              <template #right-icon>
                <van-radio :name="0" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </van-dialog>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      userdata: {},
      nickshow: false,
      nickname: '',
      pwdshow: false,
      password: '',
      gendershow: false,
      gendre: ''
    }
  },
  methods: {
    // 渲染数据
    async reanderdata() {
      const id = localStorage.getItem('userid')
      const res = await this.$axios.get(`/user/${id}`)
      const { statusCode, message, data } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        // Toast.success
        this.userdata = data
      } else {
        this.$toast.fail(message)
      }
    },
    // 修改用户信息发送axios
    async editdata(data) {
      const id = localStorage.getItem('userid')
      const res = await this.$axios.post(`/user_update/${id}`, data)
      // console.log(res.data)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        this.reanderdata()
      } else {
        this.$toast.fail(message)
      }
    },
    // 点击nickname组件
    ednick() {
      this.nickshow = true
      this.nickname = this.userdata.nickname
    },
    edpwd() {
      this.pwdshow = true
      this.password = this.userdata.password
    },
    edgender() {
      this.gendershow = true
      this.gender = this.userdata.gender
    },
    // 昵称弹框确认
    nicksure() {
      this.editdata({ nickname: this.nickname })
    },
    // 密码弹框确定
    pwdsure() {
      this.editdata({ password: this.password })
    },
    // 性别弹框
    gendersure() {
      this.editdata({ gender: this.gender })
    }
  },
  // components: {},
  created() {
    this.reanderdata()
  }
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
