<template>
  <div class="w-full flex flex-wrap text-white font-bold px-8">
    <div v-for="(tile, index) in tiles" :key="index" class="w-1/2 text-center p-1">
      <div class="w-full bg rounded-lg">
        <div class="p-8 py-4 pt-6">
        <img :src="tile.icon" class="w-6 h-6 block mx-auto" />
        </div>
        <p class="p-8 pt-0 pb-1">{{ tile.name }}</p>
        <div class="p-4 mx-auto">
        <router-link :to="tile.pathAdd">
          <Button buttonStyle="primary" class="text-xs mb-2 text-center mr-1 w-2/5">Add</Button>
        </router-link>
        <router-link :to="tile.pathView">
          <Button buttonStyle="secondary" class="text-xs ml-1 w-2/5">View</Button>
        </router-link>  
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI/Button.vue";
export default {
  components: {
    Button
  },
  data() {
    const pepper = require("../../assets/pepper-hot-solid.svg");
    const list = require("../../assets/list-ul-solid.svg");
    const book = require("../../assets/book-open-solid.svg");

    return {
      tiles: [
        {
          name: "Products",
          icon: pepper,
          pathAdd: "/add-product",
          pathView: "/products"
        },
        { name: "Lists", icon: list, pathAdd: "/add-list", pathView: "/lists" },
        {
          name: "Recipes",
          icon: book,
          pathAdd: "/add-recipe",
          pathView: "/recipes",
        }
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
