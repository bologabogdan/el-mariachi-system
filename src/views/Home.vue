<template>
  <div>
    <Title
      title="Dashboard"
      infoText="On this page you can access the quick navigation for Products, Lists and Recipes."
    ></Title>

    <Title
      title="Low On Stock"
      infoText="Here you can check the products that are on low quantities and update them."
    ></Title>
    <Tile></Tile>
    <Navigation></Navigation>
    <div class="w-full"></div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/UI/Title.vue";
import Tile from "@/components/UI/Tile.vue";
export default {
  name: "home",
  components: {
    Navigation,
    Title,
    Tile
  }
};
</script>

<style scoped></style>
