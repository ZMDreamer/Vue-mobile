<template>
  <div class="home">
    <!-- 轮播图 -->
      <mt-swipe :auto="4000" class = "swiper">
        <mt-swipe-item v-for="(item,index) in bannerData" :key='index'>
          <a :href='item.url'>
            <img :src='item.img' alt="">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    <!-- 快速导航部分 -->
    <div class="navBar">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newlist">
            <img src="../assets/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/sharepicture">
            <img src="../assets/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/shopping">
            <img src="../assets/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/leavemessage">
            <img src="../assets/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/videolist">
            <img src="../assets/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/contact">
            <img src="../assets/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {
    getBannerPictures
  } from '../api'
  export default {
    created() {
      getBannerPictures().then(res => {
        if (res.status === 0) {
          this.bannerData = res.message
        }
      })
    },
    data() {
      return {
        bannerData: []
      }
    }

  }

</script>
<style lang="scss" scoped>
  .home {
    .swiper {
      height: 200px;
      img {
        width: 100%;
        display: block;
      }
    }
    .navBar {
      ul {
        background-color: white;
        border: none;
        li {
          border: none;
          .mui-media-body {
            font-size: 14px;

          }
        }
      }
      img {
        width: 60px;
        display: block;
      }
    }



  }

</style>
