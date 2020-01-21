<template>
  <div>
    <Title
      title="Lists"
      infoText="Here are the lists. Make a new list or browse the existing ones. Remember to check them everyday."
    ></Title>

    <div class="flex px-8 text-sm w-full justify-end">
      <router-link to="/add-list" class="w-1/5">
        <Button buttonStyle="success" class="mr-1 w-full">Add</Button>
      </router-link>
    </div>
    <div class="w-full pt-8">
      <ListItems :lists="getLists"></ListItems>
    </div>
    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/UI/Title.vue";
import ListItems from "@/components/ListItems.vue";
import Button from "@/components/UI/Button.vue";
export default {
  name: "lists",
  components: {
    Navigation,
    Title,
    ListItems,
    Button
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("initRealtimeListeners");
    this.$store.dispatch("retrieveLists");
  },
  computed: {
    getLists() {
      // eslint-disable-next-line
      console.log(this.$store.getters.lists);
      return this.$store.getters.lists;
    }
  },
  methods: {
    addList() {
      this.$store.dispatch("addList", {
        id: this.idForTodo,
        name: this.newName,
        items: this.newItems
      });

      this.newName = "";
      (this.newItems = []), this.idForTodo++;
    }
  }
};
</script>

<style scoped></style>
