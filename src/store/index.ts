import { createStore } from "vuex";
import Auth from './modules/auth/index'
import Group from './modules/group/index'
import Profile from './modules/profile/index'
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { Auth, Group, Profile },
});
