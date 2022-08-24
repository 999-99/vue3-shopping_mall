<template>
    <!-- 搜索物品展示 -->
    <main class="main_goods_box">
        <ul>
            <li class="goods_item" v-for="item in mDatas" :key="item.product_id">
    			<router-link :to="'/detail/'+item.product_id" class="goods_item_link">
    				<img :src="item.product_img_url" alt="" class="goods_item_pic">
    				<div class="goods_right">
    					<div class="pp_name">
    						<span>{{item.product_name}}</span>
    					</div>
    					<div class="price_box">
    						<span>￥</span>
    						<span>{{item.product_uprice}}</span>
    						<span>.00</span>
    					</div>
    					<div class="pinglun_box">
    						<span>{{item.product_comment_num}}条评价</span>
    						<span>{{item.shop_name}}</span>
    					</div>
    				</div>
    			</router-link>
    		</li>
    	</ul>
    </main> 
</template>

<script>
export default {
  name: 'SearchItem',
  props: {
    mDatas: {
      type: [Array,undefined]
    }
  }
}
</script>

<style>
.main_goods_box {
    width: 100%;
    border-top: 1px solid #DFDFDF;
    margin-top: 10px;
    font-size: 10px;
}

.main_goods_box .goods_item {
    width: 100%;
    height: 120px;
    padding: 10px;
}

.goods_item .goods_item_link {
    display: block;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #eee;
    position: relative;
}

.goods_item_link .goods_item_pic {
    display: inline-block;
    width: 100px;
    height: 100px;
}

.goods_item_link .goods_right {
    position: absolute;
    left: 104px;
    top: 0;
    height: 100%;
}

.goods_right .pp_name {
    height: 40%;
}

.goods_right .price_box {
    color: #F34545;
    height: 20%;
    line-height: 20px;
    margin-top: 10px;
}

.goods_right .price_box span:nth-child(2) {
    font-size: 18px;
    margin: 0 -3px;
}

.goods_right .pinglun_box {
    margin-top: 5px;
    color: #848689;
}
</style>