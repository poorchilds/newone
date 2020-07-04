<template>
  <div class="login">
    <!-- 头部 -->
    <pagetitle router="/regiest">
      <template>登录</template>
    </pagetitle>
    <!-- logo -->
    <logo />
    <!-- 表单 -->
    <div class="login-form">
      <van-form @submit="onSubmit">
        <van-field class="inp" :rules="relusUsername" v-model="username" placeholder="用户名" />
        <van-field
          class="inp"
          v-model="password"
          type="password"
          placeholder="密码"
          :rules="relusPassword"
        />
        <div style="margin: 16px; margin-top:50px;">
          <van-button round block type="info" native-type="submit" color="#cc3300">提交</van-button>
        </div>
      </van-form>
    </div>
    <!-- toggle切换 -->
    <div class="login-toggle">
      未注册去
      <span @click="toggle('/regiest')">注册</span>
    </div>
  </div>
</template>

<script>
// import pagetitle from '../components/pagetitle.vue'
import logo from '../components/login/logo.vue'
// import toggle from '../components/login/toggle.vue'
export default {
  data() {
    return {
      username: '',
      password: '',
      relusUsername: [
        { required: true, message: '请填写密码', trigger: 'onChange' },
        {
          pattern: /^\d{5,11}$/,
          message: '用户名必须是5-9位数字',
          trigger: 'onChange'
        }
      ],
      relusPassword: [
        { required: true, message: '请填写密码', trigger: 'onChange' },
        {
          pattern: /^\w{3,9}$/,
          message: '密码必须是3-9位',
          trigger: 'onChange'
        }
      ]
    }
  },
  created() {
    this.username = this.$route.params.username
    this.password = this.$route.params.password
  },
  methods: {
    toggle(value) {
      this.$router.push(value)
    },
    async onSubmit() {
      // console.log(123)
      const res = await this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })
      // console.log(res.data)
      if (res.data.statusCode === 200) {
        this.$toast.success(res.data.message)
        localStorage.setItem('token', res.data.data.token)
        localStorage.setItem('userid', res.data.data.user.id)
        this.$router.push('/user')
      } else {
        this.$toast.fail(res.data.message)
      }
    }
  },
  components: {
    logo
  }
}
</script>

<style scoped lang="less">
.login {
  background-color: #f2f2f2;
  height: 10000px;
  // .login-title {
  //   height: 50px;
  //   width: 100%;
  //   border-bottom: 1px solid #757575;
  //   display: flex;
  //   line-height: 50px;
  //   text-align: center;
  //   .icon,
  //   .le-icon {
  //     width: 50px;
  //     height: 50px;
  //   }
  //   .tit {
  //     flex: 1;
  //   }
  // }
  // .login-logo {
  //   text-align: center;
  //   span {
  //     color: #d81e06;
  //     font-size: 126px;
  //   }
  // }
  .login-form {
    // height: 200px;
    .inp {
      border-bottom: 1px solid #000;
      width: 320px;
      font-size: 20px;
      background-color: #f2f2f2;
      margin: 10px auto;
    }
    // background-color: blue;
  }
  .login-toggle {
    height: 26px;
    text-align: right;
    margin-right: 20px;
    font-size: 16px;
    span {
      background-color: pink;
      margin-left: 5px;
    }
  }
}
</style>
