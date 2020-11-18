import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./styles/variables.sass";
import "./styles/style.sass";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  "./components/base",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

const requireComponentIcon = require.context(
  "./components/icon",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponentIcon.keys().forEach(fileName => {
  const componentConfigIcon = requireComponentIcon(fileName);
  const componentNameIcon = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );
  Vue.component(
    componentNameIcon,
    componentConfigIcon.default || componentConfigIcon
  );
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
