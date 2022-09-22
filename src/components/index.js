// import Vue from "vue";
const requireComponent = require.context("./", false, /\.vue$/);
console.log(requireComponent);
const list = requireComponent.keys().map((ele) => requireComponent(ele));

export default (Vue) => {
  list.forEach((ele) => {
    Vue.component(ele.default.name, ele.default);
  });
};
