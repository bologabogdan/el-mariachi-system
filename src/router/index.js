import Vue from "vue";
import firebase from "firebase";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Lists from "../views/Lists.vue";
import Products from "../views/Products.vue";
import Recipes from "../views/Recipes.vue";
import Profile from "../views/Profile.vue";
import AddProduct from "../views/AddProduct.vue";
import AddList from "../views/AddList.vue";
import AddRecipe from "../views/AddRecipe.vue";
import RecipeOverview from "../components/RecipeOverview.vue";
import ListOverview from "../components/ListOverview.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/products",
    name: "products",
    component: Products,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/lists",
    name: "lists",
    component: Lists,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/recipes",
    name: "recipes",
    component: Recipes,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/add-product",
    name: "add-product",
    component: AddProduct,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/add-list",
    name: "add-list",
    component: AddList,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/add-recipe",
    name: "add-recipe",
    component: AddRecipe,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/recipe-overview",
    name: "recipe",
    component: RecipeOverview,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/list-overview",
    name: "list",
    component: ListOverview,
    props: true,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser) {
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
