<template>
  <div id="app" class="app-container">
    <!-- 顶部固定部分 -->
    <mt-header fixed title="vue移动app"></mt-header>
    <!-- 中间路由部分 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部tabbar部分 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item " to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact">
        </span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/cart">
        <span class=" mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style style="scss" scoped>
  .app-container {
    padding-top: 40px;
    padding-bottom: 50px;
    box-sizing: border-box;
  }

  .v-enter-to,
  .v-leave {
    opacity: 1;
    transform: translateX(0);
  }
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
    overflow-x: hidden
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }

</style>
