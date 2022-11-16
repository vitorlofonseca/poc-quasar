import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { Quasar, Notify } from "quasar";

// Import Quasar css
import "quasar/src/css/index.sass";

import "./assets/main.css";

const app = createApp(App);

app.use(Quasar, {
  plugins: { Notify },
});

app.use(router);

app.mount("#app");
