<template>
  <div class="w-full flex">
    <div v-for="(tile, index) in tiles" :key="index" class="w-1/2 p-8">
      <img :src="tile.icon" class="w-4 h-4" />
      <p>{{ tile.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const pepper = require("../../assets/pepper-hot-solid.svg");
    return {
      tiles: [
        { name: "Lists", icon: pepper },
        { name: "Recipes", icon: pepper },
        { name: "Products", icon: pepper }
      ]
    };
  }
};
</script>

<style></style>
