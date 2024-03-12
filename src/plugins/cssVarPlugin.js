export default {
  install: app => {
    app.config.globalProperties.$getCSSVariable = varName => {
      return getComputedStyle(document.documentElement).getPropertyValue(varName);
    };
  },
};
