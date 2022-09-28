import "./styles/matjax3.css";
import "./styles/Tabs.css";
import "./styles/table.css";

import DefaultTheme from "vitepress/theme";

import MyComponent from "../components/MyComponent.vue";
//import  Tabs as myTabs  from "../components/Tabs.vue";
// import { Tabs, Tab } from "vue3-tabs-component";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("TabComponent", MyComponent);
    //app.component("myTabs", myTabs);
    // app.component("Tabs", Tabs);
    // app.component("Tab", Tab);
  },
};
