<template>
  <div class="mui-numbox">
    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="descNumber" disabled ref="btn">-</button>
    <input class="mui-input-numbox" type="number" v-model="this.number">
    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="addNumber">+</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        number: 1
      }
    },
    methods: {
      //增加商品数量
      addNumber() {
        this.number++;
        if (this.number > 1) {
          this.$refs.btn.removeAttribute('disabled')
        }

      },
      //减少商品数量
      descNumber() {
        this.number--;
        if (this.number == 1) {
          this.$refs.btn.setAttribute('disabled', 'disabled')
        }
      }

    },
    watch: { //像父元素传递数量的数据 
      number: function(val, oldVal) {
        this.$emit('getAddNum', val)
      }
    }
  }
</script>
<style lang="scss" scoped>


</style>
