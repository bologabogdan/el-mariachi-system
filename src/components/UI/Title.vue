<template>
<div>   
   <div class="text-3xl font-bold text-left p-8 pb-2">{{ title }}</div>
    <div class="mx-8 w-16 h-2 bg-color"></div>
    <div><p class="px-8 pt-2 pb-8 text-xs opacity-50">{{ infoText }}</p></div>
</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '', 
        },

        infoText: {
            type: String,
            default: '',
        },
    }
}
</script>

<style>
 .bg-color {
   background-color: #1EA896;
 }
</style>