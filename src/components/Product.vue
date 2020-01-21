<template>
  <div class="pb-2">
    <div class="w-full flex justify-center pb-4">
      <label
        v-if="isEditable"
        class="px-2 mb-1 border solid failure rounded text-white"
        >You can edit the name</label
      >
    </div>
    <div class="w-full flex px-8 pb-2">
      <div class="w-2/5 flex">
        <input
          class="py-1"
          type="text"
          :readonly="!isEditable"
          v-model="newName"
        />
      </div>
      <div class="w-2/5 flex">
        <button
          class="button px-2 rounded-full font-bold failure text-xs"
          @click="decrement(product)"
        >
          -
        </button>
        <h1 class="px-2 py-1">{{ quantity }}</h1>
        <button
          class="button px-2 rounded-full font-bold success text-xs"
          @click="increment(product)"
        >
          +
        </button>
      </div>
      <div class="w-1/5 flex justify-between">
        <img
          src="@/assets/pen-solid.svg"
          alt=""
          class="w-4 h-4 mt-1 ml-2 edit"
          @click="makeEditable(product)"
        />
        <img
          src="@/assets/times-solid.svg"
          alt=""
          class="w-6 h-6 mr-2 delete"
          @click="deleteProduct(product.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object
    }
  },
  data() {
    return {
      id: this.product.id,
      quantity: this.product.quantity,
      name: this.product.name,
      isEditable: false,
      newName: this.product.name
    };
  },
  methods: {
    increment(p) {
      this.$store
        .dispatch("increment", {
          id: p.id,
          quantity: this.quantity++
        })
        .then(() => {
          this.$store.dispatch("retrieveProducts");
        });
    },
    decrement(p) {
      this.$store
        .dispatch("decrement", {
          id: p.id,
          quantity: this.quantity--
        })
        .then(() => {
          this.$store.dispatch("retrieveProducts");
        });
    },
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
    },
    makeEditable(p) {
      if (this.isEditable == true) {
        this.$store
          .dispatch("updateProduct", {
            id: p.id,
            name: this.newName,
            quantity: p.quantity
          })
          .then(() => {
            this.$store.dispatch("retrieveProducts");
            return p;
          });
      }
      this.isEditable = !this.isEditable;
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
.edit {
  filter: invert(55%) sepia(56%) saturate(568%) hue-rotate(123deg)
    brightness(88%) contrast(88%);
}
.delete {
  filter: invert(64%) sepia(48%) saturate(3568%) hue-rotate(322deg)
    brightness(99%) contrast(103%);
}
</style>
