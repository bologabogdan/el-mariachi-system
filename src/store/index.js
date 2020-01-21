import Vue from "vue";
import Vuex from "vuex";
import db from "../firebase";
import products from "./products";
import recipes from "./recipes";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    recipes
  },
  state: {
    loading: true,
    filter: "all",
    lists: []
  },
  getters: {
    lists(state) {
      return state.lists;
    }
  },
  mutations: {
    addList(state, list) {
      state.lists.push({
        name: list.name,
      });
    },
    updateList(state, list) {
      const index = state.lists.findIndex(item => item.id == list.id);
      state.lists.splice(index, 1, {
        name: list.name,
      });
    },
    deleteList(state, id) {
      const index = state.lists.findIndex(item => item.id == id);

      if (index >= 0) {
        state.lists.splice(index, 1);
      }
    },

    retrieveLists(state, lists) {
      state.lists = lists;
    },
    updateLoading(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    initRealtimeListeners(context) {
      db.collection("lists").onSnapshot(snapshot => {
        // @ts-ignore
        snapshot.docChanges().map(change => {
          if (change.type === "added") {
            const source = change.doc.metadata.hasPendingWrites
              ? "Local"
              : "Server";

            if (source === "Server") {
              context.commit("addList", {
                id: change.doc.id,
                name: change.doc.data().name,
                items: change.doc.data().items
              });
            }
          }
          if (change.type === "modified") {
            context.commit("updateList", {
              id: change.doc.id,
              name: change.doc.data().name,
              items: change.doc.data().items
            });
          }
          if (change.type === "removed") {
            context.commit("deleteList", change.doc.id);
          }
        });
      });
    },
    retrieveLists(context) {
      context.commit("updateLoading", true);
      db.collection("lists")
        .get()
        .then(querySnapshot => {
          let tempLists = [];
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              name: doc.data().name,
              items: doc.data().items
            };

            tempLists.push(data);
          });

          context.commit("retrieveLists", tempLists);
        });
    },
    addList(context, list) {
      db.collection("lists")
        .add({
          name: list.name,
        })
        .then(() => {
          context.commit("addList", {
            name: list.name,
          });
        });
    },
    updateList(context, list) {
      db.collection("lists")
        .doc(list.id)
        .set(
          {
            // id: list.id,
            name: list.name,
            // timestamp: todo.timestamp,
          },
          { merge: true }
        )
        .then(() => {
          context.commit("updateList", list);
        });
    },
    deleteList(context, id) {
      db.collection("lists")
        .doc(id)
        .delete()
        .then(() => {
          context.commit("deleteList", id);
        });
    }
  }
});
