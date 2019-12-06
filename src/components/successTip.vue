<template>
  <!-- 成功 -->
  <div v-if="flag" class="operTip flexCenter">
      <div class="successTip colorFF fs6 flexCenter" :class="!!iconShow ?'':'cancelTip'">
          <div class="txtCenter">
              <img v-if="iconShow" class="okIcon" src="@/assets/img/ok.png" alt="">
              <slot name = 'textCont'></slot>
          </div>
      </div>
  </div>
</template>
<script>
    export default {
        props: {
            flag: Boolean,
            iconShow: Boolean,
        },
        data() {
            return {}
        },
    }
</script>
<style scoped>
    /* 收藏成功提示 */
    
    .operTip {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 103;
    }
    
    .successTip {
        min-width: 8rem;
        padding: 20px 0;
        background: rgba(0, 0, 0, 0.75);
        border-radius: .5rem;
    }
    
    .okIcon {
        display: block;
        width: 38%;
        margin: 0 auto 10px;
    }
    
    .cancelTip {
        padding: 10px;
    }
</style>