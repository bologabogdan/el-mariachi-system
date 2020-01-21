<template>
  <div>
    {{recipe.name}}
  </div>
</template>

<script>
export default {
  name: "RecipeOverview",
  props: {
    recipe: {
      type: Object
    }
  }
};
</script>

<style></style>
