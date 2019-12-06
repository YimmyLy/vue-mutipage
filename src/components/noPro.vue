<template>
    <!-- 暂无数据 -->
    <div class="loadMore txtCenter marB10 fs4 padBoth">
        <img class="emptyIcon marT45"
            src="https://jinke-static.oss-cn-hangzhou.aliyuncs.com/kinkr-h5/staticImg/kong.png">
        <p class="padT20 fs8 color8c marB5 txtCenter">
            <slot></slot>
        </p>
        <p class="fs7 color8c txtCenter">（已下架、已删除或审核失败）</p>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .emptyIcon {
        width: 45%;
    }
</style>