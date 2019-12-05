<template>
  <div class="login">
    <div class="px-8 pt-8">
      <input class="p-4 rounded bg-orange-200 w-full" type="text" id="email" v-model="email" placeholder="Email" />
    </div>

    <div class="px-8 pt-2">
      <input class="w-full p-4 rounded bg-orange-200" type="password" id="password" v-model="password" placeholder="Password"/>
    </div>

<div class="px-8 pt-2">
    <button class="bg-orange-400 p-4 w-full text-white font-bold rounded" @click="login">Login</button>
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
      password: ""
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You are logged in as ${user.user.email}`);
            this.$router.go({path: this.$router.path});
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>