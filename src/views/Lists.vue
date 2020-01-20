<template>
  <div>
   <Title title="Lists" infoText="Here are the lists. Make a new list or browse the existing ones. Remember to check them everyday."></Title>
    <Navigation></Navigation>
    <div class="w-full">
    <p>{{getLists}}</p>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/UI/Title.vue"
export default {
  name: "lists",
  components: {
    Navigation,
    Title
  },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('initRealtimeListeners')
    this.$store.dispatch('retrieveLists')
  },
  computed: {
    getLists() {
      // eslint-disable-next-line
      console.log(this.$store.getters.lists)
      return this.$store.getters.lists;
    }
  },
  methods: {
    addList() {
      this.$store.dispatch('addList', {
        id: this.idForTodo,
        name: this.newName,
        items: this.newItems
      })

      this.newName = ''
      this.newItems = [],
      this.idForTodo++
    }
  }
};
</script>

<style scoped>

</style>