import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

// webpack needs to require all of the files with the Base prefix
const requireComponent = require.context(
  "./components/ui",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

const app = createApp(App);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  app.component(componentName, componentConfig.default || componentConfig);
});

// FontAwesome library
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faUserEdit,
  faUserTimes,
  faUserPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowClose as farWindowClose } from "@fortawesome/free-regular-svg-icons";

library.add(
  faCheck,
  faUserEdit,
  faUserTimes,
  faUserPlus,
  faTimes,
  farWindowClose
);

// APP
app
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
