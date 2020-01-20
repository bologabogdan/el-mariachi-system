<template>
  <div>
   <Title title="Profile" infoText="This is your profile overview. From here yu can log out from the application and find contact information of the staff."></Title>

   <Logout></Logout>
    <Navigation></Navigation>
    <div class="w-full">
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/UI/Title.vue";
import Logout from "@/components/Logout.vue";

export default {
  name: "profile",
  components: {
    Navigation,
    Title,
    Logout,
  }
};
</script>

<style scoped>

</style>