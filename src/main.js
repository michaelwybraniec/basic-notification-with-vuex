// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuex from "vuex";
import App from "./App";

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notificationMessage: "",
    notificationType: ""
  },
  getters: {
    notificationMessage: (state) => state.notificationMessage,
    notificationType: (state) => state.notificationType
  },
  mutations: {
    SET_NOTIFICATION(state, { notificationMessage, notificationType }) {
      state.notificationMessage = notificationMessage;
      state.notificationType = notificationType;
    }
  },
  actions: {
    async showNotification({ commit }, payload) {
      commit("SET_NOTIFICATION", payload);

      return new Promise((resolve) => {
        const timeout = setTimeout(() => {
          clearTimeout(timeout);
          commit("SET_NOTIFICATION", {
            notificationMessage: "",
            notificationType: ""
          });
          resolve();
        }, 3000);
      });
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  store
});
