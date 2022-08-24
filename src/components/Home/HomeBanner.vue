<template>
  <!-- 轮播图 -->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>
      <img src="@/assets/images/l8.jpg" alt="" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="@/assets/images/l1.jpg" alt="" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="@/assets/images/l2.jpg" alt="" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="@/assets/images/l3.jpg" alt="" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="@/assets/images/l4.jpg" alt="" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="@/assets/images/l5.jpg" alt="" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="@/assets/images/l6.jpg" alt="" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="@/assets/images/l7.jpg" alt="" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="@/assets/images/l8.jpg" alt="" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="@/assets/images/l1.jpg" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>


.my-swipe .van-swipe-item {
  color: #fff;
  text-align: center;
  background-color: #39a9ed;
  // overflow: hidden;
  position: relative;
}
.my-swipe .van-swipe-item img{
  background: #000;
  width: 100%;
  display: block;
}

</style>