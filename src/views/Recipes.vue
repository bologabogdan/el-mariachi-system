<template>
  <div>
   <Title title="Recipes" infoText="New in the kitchen? Here you can find all the recipes and a guide on how to prepare them."></Title>
    <Navigation></Navigation>
    <div class="w-full">
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/UI/Title.vue"
export default {
  name: "recipes",
  components: {
    Navigation,
    Title
  }
};
</script>

<style scoped>

</style>