<template>
  <div class="comment">
    <h4>发表评论</h4>
    <hr>
    <textarea placeholder="请输入吐槽类容(最多120字)" maxlength="120" v-model="addComment"></textarea>
    <mt-button type="primary" size="large" @click="submitData">发表评论</mt-button>
    <div class="cmt-content" v-for="(item,index) in commentList" :key="item.id">
      <div class="cmt-title">
        第{{index+1}}楼&nbsp;&nbsp; 用户：{{item.user_name}} &nbsp;&nbsp;发表时间： {{item.add_time|formatTime}}
      </div>
      <div class="cmt-message">
        {{item.content}}
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMoreComment">加载更多</mt-button>
  </div>
</template>
<script>
  import {
    getNewsComments,
    submitComment
  } from '../api'
  export default {
    data() {
      return {
        pageindex: 1,
        commentList: [],
        addComment: ''
      }
    },
    created() {
      this.getComments()
    },
    methods: {
      getComments(status) {
        getNewsComments({
          artid: this.rid,
          pageindex: this.pageindex
        }).then(res => {
          if (res.status === 0) {
            if (status === 0) {
              this.commentList = res.message
            } else {
              this.commentList = this.commentList.concat(res.message)
            }

          }
        })
      },
      //获取更多数据
      getMoreComment() {
        this.pageindex++
          this.getComments()
      },
      //提交评论
      submitData() {
        submitComment({
          artid: this.rid,
          content: this.addComment.trim()
        }).then(res => {
          if (res.status === 0) {
            this.getComments(res.status)
             this.addComment = ""
          }
        })
      }
    },
    props: ['rid'],
    //过滤转换时间格式 
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
  .comment {
    padding: 0 5px;
    h4 {
      font-size: 18px;
    }
    textarea {
      font-size: 14px;
      margin: 0;
    }
    .cmt-content {
      margin: 5px 0;
      font-size: 13px;
      .cmt-title {
        background-color: #ccc;
        line-height: 30px;
      }
      .cmt-message {
        line-height: 35px;
      }
    }
  }

</style>
