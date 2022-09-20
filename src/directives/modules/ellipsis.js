//超出文本省略指令

export const ellipsis = {
  bind(el, options) {
    el.style.width = `${options.arg || 100}px`;
    el.style.whiteSpace = "nowrap";
    el.style.overflow = "hidden";
    el.style.textOverflow = "ellipsis";
  },
};
