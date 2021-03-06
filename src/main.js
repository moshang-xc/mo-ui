import Vue from "vue";
import App from "./App.vue";
import router from "./views/router";
import ReasyUiVue from "./components/index";
import RPage from "./views/components/r-page.vue";
import RH from "./views/components/r-h.vue";

import "./scss/index.scss";
import "./views/app.scss";

Vue.config.productionTip = false;
ReasyUiVue.install(Vue);

Vue.component("r-page", RPage);
Vue.component("r-h", RH);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
