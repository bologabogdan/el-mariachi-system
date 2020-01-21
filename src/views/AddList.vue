<template>

<div>

    <Title
      title="Add list"
      infoText="Here you can add new lists into the application."
    ></Title>

    <div class="px-8 pt-8">
      <input
        class="p-4 px-8 rounded-full w-full bg-gray-100 shadow"
        type="text"
        id="name"
        placeholder="List name"
      />
    </div>

    <div class="px-8 pt-2">
    <Button buttonStyle="success" class="text-sm">Add new list</Button>
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