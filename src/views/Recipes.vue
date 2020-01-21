<template>
  <div>
   <Title title="Recipes" infoText="New in the kitchen? Here you can find all the recipes and a guide on how to prepare them."></Title>
    <Navigation></Navigation>
    <div class="w-full">
        {{ getRecipes }}
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/UI/Title.vue";

export default {
  name: "recipes",
  components: {
    Navigation,
    Title
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
    addRecipes() {
      this.$store.dispatch("addRecipe", {
        id: this.idForTodo,
        name: this.newName,
        description: this.newDescription
      });

      this.newName = "";
      (this.newDescription = []), this.idForTodo++;
    }
  }
};
</script>

<style scoped></style>
