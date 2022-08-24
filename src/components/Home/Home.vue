<template>
  <!-- 头部区 -->
  <HomeHeader></HomeHeader>
  <div class="m_layout">
    <!-- 轮播图-->
    <HomeBanner></HomeBanner>
    <!--导航-->
    <HomeNav></HomeNav>
    <!--商品区-->
    <HomeMain></HomeMain>
  </div>
</template>

<script>
import HomeHeader from './HomeHeader.vue'
import HomeBanner from './HomeBanner.vue'
import HomeNav from './HomeNav.vue'
import HomeMain from './HomeMain.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeNav,
    HomeMain
  }
}
</script>

<style lang="less" scoped>
body {
    background-color: #F3F3F3;
}
.m_layout {
    min-width: 300px;
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    background-color: #fff;
}
</style>