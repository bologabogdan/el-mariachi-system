<template>
  <div class="w-full px-8">
    <Recipe
      class="px-8 mb-2 rounded-full"
      v-for="(recipe, index) in recipes"
      :key="index"
      :recipe="recipe"
    />
  </div>
</template>

<script>
import Recipe from "@/components/Recipe.vue";
export default {
  name: "list-items",
  components: {
    Recipe
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  props: {
    recipes: {
      type: Array
    }
  }
};
</script>

<style scoped>
.success {
  background-color: #1ea896;
  border: 1px solid #1ea896;
  color: white;
}

.failure {
  background-color: #ff715b;
  border: 1px solid #ff715b;
  color: white;
}

.bg {
  background-color: #1ea896;
}
</style>
