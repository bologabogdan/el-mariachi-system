import Vue from "vue";
import Vuex from "vuex";
import db from "../firebase";

Vue.use(Vuex);

let products = {
  state: {
    products: []
  },
  getters: {
    products(state) {
      return state.products;
    }
  },
  mutations: {
    addProduct(state, product) {
      state.products.push({
        name: product.name,
        quantity: product.quantity,
        category: product.category
      });
    },
    updateProduct(state, product) {
      const index = state.products.findIndex(item => item.id == product.id);
      state.products.splice(index, 1, {
        name: product.name,
        quantity: product.quantity,
      });
    },
    deleteProduct(state, id) {
      const index = state.products.findIndex(item => item.id == id);

      if (index >= 0) {
        state.products.splice(index, 1);
      }
    },

    retrieveProducts(state, products) {
      state.products = products;
    },
    increment(state, product) {
      const index = state.products.findIndex(item => item.id == product.id);
      state.products.splice(index, 1, {
        id: product.id,
        quantity: product.quantity
      });
    },
    decrement(state, product) {
      const index = state.products.findIndex(item => item.id == product.id);
      state.products.splice(index, 1, {
        id: product.id,
        quantity: product.quantity
      });
    }
  },
  actions: {
    initRealtimeListeners(context) {
      db.collection("products").onSnapshot(snapshot => {
        // @ts-ignore
        snapshot.docChanges().map(change => {
          if (change.type === "added") {
            const source = change.doc.metadata.hasPendingWrites
              ? "Local"
              : "Server";

            if (source === "Server") {
              context.commit("addProduct", {
                id: change.doc.id,
                name: change.doc.data().name,
                quantity: change.doc.data().quantity
              });
            }
          }
          if (change.type === "modified") {
            context.commit("updateProduct", {
              id: change.doc.id,
              name: change.doc.data().name,
              quantity: change.doc.data().quantity
            });
          }
          if (change.type === "removed") {
            context.commit("deleteProduct", change.doc.id);
          }
        });
      });
    },
    retrieveProducts(context) {
      context.commit("updateLoading", true);
      db.collection("products")
        .get()
        .then(querySnapshot => {
          let tempProducts = [];
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              name: doc.data().name,
              quantity: doc.data().quantity
            };

            tempProducts.push(data);
          });

          context.commit("retrieveProducts", tempProducts);
        });
    },
    addProduct(context, product) {
      db.collection("products")
        .add({
          name: product.name,
          category: product.category,
          quantity: product.quantity
        })
        .then(docRef => {
          context.commit("addProduct", {
            id: docRef.id,
            name: product.name,
            quantity: product.quantity
          });
        });
    },
    updateProduct(context, product) {
      db.collection("products")
        .doc(product.id)
        .set(
          {
            // id: list.id,
            name: product.name,
            quantity: product.quantity,
          },
          { merge: true }
        )
        .then(() => {
          context.commit("updateProduct", product);
        });
    },
    increment(context, product) {
      db.collection("products")
        .doc(product.id)
        .set(
          {
            id: product.id,
            // name: product.title,
            quantity: product.quantity
            // timestamp: todo.timestamp,
          },
          { merge: true }
        )
        .then(() => {
          context.commit("increment", product);
        });
    },
    decrement(context, product) {
      db.collection("products")
        .doc(product.id)
        .set(
          {
            id: product.id,
            // name: product.title,
            quantity: product.quantity
            // timestamp: todo.timestamp,
          },
          { merge: true }
        )
        .then(() => {
          context.commit("decrement", product);
        });
    },
    deleteProduct(context, id) {
      db.collection("products")
        .doc(id)
        .delete()
        .then(() => {
          context.commit("deleteProduct", id);
        });
    }
  }
};

export default products;
