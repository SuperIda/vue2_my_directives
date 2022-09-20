export const permission = {
  // 判断某个按钮的权限有没有
  inserted(dom, options) {
    // console.log(options.value)
    // <el-button v-permission>编辑</el-button>
    !store.state.user.userInfo.roles.points.includes(options.value)
      ? (dom.style.display = "none")
      : (dom.style.display = "");
  },
};
