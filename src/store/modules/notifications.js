import UniqueID from "@/features/UniqueID";

export const namespaced = true;

export const state = { notifications: [] };
export const mutations = {
  ADD_NOTIFICATION(state, notification) {
    console.log("im here - mutations");
    state.notifications.push(notification);
  },
  DELETE_NOTIFICATION(state, id) {
    console.log(id);
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
  deleteNotification({ commit }, id) {
    commit("DELETE_NOTIFICATION", id);
  },
};
