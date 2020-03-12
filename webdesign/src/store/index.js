import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

const state = {
  //保存购物信息
  cartList: [],
  //保存收藏信息
  collectList: [],
  //保存购买信息
  shopGoods: []
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store
