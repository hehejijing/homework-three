import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import VueRouter from "vue-router";

import UIRouter from "./views/UI-Router.vue";
import Contacts from "./views/Contacts.vue";
import About from "./views/About.vue";
import Alice from "./components/Alice.vue";
import Bob from "./components/Bob.vue";
import Allcontacts from "./components/All_contacts.vue";
import Blog from "./components/bob/blog.vue";
import Fax from "./components/bob/fax.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/uirouter",
  },
  {
    path: "/uirouter",
    component: UIRouter,
  },
  {
    path: "/contacts",
    component: Contacts,
    children: [
      {
        path: "/",
        redirect: "allcontacts",
      },
      
      {
        path: "allcontacts",
        component: Allcontacts,
        name: "allcontacts",
      },
      {
        path: "alice",
        component: Alice,
        name: "alice",
      },
      {
        path: "bob",
        component: Bob,
        name: "bob",
        redirect: "/contacts/bob/fax",
        children: [

          
          {
            path: "blog",
            component: Blog,
            name : "blog",
          },
          {
            path: "fax",
            component: Fax,
            name : "fax",
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    component: About,
  },
];
const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
