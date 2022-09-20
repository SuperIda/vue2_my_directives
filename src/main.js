import Vue from "vue";
import App from "./App.vue";

//! 批量引入和注册自定义指令
import * as directives from "@/directives";
Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key]);
});

//! 批量注册组件
import components from "@/components";
Vue.use(components);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
