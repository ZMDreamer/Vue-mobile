<template>
  <div class="newDetail">
    <!-- 页面头部新闻 -->
    <div class="header mui-clearfix">
      <h4>{{newsDetail.title}}</h4>
      <span class="mui-pull-left">发表时间:{{newsDetail.add_time | formatTime}}</span>
      <span class="mui-pull-right">点击:{{newsDetail.click}}次</span>
    </div>
    <!-- 文章具体内容 -->
    <div class="content" v-html="newsDetail.content">
    </div>
    <!-- 评论模块 -->
    <comment :rid = '$route.query.newId'></comment>
    
  </div>
</template>
<script>
import comment from '../subcomments/Comment'
  import {
    getNewsDetail
  } from '../api'
  export default {
    data() {
      return {
        newsDetail: {}
      }
    },
    created() {
      let newId = this.$route.query.newId
      getNewsDetail(newId).then(res => {
        if (res.status === 0) {
          this.newsDetail = res.message[0]
        }
      })
    },
    //过滤转换时间格式 
    filters: {
      formatTime(time) {
        time = new Date(time)
        var year = time.getFullYear()
        var month = time.getMonth() +
          1
        var day = time.getDate()
        month = month > 10 ? month : '0' + month
        day = day > 10 ? day : '0' + day
        return year + '-' +
          month + '-' + day
      }
    }
    ,
    //注册评论子组件
    components:{comment}
  }

</script>
<style lang="scss" scoped>
  .newDetail {
    list-style: none;
    .header {
      padding: 15px 5px;
      text-align: center;
      border-bottom: 1px solid #ccc;
      h4 {
        color: red;
        font-size: 16px;
      }
      span {
        font-size: 14px;
        color: #0378f4;
      }
    }
    .content {
      padding: 10px 5px;
    }
    
  }

</style>
