<template>
  <div>
    <div class="px-24">
      <Button @click="logout" buttonStyle="failure">Logout</Button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Button from "@/components/UI/Button.vue";
export default {
    components: {
        Button,
    },
  name: "logout",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>


<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>