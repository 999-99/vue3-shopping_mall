<template>
<!-- 商品页头部 -->
    <header class="top_bar">
        <van-nav-bar
        title="商品详情"
        left-text="返回"
        left-arrow
        @click-left="$router.go(-1)"
        />
    </header>
	<div class="goods_detail">
        <!-- 商品页主体 -->
        <main class="detail_box">
        <section class="banner_box">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
          <van-swipe-item v-for="item in goodsImages" :key="item.product_id">
            <img :src="item.image_url" alt="" class="banner_pic">
          </van-swipe-item>
            </van-swipe>
        </section>
        <section class="product_info clearfix">
            <div class="product_left">
                <p class="p_name">{{goodsData[0].product_name}}</p>
                <div class="product_pric">
                    <span>￥</span>
                    <span class="rel_price">{{goodsData[0].product_price}}</span>
                    <span>.00</span>
                </div>
            <div class="product_right">降价通知</div>
            </div>
        </section>
        <section class="product_intro">
            <p class="pro_det">
                {{goodsData[0].product_detail}}
            </p>
        </section>
        </main>
        <!-- 商品页底部 -->
        <van-sticky :offset-bottom="50" position="bottom">
        <van-action-bar safe-area-inset-bottom>
            <van-action-bar-icon icon="chat-o" text="客服" dot />
            <van-action-bar-icon icon="cart-o" text="购物车" badge="5" />
            <van-action-bar-icon icon="shop-o" text="店铺" badge="12" />
            <van-action-bar-button type="warning" text="加入购物车" />
            <van-action-bar-button type="danger" text="立即购买" />
        </van-action-bar>
        </van-sticky>
	</div>
</template>
<script>
  export default{
        created(){
            this.fetchData(this.$route.params.id);
        },
        data(){
            return {
                cateGoodsAllData:[],
                goodsImages:[],
                goodsData:[],
            }
        },
        watch:{
            $route(to){
                //console.log(to);
                var reg=/detail\/\d+/;
                if(reg.test(to.path)){
                    var categotyId=this.$route.params.id || 0;
                    this.fetchData(categotyId);
                }
            }
        },
        methods:{
            fetchData(id){
                var _this=this;
                _this.$http.get('/detail',{
                    params: {
                        mId: id
                    }
                }).then((res)=>{
                    _this.goodsImages = res.data[0];
                    _this.goodsData = res.data[1];
                },(err)=>{
                    console.log(err);
                })
            }
        }
    }
</script>
<style lang="less" scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    // background-color: #39a9ed;
    img {
        width: 100%;
    }
}

body {
    background-color: #F0F2F5;
    .goods_detail {
    min-width: 300px;
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    height: 1000px;
    background-color: #fff;
    }
}

.detail_box {
    width: 100%;
    height: 100%;
}

.product_info {
    width: 100%;
    height: 100px;
    background-color: #fff;
}

.product_info .product_left {
    width: 100%;
    float: left;
    height: 100%;
    padding-left: 10px;
    position: relative;
}

.product_left .p_name {
    width: 100%;
    color: #48484B;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
}

.product_left .product_pric {
    margin-top: 10px;
    position: absolute;
    left: 6px;
    bottom: 8px;
}

.product_pric span {
    color: #F23434;
}

.product_pric span:nth-child(1) {
    font-size: 16px;
}

.product_pric span:nth-child(2) {
    font-size: 20px;
    font-weight: 600;
    margin: 0 -3px;
}

.product_info .product_right {
    float: right;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    text-align: center;
    line-height: 14px;
    padding: 10px 14px;
    position: absolute;
    right: 10px;
    bottom: 6px;
}

.product_intro {
    width: 100%;
    margin-top: 10px;
    height: auto;
    background-color: #fff;
    padding: 10px 0 10px 6px;
}

.product_intro .pro_det {
    font-size: 16px;
    font-weight: 500;
    color: #48484B;
    line-height: 20px;
}

</style>