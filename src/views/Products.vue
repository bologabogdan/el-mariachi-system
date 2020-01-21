<template>
  <div>
    <Title
      title="Products"
      infoText="Here you can have an overview of all available products from the kitchen. Also, you can add, edit or delete them."
    >
    
    </Title>
    <div class="flex px-8 text-sm w-1/2">
    <Button buttonStyle="success" class="mr-2 w-full">Add</Button>
    <Button buttonStyle="edit" class="ml-2 w-full">Filter</Button>
    </div>
    <div class="w-full">
      <ProductList :products="getProducts" />
    </div>
    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/UI/Title.vue";
import Button from "@/components/UI/Button.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "products",
  components: {
    Navigation,
    Title,
    Button,
    ProductList
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
