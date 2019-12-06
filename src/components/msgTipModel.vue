<template>
	<!-- 提示弹窗 -->
    <div class="errorTc"   :class="msgShowError ?'show':'hidden'">
        <div class="errorTcMsg txtCenter fs5 colorFF">
            <span>{{msgTip}}</span>
        </div>
    </div>
</template>
<script>
	export default{
		props:{
			msgShowError:{
				default:Boolean
			},
			msgTip:{
				default:String
			},
		},
		data(){
			return{

			}
		}
	}
</script>