<template>
  <div class="cart">
    <!-- 商品列表部分 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner mui-clearfix">
          <img src="../assets/menu1.png" alt="">
          <mt-switch v-model="flag"></mt-switch>
          <div class="top">
            <h4> 苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）</h4>
            <p>¥2222</p>
            <numberbox></numberbox>
            &nbsp;
            <span> 删除</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算部分 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner mui-clearfix totalMoney">
          <h5>总计(不含运费)</h5>
          <p>已勾选的商品
            <span>1</span>件, 总价</p>
          <span>¥3333</span>
          <mt-button type="danger" size="normal" >去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import numberbox from '../numberBox/NumberBox'
  export default {
    data() {
      return {
        flag: false

      }
    },





    //引入组件添加商品组件
    components: {
      numberbox
    }
  }

</script>
<style lang="scss" scoped>
  .cart {
    .mui-card-content-inner {
      img {
        width: 25%;
        float: left;
        margin-left: 15%;
      }
      .mint-switch {
        position: absolute;
        left: 5px;
        top: 35px;
      }
      .top {
        float: right;
        width: 60%;

        h4 {
          font-size: 14px;
        }
        p {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        span {
          color: #007aff;
        }
      }

    }
    .totalMoney {
      span {
        color: red;
        font-weight: bold;
        font-size: 18px;

      }
      p {
        margin: 10px 0;
      }
      .mint-button {
        position: absolute;
        left: 65%;
        top: 40%;
      }
    }
  }

</style>
