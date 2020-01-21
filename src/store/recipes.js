import Vue from "vue";
import Vuex from "vuex";
import db from "../firebase";

Vue.use(Vuex);

let recipes = {
  state: {
    recipes: []
  },
  getters: {
    recipes(state) {
      return state.recipes;
    }
  },
  mutations: {
    addRecipe(state, recipe) {
      state.recipes.push({
        id: recipe.id,
        name: recipe.name,
        description: recipe.description
      });
    },
    updateRecipe(state, recipe) {
      const index = state.recipes.findIndex(item => item.id == recipe.id);
      state.recipes.splice(index, 1, {
        id: recipe.id,
        name: recipe.name,
        description: recipe.description
      });
    },
    deleteRecipe(state, id) {
      const index = state.recipes.findIndex(item => item.id == id);

      if (index >= 0) {
        state.recipes.splice(index, 1);
      }
    },

    retrieveRecipes(state, recipes) {
      state.recipes = recipes;
    }
  },
  actions: {
    initRealtimeListeners(context) {
      db.collection("recipes").onSnapshot(snapshot => {
        // @ts-ignore
        snapshot.docChanges().map(change => {
          if (change.type === "added") {
            const source = change.doc.metadata.hasPendingWrites
              ? "Local"
              : "Server";

            if (source === "Server") {
              context.commit("addRecipe", {
                id: change.doc.id,
                name: change.doc.data().name,
                description: change.doc.data().description
              });
            }
          }
          if (change.type === "modified") {
            context.commit("updateRecipe", {
              id: change.doc.id,
              name: change.doc.data().name,
              description: change.doc.data().description
            });
          }
          if (change.type === "removed") {
            context.commit("deleteRecipe", change.doc.id);
          }
        });
      });
    },
    retrieveRecipes(context) {
      context.commit("updateLoading", true);
      db.collection("recipes")
        .get()
        .then(querySnapshot => {
          let tempRecipes = [];
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              name: doc.data().name,
              description: doc.data().description
            };

            tempRecipes.push(data);
          });

          context.commit("retrieveRecipes", tempRecipes);
        });
    },
    addRecipe(context, recipe) {
      db.collection("recipes")
        .add({
          name: recipe.title,
          description: recipe.description
        })
        .then(docRef => {
          context.commit("addRecipe", {
            id: docRef.id,
            name: recipe.name,
            description: recipe.description
          });
        });
    },
    updateRecipe(context, recipe) {
      db.collection("recipes")
        .doc(recipe.id)
        .set(
          {
            // id: list.id,
            name: recipe.title,
            description: recipe.description
            // timestamp: todo.timestamp,
          },
          { merge: true }
        )
        .then(() => {
          context.commit("updateRecipe", recipe);
        });
    },
    deleteRecipe(context, id) {
      db.collection("recipes")
        .doc(id)
        .delete()
        .then(() => {
          context.commit("deleteRecipe", id);
        });
    }
  }
};

export default recipes;
