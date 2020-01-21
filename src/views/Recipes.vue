<template>
  <div>
    <Title
      title="Recipes"
      infoText="New in the kitchen? Here you can find all the recipes and a guide on how to prepare them."
    ></Title>
    <div class="flex px-8 text-sm w-full justify-end">
      <router-link to="/add-recipe" class=" w-1/5">
        <Button buttonStyle="success" class="mr-1 w-full"
          >Add</Button
        ></router-link
      >
    </div>
    <div class="w-full pt-8">
      <RecipesList :recipes="getRecipes"></RecipesList>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/UI/Title.vue";
import RecipesList from "@/components/RecipesList.vue";
import Button from "@/components/UI/Button.vue";

export default {
  name: "recipes",
  components: {
    Navigation,
    Title,
    RecipesList,
    Button
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("initRealtimeListeners");
    this.$store.dispatch("retrieveRecipes");
  },
  computed: {
    getRecipes() {
      // eslint-disable-next-line
      console.log(this.$store.getters.recipes);
      return this.$store.getters.recipes;
    }
  },
  methods: {
  }
};
</script>

<style scoped></style>
