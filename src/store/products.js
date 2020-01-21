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
        id: product.id,
        name: product.name,
        quantity: product.quantity
      });
    },
    updateProduct(state, product) {
      const index = state.products.findIndex(item => item.id == product.id);
      state.products.splice(index, 1, {
        id: product.id,
        name: product.name,
        quantity: product.quantity
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
          name: product.title,
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
            name: product.title,
            quantity: product.quantity
            // timestamp: todo.timestamp,
          },
          { merge: true }
        )
        .then(() => {
          context.commit("updateProduct", product);
        });
    },
    deleteProduct(context, id) {
      db.collection("products")
        .doc(id)
        .delete()
        .then(() => {
          context.commit("deleteProductt", id);
        });
    }
  }
};

export default products;
