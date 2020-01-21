<template>
  <div>
    <Title
      title="Add product"
      infoText="Here you can add new products into the application."
    ></Title>

    <div class="px-8 pt-8">
      <input
        class="p-4 px-8 rounded-full w-full bg-gray-100 shadow"
        type="text"
        v-model="name"
        id="name"
        placeholder="Name"
      />
    </div>

    <div class="px-8 pt-2">
      <input
        class="w-full p-4 px-8 rounded-full bg-gray-100 shadow"
        type="number"
        id="quantity"
        placeholder="Quantity"
        v-model="quantity"
      />
    </div>

    <div class="px-8 pt-2">
      <input
        class="w-full p-4 px-8 rounded-full bg-gray-100 shadow"
        type="text"
        id="category"
        placeholder="Category"
        v-model="category"
      />
    </div>

    <div class="px-8 pt-4">
      <Button buttonStyle="success" class="w-full" @click="addProduct"
        >Add product</Button
      >
    </div>
    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/UI/Title.vue";
import Button from "@/components/UI/Button.vue";

export default {
  name: "add-product",
  components: {
    Navigation,
    Title,
    Button
  },
  data() {
    return {
      name: "",
      quantity: 0,
      category: ""
    };
  },
  methods: {
    addProduct() {
      this.$store
        .dispatch("addProduct", {
          name: this.name,
          quantity: this.quantity,
          category: this.category
        })
        .then(() => {
          this.$router.push({ path: '/products' });
        });
    }
  }
};
</script>

<style></style>
