<template>
  <div>
    <Title
      :title="list.name"
      :infoText="'Here are the instructions for making ' + list.name"
    ></Title>
    <div class="flex px-8 text-sm w-full justify-end">
      <Button buttonStyle="success" class="mr-1 w-1/5">Edit</Button>
      <Button buttonStyle="success" class="mr-1 w-1/5">Delete</Button>
    </div>
    <div v-for="(item, key) in list.items" :key="key">
      <div class="w-full px-8 pt-4 py-1 flex">
        <input type="checkbox" class="w-6 h-6" />
        <p class="pl-4">{{item}}</p>
      </div>
    </div>
    <Navigation></Navigation>
  </div>
</template>

<script>
import Title from "@/components/UI/Title.vue";
import Button from "@/components/UI/Button.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "ListOverview",
  components: {
    Title,
    Button,
    Navigation
  },
  props: {
    list: {
      type: Object
    }
  }
};
</script>

<style></style>
