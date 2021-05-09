import { Notification } from "@/types/Notification";
import UniqueID from "@/features/UniqueID";

export const namespaced = true;

interface State {
  notifications: Notification[];
}

export const state = { notifications: [] };
export const mutations = {
  ADD_NOTIFICATION(state: State, notification: Notification) {
    state.notifications.push(notification);
  },
  DELETE_NOTIFICATION(state: State, id: string) {
    const notificationIndex = state.notifications.findIndex(
      (notification) => notification.id === id
    );
    state.notifications.splice(notificationIndex, 1);
  },
};
export const actions = {
  addNotification({ commit }: any, notification: Notification) {
    const newNotification = {
      id: UniqueID(),
      msg: notification,
    };
    commit("ADD_NOTIFICATION", newNotification);
  },
  deleteNotification({ commit }: any, id: string) {
    commit("DELETE_NOTIFICATION", id);
  },
};
