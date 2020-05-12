import axios from "axios";

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    addFetchedParts(state, parts) {
      state.parts = parts;
    }
  },
  actions: {
    getParts({ commit }) {
      axios.get("/api/parts").then(res => commit("addFetchedParts", res.data));
    },
    addRobotToCart({ commit, state }, robot) {
      const newCart = [...state.cart, robot];
      return axios.post("api/cart", newCart).then(() => commit("addRobotToCart", robot));
    }
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    }
  }
};
