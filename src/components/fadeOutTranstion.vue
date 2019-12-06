<template>
  <transition>
  <slot></slot>
  </transition>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
    }
</script>
<style scoped>
    .v-enter,
    .v-leave-to {
        opacity: 1
    }
    
    .v-enter-active,
    .v-leave-active {
        transition: all .5s;
    }
</style>