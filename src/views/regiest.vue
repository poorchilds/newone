<template>
  <div class="login">
    <!-- 头部 -->
    <pagetitle router="/login">
      <template>注册</template>
    </pagetitle>
    <!-- logo -->
    <logo />
    <!-- 表单 -->
    <div class="login-form">
      <van-form @submit="onSubmit">
        <van-field class="inp" :rules="relusUsername" v-model="username" placeholder="用户名" />
        <van-field class="inp" :rules="relusNickname" v-model="nickname" placeholder="昵称" />
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
      已注册去
      <span @click="toggle('/login')">登录</span>
    </div>
  </div>
</template>

<script>
import logo from '../components/login/logo.vue'
// import toggle from '../components/login/toggle.vue'
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      relusUsername: [
        { required: true, message: '请填写密码', trigger: 'onChange' },
        {
          pattern: /^\d{5,11}$/,
          message: '用户名必须是5-9位数字',
          trigger: 'onChange'
        }
      ],
      relusNickname: [
        { required: true, message: '请填写密码', trigger: 'onChange' },
        {
          pattern: /^[\u4e00-\u9fa5]{2,5}$/,
          message: '用户昵称只能是2-5位中文',
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
  methods: {
    toggle(value) {
      this.$router.push(value)
    },
    async onSubmit() {
      console.log(123)
      const res = await this.$axios.post('/register', {
        username: this.username,
        nickname: this.nickname,
        password: this.password
      })
      console.log(res)
      const { statusCode, message } = res.data
      // console.log(res)
      if (statusCode === 200) {
        this.$toast.success(message)
        this.$router.push({
          name: 'login',
          params: {
            password: this.password,
            username: this.username
          }
        })
      } else {
        this.$toast.fail(message)
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
