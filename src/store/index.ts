import { createStore } from "vuex";
import Auth from './modules/auth/index'
import Group from './modules/group/index'
import Profile from './modules/profile/index'
import Event from './modules/event/index'
import Friend from './modules/friend/index'
import Feed from './modules/feed/index'
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { Auth, Group, Profile, Friend, Event, Feed },
});
