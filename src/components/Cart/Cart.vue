<template>
  <div class="cart_layout">
    <!-- 购物车头部 -->
    <cart-header></cart-header>
    <!-- 购物车商品部分 -->
    <div class="goods">
    <cart-main
    v-for="item in goods"
    :key="item.cart_id"
    :id="item.cart_id"
    :title="item.product_name"
    :pic="item.product_img_url"
    :price="item.product_uprice"
    :state="item.state"
    v-model:num="item.goods_num"
    @state-change="getNewState"
    @num-change="getNewNum()"
    ></cart-main>
    </div>
    <!-- 购物车底部 -->
    <cart-footer
    :isfull="fullState"
    :amount="amt"
    :all="total"
    @full-change="getFullState"
    ></cart-footer>
  </div>
</template>

<script>
import CartHeader from './CartHeader.vue'
import CartMain from './CartMain.vue'
import CartFooter from './CartFooter.vue'

export default {
  name: 'Cart',
  data () {
    return {
      goods: []
    }
  },
  created () {
    this.getCartDatas()
  },
  methods: {
    // 获取购物车数据方法
    async getCartDatas(){
				const { data: res } = await this.$http.get('/cart')
        // 处理数据：给数组对象添加是否选中属性
        const result = res.map((item) => {
          return { ...item, state: true }
        })
        this.goods = result
        console.log(this.goods)
		},
    // 接收子组件传递过来的数据,获取最新状态
    getNewState(e) {
      this.goods.some(item => {
        if (item.cart_id === e.id) {
          item.state = e.value
          // 终止后续的循环
          return true
        }
      })
    },
  },
  computed: {
    // 动态计算出全选的状态是 true 还是 false
    fullState() {
      return this.goods.every(item => item.state)
    },
    // 已勾选商品的总价格
    amt() {
      // 1. 先 filter 过滤
      // 2. 再 reduce 累加
      return this.goods
        .filter(item => item.state)
        .reduce((total, item) => (total += item.product_uprice * item.goods_num), 0)
    },
    // 已勾选商品的总数量
    total() {
      return this.goods.filter(item => item.state).reduce((t, item) => (t += item.goods_num), 0)
    }
  },
  components: {
    CartHeader,
    CartMain,
    CartFooter
  }
}
</script>

<style lang="less" scoped>
.cart_layout {
  min-width: 300px;
  max-width: 640px;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
}
.goods {
  margin:45px 0;
}
</style>