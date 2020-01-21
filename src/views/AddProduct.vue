<template>

<div>

    <Title
      title="Add product"
      infoText="Here you can add new products into the application."
    ></Title>

    <div class="px-8 pt-8">
      <input
        class="p-4 px-8 rounded-full w-full bg-gray-100 shadow"
        type="text"
        id="name"
        placeholder="Name"
      />
    </div>

    <div class="px-8 pt-2">
      <input
        class="w-full p-4 px-8 rounded-full bg-gray-100 shadow"
        type="number"
        id="quantity"
        placeholder="Quantity"
      />
    </div>


    <div class="px-8 pt-2">
      <input
        class="w-full p-4 px-8 rounded-full bg-gray-100 shadow"
        type="text"
        id="category"
        placeholder="Category"
      />
    </div>

    <div class="px-8 pt-2">
    <Button buttonStyle="success" class="text-sm" @click="addProducts">Add product</Button>
    </div>
    <Navigation></Navigation>
</div>
</template>

<script>

import Navigation from "@/components/Navigation.vue";
import Title from "@/components/UI/Title.vue";
import Button from "@/components/UI/Button.vue";

export default {
  name: "add-product",
  components: {
    Navigation,
    Title,
    Button,
  },
}
</script>

<style>

</style>