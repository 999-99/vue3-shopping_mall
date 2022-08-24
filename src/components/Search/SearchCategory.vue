<template>
  <van-grid :gutter="10">
    <van-grid-item v-for="item in words" :key="item">
      <span @click="getWord($event)">{{item}}</span>
    </van-grid-item>
  </van-grid>
</template>

<script>

export default {
  name: 'SearchCategory',
  data () {
    return {
      words: ['手机','相机','衣服','男装','女装','童装','裤子','鞋子','靴子','皮鞋','冰箱','零食','糖果','箱子','空调','玩具']
    }
  },
  emits: ['getSlectedWord'],
  methods: {
    getWord(e) {
      this.$emit('getSlectedWord',  e.target.innerText)
    }
  }
}

</script>

<style lang="less" scoped>
.van-grid .van-grid-item {
  cursor: pointer;
}
</style>