<template>
  <div>
    <Title
      title="Products"
      infoText="Here you can have an overview of all available products from the kitchen. Also, you can add, edit or delete them."
    >
    </Title>
    <div class="flex px-8 text-sm w-full justify-end">
      <router-link to="/add-product" class="w-1/5">
        <Button buttonStyle="success" class="mr-1 w-full">Add</Button>
      </router-link>
      <Button buttonStyle="edit" class="ml-1 w-1/5">Filter</Button>
    </div>
    <div class="w-full">
      <ProductList :products="getProducts" :update="updateProduct" />
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
    return {
      quantity: 0
    };
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
      this.$store
        .dispatch("addProduct", {
          id: this.idForTodo,
          name: this.newName,
          quantity: this.newQuantity
        })
        .then(() => {
          this.$store.dispatch("retrieveProducts");
        });

      this.newName = "";
      (this.newQuantity = []), this.idForTodo++;
    },
    updateProduct(p) {
      this.$store
        .dispatch("updateProducct", {
          id: p.id,
          quantity: p.quantity,
          name: p.name
        })
        .then(() => {
          this.$store.dispatch("retrieveProducts");
        });
    }
  }
};
</script>

<style scoped></style>
