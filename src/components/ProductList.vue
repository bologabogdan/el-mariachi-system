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
    <div
      class="w-full flex px-8 pb-2"
      v-for="(product, index) in products"
      :key="index"
    >
      <div class="w-2/5 flex">
        <h1 class="py-1">{{ product.name }}</h1>
      </div>
      <div class="w-2/5 flex">
        <button
          class="button px-2 rounded-full font-bold failure text-xs"
          @click="holdQuantity(increment, product.quantity)"
        >
          -
        </button>
        <h1 class="px-2 py-1">{{ product.quantity }}</h1>
        <button
          class="button px-2 rounded-full font-bold success text-xs"
          @click="increment"
        >
          +
        </button>
      </div>
      <div class="w-1/5">
        <h1 class="py-1">actions</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productList",
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    
  },
  props: {
    products: {
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
</style>
