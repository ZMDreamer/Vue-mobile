<template>
  <div class="goodsDetail-container">
    <!-- 轮播图部分 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe :auto="4000" class="swiper">
            <mt-swipe-item v-for="(item,index) in detailBannerData" :key='index'>
              <img :src='item.src' alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <!-- 添加商品部分 -->
    <div class="mui-card">
      <div class="mui-card-header ">商品名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>市场价:
            <s>¥{{goodsDetail.market_price}}</s> &nbsp;&nbsp;&nbsp;&nbsp; 销售价:
            <span style="color:red; font-weight:bold">¥{{goodsDetail.sell_price}}</span>
          </p>

          <p>购买数量:
            <numberbox @getAddNum="getNum"></numberbox>
          </p>
          <div class="mui-btn mui-btn-primary">
            立即购买
          </div>
          <div class="mui-btn mui-btn-danger" @click="addToCart">
            加入购物车
          </div>
        </div>
      </div>
    </div>
    <!-- 动画小球 -->
    <transition @beforeEnter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
      <div class="ball" v-show="showBall" ref="ball">
      </div>
    </transition>
    <!-- 商品详情展示部分 -->
    <div class="mui-card">
      <div class="mui-card-header ">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{goodsDetail.goods_no}}</p>
          <p>库存情况:{{goodsDetail.stock_quantity}}件</p>
          <p>上架时间:{{goodsDetail.add_time | formatTime }}
          </p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="intrGood">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goodCmt">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
  import numberbox from '../numberBox/NumberBox.vue'
  import {
    getGoodDetail,
    getGoodDetailBanners
  } from '../api'
  export default {
    data() {
      return {
        detailBannerData: [],
        goodsDetail: {},
        showBall: false,
        selectedNumber: 1,
      }
    },
    created() {
      //获取轮播图
      getGoodDetailBanners(this.$route.params.id).then(res => {
        if (res.status === 0) {
          this.detailBannerData = res.message
        }
      })
      //获取中间商品部分
      getGoodDetail(this.$route.params.id).then(res => {
        if (res.status === 0) {
          this.goodsDetail = res.message[0]
        }
      })
    },
    components: {
      numberbox
    },
    methods: {
      //获取数量
      getNum(num) {
        this.selectedNumber = num
      },
      addToCart() {
        this.showBall = !this.showBall
        //模拟一个添加购物车数据
        var goodInf = {
          count: this.selectedNumber,
          id: this.$route.params.id,
          sell_price: this.goodsDetail.sell_price,
          selected:true
        }

        this.$store.commit('addToCar',goodInf)
      },
      //进入动画
      beforeEnter(el) {
        el.style.transform = 'translate(0,0)'
      },
      //动画过程 
      enter(el, done) {
        el.offsetWidth;
        //获取小球相当于浏览器的距离
        let ballLeft = this.$refs.ball.getBoundingClientRect().left;
        let ballTop = this.$refs.ball.getBoundingClientRect().top;
        //获取购物车相对浏览器的距离
        let cartLeft = document.getElementById('cart').getBoundingClientRect().left;
        let cartTop = document.getElementById('cart').getBoundingClientRect().top;
        let moveX = (cartLeft - ballLeft) + 'px';
        let moveY = (cartTop - ballTop) + 'px';
        el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)"
        el.style.transform = `translate(${moveX},${moveY})`
        done()
      },
      afterEnter(el) {
        this.showBall = !this.showBall
      },
      //跳转到图文页
      intrGood() {
        this.$router.push({
          path: '/home/shopping/goodIntr/' + this.$route.params.id
        })
      },
      //跳转到商品品论页面
      goodCmt() {
        this.$router.push({
          path: '/home/shopping/goodCmt/' + this.$route.params.id
        })
      }

    },
    filters: {
      formatTime(time) {
        time = new Date(time)
        var year = time.getFullYear()
        var month = time.getMonth() + 1
        var day = time.getDate()
        var hours = time.getHours()
        var minutes = time.getMinutes()
        var seconds = time.getSeconds()
        month = month > 10 ? month : '0' + month
        day = day > 10 ? day : '0' + day
        hours = hours > 10 ? hours : '0' + hours
        minutes = minutes > 10 ? minutes : '0' + minutes
        seconds = seconds > 10 ? seconds : '0' + seconds
        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
      }
    },

  }

</script>
<style lang="scss" scoped>
  .goodsDetail-container {
    overflow: hidden;
    background-color: #eee;
    .swiper {
      height: 200px;
      text-align: center;
      img {
        height: 100%;
      }
    }
    .mui-card-footer {
      display: block;
      .mint-button {
        margin: 10px 0;
      }
    }
    .mui-numbox {
      margin: 10px 0;
    }
    .ball {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: red;
      position: absolute;
      left: 144px;
      top: 400px;
      z-index: 99;
    }
  }

</style>
