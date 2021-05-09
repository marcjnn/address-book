import UniqueID from "@/features/UniqueID";

export const namespaced = true;

export const state = { notifications: [] };
export const mutations = {
  ADD_NOTIFICATION(state, notification) {
    console.log("im here - mutations");
    state.notifications.push(notification);
  },
  DELETE_NOTIFICATION(state, id) {
    let notificationIndex = state.notifications.findIndex(
      (notification) => notification.id === id
    );
    state.notifications.splice(notificationIndex, 1);
  },
};
export const actions = {
  addNotification({ commit }, notification) {
    console.log("im here - actions");
    let newNotification = {
      id: UniqueID().getID(),
      msg: notification,
    };
    commit("ADD_NOTIFICATION", newNotification);
  },
  // addNotification({ commit }, notification) {
  //   console.log("im here - actions");
  //   let index = this.state.notifications.findIndex(
  //     (n) => n.id === notification.id
  //   );
  //   if (index === -1) commit("ADD_NOTIFICATION", notification);
  // },
  deleteNotification({ commit }, id) {
    commit("DELETE_NOTIFICATION", id);
  },
};
