<template>
  <div
    class="p-4 bg w-full rounded-full flex  text-white font-bold justify-between"
    @click="goRecipeOverview"
  >
    {{ recipe.name }}

    <div class="items-center my-auto">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="angle-right"
        class="svg-inline--fa fa-angle-right w-4 h-4"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
      >
        <path
          fill="currentColor"
          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
//  :to="{ name: 'Recipe', params: recipe }"
export default {
  name: "Recipe",
  data() {
    return {
    };
  },
  props: {
    recipe: {
      type: Object
    }
  },
  methods: {
    goRecipeOverview() {
      this.$router.push({
        name: "recipe",
        params: { recipe: this.recipe }
      });
    }
  }
};
</script>

<style></style>
