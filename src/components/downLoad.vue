<template>
	<div class="downWrap">
		<div class="downLoad flexWrap flexFlow alignItem justifyContentBt letter">
		    <div class="downCon flex flexWrap flexFlow alignItem">
		        <div class="downIcon marR10">
		            <img class="logoIcon" src="../assets/img/logo.png" alt="">
		        </div>
		        <div class="downTxt">
		            <H2 class="fs5 font-Medium marB2">汉麻工场</H2>
		            <p class="colorA1">洞察产业 传递价值</p>
		        </div>
		    </div>
		    <div class="downUrl fs5 flexCenter">
		        <a class="colorFF" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.jinke.hemp">立即打开</a>
		    </div>
		</div>
	</div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .downWrap {
        padding-bottom: 4.5rem;
        height: 0;
        width: 100%;
        overflow: hidden;
    }
    
    .downLoad {
        position: fixed;
        bottom: 0;
        width: 100%;
        left: 0;
        box-sizing: border-box;
        background: #fff;
        padding: .5rem 10px;
        z-index: 2;
        box-shadow: 0 -1px 2px 0 rgba(228, 228, 228, .5);
    }
    
    .downLoad .downCon .downIcon {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 4px;
        background: #eee;
        overflow: hidden;
    }
    
    .downLoad .downIcon .logoIcon {
        width: 100%;
    }
    
    .downLoad .downUrl {
        width: 8.5rem;
        height: 2.6rem;
        background: #28BD61;
        border-radius: 4px;
        color: #fff;
        display: -webkit-flex;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>