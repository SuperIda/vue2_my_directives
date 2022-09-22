export const focus = {
  // inserted 在节点插入页面时触发
  inserted(el) {
    // el 绑定指令的元素  binding 配置对象
    // console.log(el, binding)
    el.focus();
  },
  // update 方法，会在接收的值更新时触发，通过 binding.value 获取
  update(el, binding) {
    if (binding.value) {
      el.focus();
    }
  },
};
// 传值，当 isFocus 为 true 时，获取焦点
/* <input type="text" v-focus2="isFocus" /> */
export const focus2 = {
  // inserted 在节点插入页面时触发
  inserted(el) {
    // el 绑定指令的元素  binding 配置对象
    // console.log(el, binding)
    el.focus();
  },
  // update 方法，会在接收的值更新时触发，通过 binding.value 获取
  update(el, binding) {
    if (binding.value) {
      el.focus();
    }
  },
};
