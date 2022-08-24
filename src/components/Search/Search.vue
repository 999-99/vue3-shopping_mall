<template>
  <div class="search_layout">
    <div class="search_page">
			<!-- 顶部搜索栏 -->
      <header class="top">
        <van-search
        show-action
        placeholder="请输入搜索关键词"
        v-model="keywords"
        @search="onSearch()"
        input-align="center"
				background="#4fc08d"
        >
					<template #left>
						<van-button type="primary" style="height:35px;width:55px;white-space:nowrap;cursor: pointer;" v-if="keywords === ''" @click="$router.go(-1)">返回</van-button>
						<van-button type="primary" style="height:35px;width:55px;white-space:nowrap;cursor: pointer;" v-else @click="keywords = '', list = []">撤销</van-button>
					</template>
					<template #action>
						<div @click="onSearch()" style="height:35px;width:55px;white-space:nowrap;text-align:center;color:white;background-color:#1989fa">搜索</div>
					</template>
				</van-search>
			</header>

			<!-- 商品分类 -->
			<search-category
			v-if="keywords === ''"
			@getSlectedWord="getWord"
			></search-category>
			<div v-else>
				<!-- 排序方式 -->
				<section class="search_condition">
	    	<ul>
	      	<li>
	            <span class="all">全部</span>
	            <em class="all_icon"></em>
	        </li>
	        <li>
	            <span @click="getbyHot()">销量</span>
	        </li>
	        <li class="p_price">
	            <span>价格</span>
              <em class="price_up" @click="getByPriceUp()"></em>
	            <em class="price_down" @click="getByPriceDown()"></em>
	        </li>
	        <li>
	            <span>筛选</span>
	            <em class="saixuan"></em>
	        </li>
      	</ul>
    		</section>

				<!-- 搜索展示 -->
				<search-item :mDatas="list"></search-item>
			</div>
		</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SearchItem from './SearchItem.vue'
import SearchCategory from './SearchCategory.vue'

export default{
  name: 'Search',
	data(){
		return {
			// keywords:'',
			list: []
		}
	},
	setup() {
    const keywords = ref('');
    return {
      keywords,
    };
  },
	methods:{
    // 获取搜索内容方法
		async onSearch(){
			if(this.keywords.trim() === ''){
				alert('请输入商品名称');
			}else{
				const { data: res} = await this.$http.get('/search',{
					params:{
						kw:this.keywords,
						hot:'',
						priceUp:'',
						priceDown:''
					}
				})
				this.list = res
      }
		},
		getWord(val){
			this.keywords = val
			this.onSearch()
		},
		// 按销量排序方法
		getbyHot(){
			let _this = this;
			if(_this.keywords == ''){
				alert('请输入商品名称');
			}else{
				_this.$http.get('/search',{
					params:{
						kw:_this.keywords,
						hot:'hot',
						priceUp:'',
						priceDown:''
					}
					}).then((res)=>{
						_this.list = res.data;
						console.log(_this.list);
					},(err)=>{
						console.log(err);
					});
				}
		},
		// 按价格升序方法
		getByPriceUp(){
			let _this = this;
			if(_this.keywords == ''){
				alert('请输入商品名称');
			}else{
				_this.$http.get('/search',{
					params:{
						kw:_this.keywords,
						hot:'hot',
						priceUp:'priceUp',
						priceDown:''
					}
					}).then((res)=>{
						_this.mDatas = res.data;
						console.log(_this.mDatas);
					},(err)=>{
						console.log(err);
					});
				}
		},
		// 按价格降序方法
		getByPriceDown(){
			let _this = this;
			if(_this.keywords == ''){
				alert('请输入商品名称');
			}else{
				_this.$http.get('/search',{
					params:{
						kw:_this.keywords,
						hot:'hot',
						priceUp:'',
						priceDown:'priceDown'
					}
					}).then((res)=>{
						_this.mDatas = res.data;
						console.log(_this.mDatas);
					},(err)=>{
						console.log(err);
					});
				}
		}
	},
	components: {
		SearchItem,
		SearchCategory
	}
}
</script>

<style lang="less" scoped>
.search_layout {
  min-width: 300px;
  max-width: 640px;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
}

.top van-search {
  position: fixed;
	left: 0;
  top: 0;
  width: 100%;
	height: 40px;
  z-index: 2;
}

.search_layout .search_condition {
    width: 100%;
    height: 40px;
    // margin-top: 40px;
    border-bottom: 1px solid #DFDFDF;
    border-top: 1px solid #DFDFDF;
}

.search_condition ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.search_condition ul li {
    width: 25%;
    height: 100%;
    float: left;
    text-align: center;
    line-height: 40px;
}

li em {
    width: 8px;
    height: 7px;
    display: inline-block;
    background: url("@/assets/images/jd-sprites.png") no-repeat;
    background-size: 200px 200px;
}

.all_icon {
    background-position: 0 -109px;
}

.price_up {
    background-position: -170px -28px;
}

.price_down {
    background-position: -170px -36px;
    margin-left: -12px;
}

.saixuan {
    width: 15px;
    height: 13px;
    display: inline-block;
    background: url("@/assets/images/jd-search-sprites.png") no-repeat;
    background-size: 200px 200px;
    background-position: -178px 3px;
    margin-left: -4px;
}

.all {
    color: #F23030;
}

.main_goods_box {
    width: 100%;
    border-top: 1px solid #DFDFDF;
    margin-top: 10px;
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