<template>
  <div class="intrGood">
    <h4>{{goodDesc.title}}</h4>
    <hr>
    <div class="content" v-html="goodDesc.content">

    </div>
  </div>
</template>
<script>
  import {
    getGoodDescribe
  } from '../api'
  export default {
    data() {
      return {
        goodDesc: {}
      }
    },
    created() {
      getGoodDescribe(this.$route.params.id).then(res => {
        if (res.status === 0) {
          this.goodDesc = res.message[0]
        }
      })
    }

  }

</script>
<style lang="scss" scoped>
  .intrGood {
    padding: 0 5px;
    >h4 {
      text-align: center;
      font-size: 18px;
      color: dodgerblue;
      line-height: 30px;
    }
    .content {
        text-align: center;
    }
    .content /deep/ img {
      width: 100%;
    }
  }

</style>
