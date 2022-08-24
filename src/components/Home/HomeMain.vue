<template>
  <span>为您推荐</span>
  <!-- 首页商品页 -->
  <van-grid :border="false" :column-num="2">
  <van-grid-item v-for="item in mainDatas" :key="item.product_id" :to="'/detail/'+item.product_id" class="item_all">
    <van-image :src="item.product_img_url" class="item_pic" />
    <div class="item_info">
      <p class="item_title">{{item.product_name}}</p>
      <p class="item_price">
        <i style="text-decoration: none;font-style: normal;font-size: 12px">¥</i>
        <span>{{item.product_price}}</span>
      </p>
    </div>
  </van-grid-item>
</van-grid>
</template>

<script>
export default {
  data () {
    return {
      mainDatas:[]
    }
  },
  methods:{
    async getData () {
      const { data: res } = await this.$http.get('/home')
      this.mainDatas = res
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="less" scoped>
.item_all {
  text-align: center;
  float: left;
  width: 50%;
  background-color: #fff;
  margin-bottom: 10px;
}

.item_pic {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 5px  0 5px 5px;
}

.item_info {
  text-align: left;
  margin-left: 5px;
}

.item_title {
  overflow: hidden;
  margin-bottom: 3px;
  height: 36px;
  color: #6F7474;
  font-weight: 500;
  font-family: "Microsoft YaHei";
  font-size: 10px;
}

.item_price{
  width: 80px;
  color: #F11938;
  font-weight: 800;
  font-family: "微软雅黑";
  font-size: 16px;
}
</style>