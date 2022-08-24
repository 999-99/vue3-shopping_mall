import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './route'
import axios from 'axios'
import store from './store/'

// 按需导入vant3组件库
import {
  Search,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  ConfigProvider,
  Sticky
} from 'vant'

const app = createApp(App)
app.use(store)
// 配置全局 axios
axios.interceptors.request.use(function (config) { //配置发送请求的信息
  store.dispatch('showLoading');
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading');
  return response;
}, function (error) {
  return Promise.reject(error);
});
axios.defaults.baseURL = 'http://localhost:3333/'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
app.config.globalProperties.$http = axios

if (window.sessionStorage.userInfo) {
  store.dispatch('setUserInfo', JSON.parse(window.sessionStorage.userInfo));
}

// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.userInfo.user_id) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
    console.log("================");
  } else {
    console.log("nnnnnnnnnnnnnnnnnn");
    next();
  }
});

app.use(router)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Search)
app.use(Swipe)
app.use(SwipeItem)
app.use(Grid)
app.use(GridItem)
app.use(ActionBar)
app.use(ActionBarIcon)
app.use(ActionBarButton)
app.use(ConfigProvider)
app.use(Sticky)


app.mount('#app')