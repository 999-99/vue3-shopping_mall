<template>
  <van-search
  show-action
  placeholder="请输入搜索关键词"
  @click-input="onSearch"
  @click-right-icon="onLogin"
  class="search"
  >
  <template #left>
		<img src="@/assets/images/buy-logo.png" alt="">
	</template>
  <template #action>
    <router-link to='/login'>登录</router-link>
  </template>
</van-search>
</template>

<script>
export default {
  name: 'HomeHeader',
  methods:{
    onSearch(){
      this.$router.push('/search')
    },
    onLogin(){
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  z-index: 2;
  img {
    width: 15px;
    height: 15px;
  }
}
</style>