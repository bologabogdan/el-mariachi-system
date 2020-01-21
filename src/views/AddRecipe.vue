<template>

<div>

    <Title
      title="Add recipe"
      infoText="Here you can add new recipes into the application."
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
      <textarea
        class="w-full p-4 px-8 rounded-lg bg-gray-100 shadow"
        type="text"
        id="category"
        rows="8" cols="50"
        placeholder="Add the description of the recipe"
      >
      </textarea>
    </div>

    <div class="px-8 pt-4">
    <Button buttonStyle="success" class="w-full">Add product</Button>
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