<template>
  <div>
    <Title
      title="Add list"
      infoText="Here you can add new lists into the application."
    ></Title>

    <div class="px-8 pt-8">
      <input
        class="p-4 px-8 rounded-full w-full bg-gray-100 shadow"
        type="text"
        v-model="name"
        id="name"
        placeholder="List name"
      />
    </div>

    <div class="px-8 pt-4">
      <Button buttonStyle="success" class="w-full" @click="addList">Add new list</Button>
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
      name: ""
    };
  },
  methods: {
    addList() {
      this.$store
        .dispatch("addList", {
          name: this.name
        })
        .then(() => {
          this.$router.push({ path: "/lists" });
        });
    }
  }
};
</script>

<style></style>
