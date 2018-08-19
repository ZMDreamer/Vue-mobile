<template>
  <div class="newList">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newLists " :key="item.id">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h5>{{item.title}}</h5>
            <span class="mui-pull-left">发表时间:{{item.add_time |formatTime}}</span>
            <span class="mui-pull-right">点击:{{item.click}}次</span>

          </div>
        </a>
      </li>

    </ul>
  </div>
</template>
<script>
  import {
    getNewList
  } from '../api'
  export default {
    data() {
      return {
        newLists: [],
      }
    },
    created() {
      getNewList().then(res => {
        console.log(res)
        if (res.status === 0) {
          this.newLists = res.message
        }
      })
    },
    //过滤转换时间格式
    filters: {
      formatTime(time) {
        time = new Date(time)
        var year = time.getFullYear()
        var month = time.getMonth() + 1
        var day = time.getDate()
        month = month > 10 ? month : '0' + month
        day = day > 10 ? day : '0' + day
        return year + '-' + month + '-' + day
      }
    }

  }

</script>
<style lang="scss" scoped>
  .newList {
    .mui-media-body {
      h5 {
        font-weight: bold;
        font-size: 14px;
        color: black;
      }
      span {
        font-size: 12px;
        color: #0378f4;
      }
    }
  }

</style>
