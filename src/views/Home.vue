<template>
  <div>
    <Title
      title="Dashboard"
      infoText="On this page you can access the quick navigation for Products, Lists and Recipes."
    ></Title>
    <Tile></Tile>
    <Title
      title="Low On Stock"
      infoText="Here you can check the products that are on low quantities and update them."
    ></Title>

        <div class="w-full flex px-8 pb-4 font-bold">
      <div class="w-2/3">
        <h1>Name</h1>
      </div>
      <div class="w-1/3">
        <h1>Quantity</h1>
      </div>
    </div>

    <Navigation></Navigation>
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
