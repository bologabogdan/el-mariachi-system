<template>
  <div class="login pb-64 bg">

<div class="mx-24 pt-32">
       <img src="../assets/logo.png" class="" alt />
    
    </div>
    <h3 class="pt-16 text-3xl font-bold text-white">Login</h3>

    <div class="px-8 pt-8">
      <input class="p-4 px-8 rounded-full bg-gray-100 w-full" type="text" id="email" v-model="email" placeholder="Email" />
    </div>

    <div class="px-8 pt-2">
      <input class="w-full p-4 px-8 bg-gray-100 rounded-full" type="password" id="password" v-model="password" placeholder="Password"/>
    </div>

<div class="px-8 pt-4">
  <Button @click="login" buttonStyle="failure" class="mb-4">Login</Button><br>
    <router-link class="text-gray-100 opacity-50" to="/register">Create an account</router-link>
  </div>

  <div role="alert" v-if="error" class="p-8 error-text">
    <p>{{error}}</p>
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
  name: "login",
  data: function() {
    return {
      email: "",
      password: "",
      error: "",
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
          })
        .catch(err => {
        this.error = err.message;
      });
      e.preventDefault();
    }
  },
};
</script>


<style scoped>
  
  .bg {
    background-color: #1EA896;
    text-align: center;
  }

  
  .error-text {
    color: #ff715b;
  }
</style>