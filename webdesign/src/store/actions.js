import {
  ADD_TO_CART,
  ADD_COUNTER
} from './mutations-type'
export default {
  addCart(context, payLoad) {
    return new Promise((resolve,reject) => {
      // let oldProduct = null;
      // for ( let item of state.cartList) {
      //   if (item.iid === payLoad.iid) {
      //     oldProduct = item
      //   }
      // }
      let oldProduct = context.state.cartList.find( item => item.iid === payLoad.iid );
      if (oldProduct) {
        context.commit('addCounter',oldProduct);
        resolve('当前商品数量加一')
      } else {
        payLoad.count = 1;
        // context.state.cartList.push( payLoad )
        context.commit('addToCart',payLoad);
        resolve('添加了新的商品')
      }
    })
  },
  addCollect(context,payLoad) {
    return new Promise((resolve,reject) => {
      let oldCollect = context.state.collectList.find(item => item.iid === payLoad.iid);
      if (oldCollect) {
        resolve('您已收藏该物品')
      } else {
        context.commit('addToCollect',payLoad);
        resolve('收藏成功!')
      }
    })
  },
  addObligation(context,payLoad) {
    return new Promise((resolve,reject) => {
      let oldObligation = context.state.shopGoods.find(item => item.iid === payLoad.iid);
      if (oldObligation) {
        resolve('您已购买成功！')
      } else {
        context.commit('addToObligation',payLoad);
        resolve('购买成功，请前往付款');
        // console.log( context.state.shopGoods );
      }
    })
  }
}
