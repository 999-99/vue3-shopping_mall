<template>
  <van-grid :border="false" :column-num="5">
  <van-grid-item>
    <a href="#" class="nav_item_link">
      <img src="@/assets/images/nav0.png" alt="">
      <span>京东超市</span>
    </a>
  </van-grid-item>
  <van-grid-item>
    <a href="#" class="nav_item_link">
      <img src="@/assets/images/nav1.png" alt="">
      <span>全球购</span>
    </a>
  </van-grid-item>
  <van-grid-item>
    <a href="#" class="nav_item_link">
      <img src="@/assets/images/nav2.png" alt="">
      <span>服装城</span>
    </a>
  </van-grid-item>
  <van-grid-item>
    <a href="#" class="nav_item_link">
      <img src="@/assets/images/nav3.png" alt="">
      <span>京东生鲜</span>
    </a>
  </van-grid-item>
  <van-grid-item>
    <a href="#" class="nav_item_link">
      <img src="@/assets/images/nav4.png" alt="">
      <span>京东到家</span>
    </a>
  </van-grid-item>
  <van-grid-item>
    <a href="#" class="nav_item_link">
      <img src="@/assets/images/nav5.png" alt="">
      <span>充值中心</span>
    </a>
  </van-grid-item>
  <van-grid-item>
    <a href="#" class="nav_item_link">
      <img src="@/assets/images/nav6.png" alt="">
      <span>惠赚钱</span>
    </a>
  </van-grid-item>
  <van-grid-item>
    <a href="#" class="nav_item_link">
      <img src="@/assets/images/nav7.png" alt="">
      <span>领券</span>
    </a>
  </van-grid-item>
  <van-grid-item>
    <a href="#" class="nav_item_link">
      <img src="@/assets/images/nav8.png" alt="">
      <span>物流查询</span>
    </a>
  </van-grid-item>
  <van-grid-item>
    <a href="#" class="nav_item_link">
      <img src="@/assets/images/nav9.png" alt="">
      <span>我的关注</span>
    </a>
  </van-grid-item>
</van-grid>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
van-grid {
  max-width: 100%;
  height: 150px;
}

van-grid van-grid-item {
  width: 20%;
  height: 69px;
  float: left;
  text-align: center !important;
}

.nav_item_link {
  width: 100%;
  height: 100%;
  display: block;
  text-align: center;
}

.nav_item_link img {
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 auto;
}

.nav_item_link span {
  font-size: 12px;
  text-align: center;
} 
</style>