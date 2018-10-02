import Vue from 'vue'
import Router from 'vue-router'

import ButtonsPage from '../pages/ButtonsPage.vue'
import TabsPage from '../pages/TabsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/tabs",
      name: "Tabs",
      component: TabsPage
    },
    {
      path: "/buttons",
      name: "buttons",
      component: ButtonsPage
    }
  ]
});