<template>
  <div class="newList">
    <ul class="mui-clearfix">
      <li v-for="item in goodLists" :key="item.id">
        <router-link :to="'/home/shopping/'+item.id">
          <img :src="item.img_url" alt="">
          <p class="title">{{item.title}}</p>
          <p class="price mui-clearfix">
            <span>¥{{item.sell_price}}
              <s>¥{{item.market_price}}</s>
            </span>
            <br>
            <span class="mui-pull-left">热卖中</span>
            <span class="mui-pull-right">剩{{item.stock_quantity}}件</span>
          </p>
        </router-link>
      </li>

    </ul>
    <!-- 加载更多 -->
    <mt-button type="danger" size="large" plain @click="getMoreGoods">加载更多</mt-button>

  </div>
</template>
<script>
  import {
    getGoodLists,
    
  } from '../api'
  export default {
    data() {
      return {
        pageSize: 1,
        goodLists: []
      }
    },
    created() {
      this.initGoodList()

    },
    methods: {
      //获取商品数据
      initGoodList() {
        getGoodLists(this.pageSize).then(res => {
          if (res.status === 0) {
            this.goodLists = this.goodLists.concat(res.message)
          }
        })
      },
      //点击加载更多商品
      getMoreGoods() {
        this.pageSize++;
        this.initGoodList()
      }

    }


  }

</script>
<style lang="scss" scoped>
  .newList {
    .mint-button {
      width: 90%;
      margin: 0 auto;
    }
    ul {
      list-style: none;
      padding: 0 5px;
      li {
        width: 50%;
        float: left;
        padding: 0px 5px;
        margin: 5px 0;
        a {
          display: block;
          border: 1px solid #ccc;
          width: 100%;
          text-align: center;

          box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
          img {
            width: 100%;
            border: 0;
          }
          p {
            font-size: 13px;
            color: black;
            font-weight: 700;
          }
          .title {
            min-height: 74px;
          }
          .price {
            color: #aaa;
            background-color: #eee;
            margin: 0;
            line-height: 35px;
            span {
              padding: 2px;
              &:first-of-type {
                color: red
              }
            }
            s {
              margin-left: 20px;
              color: #aaa;
            }

          }
        }
      }
    }

  }

</style>
