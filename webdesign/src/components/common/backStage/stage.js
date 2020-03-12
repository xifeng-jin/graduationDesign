import BackStage from "./BackStage"

const obj2 = {};
obj2.install = function (Vue) {
  const stageConstructor = Vue.extend(BackStage);
  const stageToast = new stageConstructor();
  stageToast.$mount(document.createElement('div'));
  document.body.appendChild(stageToast.$el);
  Vue.prototype.$stage = stageToast;
  console.log(stageToast.$el)
};
export default obj2
