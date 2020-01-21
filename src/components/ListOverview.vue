<template>
  <div>
    {{ list.name }}
  </div>
</template>

<script>
export default {
  name: "RecipeOverview",
  props: {
    list: {
      type: Object
    }
  }
};
</script>

<style></style>
