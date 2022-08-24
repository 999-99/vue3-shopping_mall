<template>
  <header>
    <van-nav-bar
    title="我的商城"
    left-text="返回"
    left-arrow
    @click-left="this.$router.go(-1)"
    class="mine_header"
    fixed="true"
    >
      <template #right>
        <van-icon name="setting-o" size="18" />
      </template>
    </van-nav-bar>
  </header>
  <mine-main></mine-main>
</template>

<script>
import MineMain from './MineMain.vue'

export default {
  name: 'Mine',
  components: {
    MineMain
  }
}
</script>

<style lang="less" scoped>
.mine_header {
  background-color: #F0F2F5;
}

</style>