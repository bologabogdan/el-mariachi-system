<template>
  <div>
    <Title
      :title="recipe.name"
      :infoText="'Here are the instructions for making ' + recipe.name"
    ></Title>
     <div class="flex px-8 text-sm w-full justify-end">
      <Button buttonStyle="success" class="mr-1 w-1/5">Edit</Button>
      <Button buttonStyle="success" class="mr-1 w-1/5">Delete</Button>
    </div>
    <div class="px-8 pt-4 py-1 ">
        <h1 class="">{{recipe.description}}</h1>
    </div>
    <Navigation></Navigation>
  </div>
</template>

<script>
import Title from "@/components/UI/Title.vue";
import Button from "@/components/UI/Button.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "RecipeOverview",
  components: {
    Title,
    Button,
    Navigation
  },
  props: {
    recipe: {
      type: Object
    }
  }
};
</script>

<style></style>
