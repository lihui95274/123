<template>
<div class='login' :style="style">
  <div class="client">
    <h1>李慧的后台管理系统</h1>
    <div class='username item'>
      <div class='item-title'>用户名：</div>
      <input type="text" v-model="username">
    </div>
    <div class='password item'>
      <div class='item-title'>密  码：</div>
      <input type="password" v-model="password">
    </div>
    <div class='btn'>
      <button @click="login">LOGIN</button>
    </div>
  </div>
</div>
</template>
<script>
import Cookie from 'js-cookie'
const seeWidth = document.body.parentElement.clientWidth;
const seeHeight = document.body.parentElement.clientHeight
console.log(seeWidth,seeHeight)
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      sWidth: seeWidth,
      sHeight: seeHeight,
      style: {
        height: seeHeight + 'px',
        width: seeWidth + 'px'
      }
    }
  },
  methods: {
    login() {
      const formData = {
        username: this.username,
        password: this.password
      }
      this.$http({
        url: '/login',
        method: 'post',
        data: formData
      })
      .then(res => {
        const token = Cookie.get('token');
        this.$store.commit('login/setToken', token)
        this.$router.push('/index')
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562911802709&di=8affbe4770986450b7b3829fa8ec0a84&imgtype=0&src=http%3A%2F%2Fimg.xiami.net%2Fimages%2Fcollect%2F318%2F18%2F22836318_1374250809.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  .client {
    position: absolute;
    width: 50%;
    height: 50%;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-image: url('http://img0.imgtn.bdimg.com/it/u=1191682028,3000728692&fm=26&gp=0.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
    padding: 2%;
    h1 {
      padding: 5%;
      color: #fff;
    }
    .item {
      padding: 1%;
      .item-title {
        padding: 1%;
      }
    }
  }
  .btn {
    padding: 3%;
    button {
      width: 20%;
      height: 30%;
      background-color: lightblue;
    }
  }
}

</style>

