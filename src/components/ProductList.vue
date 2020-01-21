<template>
  <div>
    <div class="w-full flex px-8 pb-4 pt-8 font-bold">
      <div class="w-2/5">
        <h1>Name</h1>
      </div>
      <div class="w-2/5">
        <h1>Quantity</h1>
      </div>
      <div class="w-1/5">
        <h1>Actions</h1>
      </div>
    </div>
    <Product v-for="(product, key) in products" :key="key" :product="product"></Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
export default {
  name: "productList",
  components: {
    Product
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  props: {
    products: {
      type: Array
    }
  }
};
</script>

<style scoped></style>
