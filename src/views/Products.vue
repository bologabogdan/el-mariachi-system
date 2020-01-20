<template>
  <div>
   <Title title="Products" infoText="Here you can have an overview of all available products from the kitchen. Also, you can add, edit or delete them."></Title>
    <Navigation></Navigation>
    <div class="w-full">
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/UI/Title.vue"
export default {
  name: "products",
  components: {
    Navigation,
    Title
  }
};
</script>

<style scoped>

</style>