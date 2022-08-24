<template>
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" route fixed safe-area-inset-top>
        <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/search" icon="search">搜素</van-tabbar-item>
        <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Tabbar',
    setup() {
        const active = ref(0);
        return { active };
    },
    
}
</script>

<style lang="less" scoped>
--van-tabbar-background-color{
    background-color: #F0F2F5;
}
</style>