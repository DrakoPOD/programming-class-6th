import "./styles/matjax3.css";

import DefaultTheme from "vitepress/theme";

import MyComponent from "../components/MyComponent.vue";
import Tabs from "../components/Tabs.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("TabComponent", MyComponent);
    app.component("Tabs", Tabs);
  },
};
