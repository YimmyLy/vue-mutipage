<template>
<!-- 暂无数据 -->
    <div class="loadMore txtCenter marB10 fs4 padBoth bgColor">
        <img class="emptyIcon marT45" src="@/assets/img/kong.png">
        <p class="padT20 marB5"><slot name="cont"></slot></p>
        <p class="padB20 color5f fs3">小编正在努力收集中...</p>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .emptyIcon {
        width: 50%;
    }
</style>