import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faAddressCard,
  faBirthdayCake,
  faSchool,
  faGraduationCap,
  faCommentDots
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faAddressCard,
  faBirthdayCake,
  faSchool,
  faGraduationCap,
  faCommentDots
);

Vue.component("fa-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
