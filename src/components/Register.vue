<template>
  <div class="register">
    <div>
      <input type="text" id="email" v-model="email" />
      <label for="email">Email</label>
    </div>

    <div>
      <input type="password" id="password" v-model="password" />
      <label for="password">Password</label>
    </div>

    <button @click="register">Register</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "register",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`Account created for ${user.user.email}`);
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
