<template>
  <header>
      <van-nav-bar
      title="京东登录"
      left-text="返回"
      left-arrow
      @click-left="this.$router.go(-1)"
      class="mine_header"
      fixed="true"
      >
      </van-nav-bar>
  </header>
  <main class="user_login_box">
    <div class="login_dialog">
      <div class="_username">
        <input type="text" name="username" placeholder="请输入用户名" class="user_input" v-model="username"/>
      </div>
      <div class="_username u_passwd">
        <input type="password" name="password" placeholder="请输入密码" class="user_input" v-model="password"/>
      </div>

      <div class="login_box">
        <a @click="goLogin()" class="btn_login">登录</a>
      </div>
      <div class="go_reg_box">
        <router-link tag="span" to="/register">快速注册</router-link>
      </div>
    </div>
  </main>
</template>
<script>
	export default{
		data(){
			return{
				username:'',
				password:'',
				userInfo:{}
			}
		},
		methods:{
			goLogin(){
				let _this = this;
				if(_this.username ==''){
					alert('请输入用户名');
				}else if(_this.password == ''){
					alert('请输入密码');
				}else{
					_this.$http.post('/login',{
						loginName:_this.username,
						loginPawd:_this.password,
					}).then((res)=>{
						console.log(_this.password);
					if(res.status == 200){
						_this.userInfo = res.data;
						if(_this.userInfo.status == 1){
							//LOGIN success
							window.sessionStorage.userInfo = JSON.stringify(_this.userInfo);
							console.log(_this.$store);
							_this.$store.dispatch('setUserInfo', this.userInfo);
              this.$router.push('/mine')
						}else{
							alert(_this.userInfo.msg);
						}
					}else{
						alert('请求出现错误');
					}
						console.log(res);
					},(err)=>{
						console.log(err);
					});
				}
				
			}
		}
	}
</script>
<style lang="less" scoped>
body{
    background-color: #F3F5F7;
}

.user_login_box{
    max-width: 640px;
    min-width: 300px;
    margin: 0 auto;
    padding-top: 40px;
}

.user_login_box .login_dialog{
    width: 92%;
    height: 100%;
    padding: 10px;
}

.login_dialog ._username{
    height: 50px;
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
    border: 1px solid #bebebe;
    border-radius: 2px;
}

._username .user_input{
    width: 100% !important;
    height: 100%;
    font-size: 16px;
    padding-left: 6px;
}
.login_dialog .u_passwd{
    margin-top: 10px;
}

.login_dialog .login_box{
    height: 50px;
    width: 102%;
    background-color: #fff;
    border: 1px solid #F23030;
    border-radius: 4px;
    margin-top: 30px;
}

.login_box a{
    display: block;
    width: 100%;
    height: 100%;
    line-height: 50px;
    text-align: center;
    color: #F23030;
}

.go_reg_box{
    float: right;
}
.go_reg_box span{
    display: inline-block;
    color: #aaa;
    height: 20px;
    line-height: 20px;
    margin-top: 10px;
}
</style>