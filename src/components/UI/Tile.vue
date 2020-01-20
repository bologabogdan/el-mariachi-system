<template>
  <div class="w-full flex flex-wrap px-4 text-white font-bold mx-auto">
    <div v-for="(tile, index) in tiles" :key="index" class="w-4/12 m-4 text-center">
    <div class="w-full p-4 bg mr-4 rounded-lg">
      <img :src="tile.icon" class="w-6 h-6 block mx-auto mb-4" />
      <p>{{ tile.name }}</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const pepper = require("../../assets/pepper-hot-solid.svg");
        const list = require("../../assets/list-ul-solid.svg");
            const book = require("../../assets/book-open-solid.svg");
    return {
      tiles: [
        { name: "Products", icon: pepper },
        { name: "Lists", icon: list },
        { name: "Recipes", icon: book },
      
      ]
    };
  }
};
</script>

<style scoped>
  .bg {
    background-color: #ff715b;
  }

</style>
