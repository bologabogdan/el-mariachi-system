<template>
  <div class="login pb-64 bg">
    <div class="mx-24 pt-32">
      <img src="../assets/logo.png" class="" alt />
    </div>
    <h3 class="pt-16 text-3xl font-bold text-white">Login</h3>

    <div class="px-8 pt-8">
      <input
        class="p-4 px-8 rounded-full bg-gray-100 w-full"
        type="text"
        id="email"
        v-model="email"
        placeholder="Email"
      />
    </div>

    <div class="px-8 pt-2">
      <input
        class="w-full p-4 px-8 bg-gray-100 rounded-full"
        type="password"
        id="password"
        v-model="password"
        placeholder="Password"
      />
    </div>

    <div class="px-8 pt-4">
      <button
        class="bg-orange-400 p-4 mb-4 w-full text-white font-bold rounded-full"
        @click="login"
      >
        Login
      </button>
      <router-link class="text-gray-300" to="/register"
        >Create an account</router-link
      >
    </div>

    <div role="alert" v-if="error" class="p-8 text-red-500">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert(`You are logged in as ${user.user.email}`);
          this.$router.go({ path: this.$router.path });
        })
        .catch(err => {
          this.error = err.message;
        });
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
.bg {
  background-color: #1ea896;
}
</style>
