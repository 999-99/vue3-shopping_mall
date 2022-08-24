<template>
  <router-view></router-view>
  <tabbar></tabbar>
</template>

<script>
import Tabbar from '@/components/Tabbar/Tabbar.vue'

export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style lang="less" scoped>

</style>
