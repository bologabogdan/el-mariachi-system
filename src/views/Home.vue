<template>
  <div class="bg">
    <Navigation></Navigation>
    <Button type="button">TEXT</Button>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Button from "@/components/UI/Button.vue";
export default {
  name: "home",
  components: {
    Navigation,
    Button
  }
};
</script>

