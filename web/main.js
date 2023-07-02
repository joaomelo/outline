import { createApp } from "vue";
import { Firebase, I18n } from "../lib";
import { Auth, Projects } from "../body";
import { messages } from "./i18n";
import { router } from "./router";
import App from "./app.vue";
import "./styles";

export function initApp(elementId) {
  const config = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
  };
  const driver = new Firebase(config);
  const auth = new Auth(driver.auth);
  const projects = new Projects(driver);

  const i18n = new I18n(messages);
  i18n.locale = navigator.navigate;

  const globals = {
    i18n,
    auth,
    projects,
  };

  const app = createApp(App);
  app.provide("globals", globals);
  app.use(router);
  app.mount(elementId);

  window.$globals = globals;
}
