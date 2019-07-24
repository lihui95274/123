<template>
    <div id="mimadenglu">
        <div class="login_top">
             <div style="display:flex;align-items:center;" class="input_block">
                 <!-- <span class="span_a"></span> -->
                 <input v-model="name" type="text" placeholder="用户名/手机号" class="input_a_phone" style="border-style:none;font-size:0.28rem">
             </div>
             <div class="input_a_verification" style="">
                 <!-- <span class="span_b"></span> -->
                 <div class="input_yanzheng" style="display:flex;align-items:center;">
                    <input v-model="pwd" class="input_a_num" type="text" placeholder="密码" style="border-style:none;font-size:0.28rem">
                 </div>
             </div>
             <div class="login_bottom">
                 <div class="login_bottom_left">
                     <a class="forget" href=""><span>忘记密码</span></a>
                 </div>
                 <div class="login_bottom_right">
                     <p>
                       <router-link to="/" class="denglu" href="">短信登录</router-link>
                     </p>
                 </div>
             </div>
        </div>
             <div class="btn_a">
                 <input @click="isLogin" class="btn_a_1" type="button" value="登录">
             </div>
    </div>
</template>
<script>
export default {
   name:'mimadenglu',
   data() {
       return {
           name: '',
           pwd: '',
           error: ''
       }
   },
   computed : {
       user() {
           return this.$state.user
       }
   },
   methods: {
       isLogin:function() {
           this.$http.get('http://localhost:3000/users?username='+this.name+'&password='+this.pwd)
           .then((response)=>{
               console.log(this,123456)
               if(response.body != null & response.body.length > 0){
                   this.$store.commit('isLogin',response.body[0]);
                   this.name='',
                   this.pwd = '',
                   this.$router.push({path:'/yuyue'})
               }else {
                   alert('请输入正确的用户名和密码');
                   this.name = '',
                   this.pwd = ''
               }
           })
       }
   }
}
</script>

<style lang='less' scoped>
   #mimadenglu {
       width: 100%;
       background-color: #ffffff;
       .login_top {
        padding: 0px 0.46rem;
        .input_block {
        height: 1rem;
        width: 100%;
        .input_a_phone {
            width: 100%;
            height: 1rem;
            padding: 0 0.46px;
           }
        }
        .input_a_verification {
            width: 100%;
            height: 1rem;
            // background-color: blue;
            display: flex;
            .input_yanzheng {
                flex: 4;
                .input_a_num {
                    flex: 3;
                    width: 100%;
                    height: 1rem;
                    align: left;
                }
            }
            .btn {
                flex: 1;
                height: 0.5rem;
                line-height: 0.5rem;
                font-size:0.28rem;
                // height: 40px;
            }
        }
        .login_bottom {
            display: flex;
            width: 100%;
            font-size: 0.26rem;
            height: 0.9rem;
            line-height: 0.9rem;
            .login_bottom_left {
                flex: 1;
                height: 0.9rem;
               .forget {
                //    float: left;
                display: block;
                text-align: left;
                text-decoration:none;
               }
            }
            .login_bottom_right {
                flex: 1;
                .denglu {
                display: block;
                text-align: right;
                text-decoration:none;
                }
            }
        }
    }
            .btn_a {
                
                width: 100%;
                // height: 100%;
                background-color: #eeeeee;
                .btn_a_1 {
                    width: 6.16rem;
                    height: 0.9rem;
                    background-color: #bbbbbb;
                    font-size: 0.34rem;
                    color: #ffffff;
                    border-radius: 0.15rem;
                }
       }
   }

</style>

