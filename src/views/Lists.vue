<template>
  <div>
   <Title title="Lists" infoText="Here are the lists. Make a new list or browse the existing ones. Remember to check them everyday."></Title>
    <Navigation></Navigation>
    <div class="w-full">
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/UI/Title.vue"
export default {
  name: "lists",
  components: {
    Navigation,
    Title
  }
};
</script>

<style scoped>

</style>