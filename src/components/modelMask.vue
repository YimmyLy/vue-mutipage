<template>
  <div v-if='flag' class="maskWrap">
      <div class="maskBgWrap" @click="cancel"></div>
      <div class="maskConetnt flexCenter">
        <div class="maskInner">
          <!-- <img class="closeIcon" src="@/assets/img/close1.png" alt=""> -->
          <div class="maskMsg padBoth padT10">
            <p class="maskTxt">
              <slot name="tipMsg"></slot>
            </p>
            <div class="modelBtn flexWrap flexFlow alignItem txtCenter fs5">
              <div class="colorA1" @click.prevent = "cancel">取消</div>
              <div class="color48" @click.prevent="submit">确定</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
    export default {
        props: {
            showFlag: Boolean,
        },
        data() {
            return {}
        },
        computed: {
            flag() {
                return this.showFlag
            }
        },
        methods: {
            // 取消
            cancel() {
                this.$emit('cancelHandle')
            },
            // 确定
            submit() {
                this.$emit('submitHandle')
            },
        },
    }
</script>
<style scoped>
    .maskWrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        z-index: 1000;
    }
    
    .maskWrap .maskBgWrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);
    }
    
    .maskWrap .maskConetnt {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1001;
    }
    
    .maskWrap .maskConetnt .maskInner {
        position: relative;
        width: 18rem;
        /* height: 10rem; */
        border-radius: 6px;
        background: #fff;
    }
    
    .maskInner .closeIcon {
        position: absolute;
        right: -8px;
        top: -14px;
        width: 22px;
        height: 22px;
    }
    
    .maskInner .maskTxt {
        padding: 1rem 0 1.5rem 0;
        font-size: 1.25rem;
        text-align: center;
        border-bottom: 1px solid #F4F8FC;
    }
    
    .modelBtn>div {
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
</style>