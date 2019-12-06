<!-- 返回顶部 -->
<template>
    <div class="goTop" @click="goTop" v-show="show">
      <div class="goTopInn"></div>
    </div>
  </template>

<script>
    import scroll from "@/js/scroll.js";
    import $ from "jquery";
    export default {
        data() {
            return {
                show: false,
            }
        },
        mounted() {
            window.addEventListener('scroll', scroll.throttle(this.handleScroll, 200), false)
        },
        destroyed() {
            window.removeEventListener('scroll', scroll.throttle(this.handleScroll, 200))
        },
        methods: {
            handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                console.log(scrollTop)
                if (scrollTop > 800) {
                    this.show = true
                } else {
                    this.show = false
                }
            },
            goTop: function() {
                $('html,body').animate({
                    scrollTop: 0
                }, 400)
            },
        },
    }
</script>
<style scoped>
    .goTop {
        position: fixed;
        bottom: 66px;
        right: 1rem;
        font-size: 1rem;
        color: #8b91a3;
        z-index: 2;
    }
    
    .goTop .goTopInn {
        width: 3rem;
        text-align: center;
        padding-top: 3.2rem;
        background: url(../../static/img/top.png) no-repeat 50% 0;
        background-size: 2.8rem 2.8rem;
        text-indent: -99999px;
    }
</style>