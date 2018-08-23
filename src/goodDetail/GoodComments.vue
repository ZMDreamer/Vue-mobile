<template>
    <div class="goodCmt">
        <goodcomment :rid="$route.params.id"></goodcomment>
    </div>
</template>
<script>
import goodcomment from '../subcomments/Comment'
export default {
    components: {
        goodcomment
    }
}
</script>
<style lang="scss" scoped>

</style>

