<template>
  <div class="header-container">购物车</div>
</template>

<script>
export default {
  name: 'CartHeader'
}
</script>

<style lang="less" scoped>
.header-container {
  font-size: 12px;
  height: 45px;
  width: 100%;
  background-color: #f15353;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>