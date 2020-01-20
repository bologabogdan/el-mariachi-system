<template>
  <div>
    <div class="text-3xl font-bold text-left p-8 pb-2">Dashboard</div>
    <div class="mx-8 w-16 h-2 bg-color"></div>
    <div><p class="px-8 pt-2 text-xs opacity-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies condimentum massa eget dignissim. Nulla vitae nisi sed libero sollicitudin bibendum venenatis id diam.</p></div>
    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  name: "home",
  components: {
    Navigation,
  }
};
</script>

<style scoped>
 .bg-color {
   background-color: #1EA896;
 }
</style>