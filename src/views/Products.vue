<template>
  <div>
    <Title
      title="Products"
      infoText="Here you can have an overview of all available products from the kitchen. Also, you can add, edit or delete them."
    ></Title>
    <Navigation></Navigation>
    <div class="w-full">
      {{ getProducts}}
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/UI/Title.vue";

export default {
  name: "products",
  components: {
    Navigation,
    Title
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("initRealtimeListeners");
    this.$store.dispatch("retrieveProducts");
  },
  computed: {
    getProducts() {
      // eslint-disable-next-line
      console.log(this.$store.getters.products);
      return this.$store.getters.products;
    }
  },
  methods: {
    addProducts() {
      this.$store.dispatch("addProduct", {
        id: this.idForTodo,
        name: this.newName,
        quantity: this.newQuantity
      });

      this.newName = "";
      (this.newQuantity = []), this.idForTodo++;
    }
  }
};
</script>

<style scoped></style>
