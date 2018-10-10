import Vue from 'vue'
import Router from 'vue-router'

import ButtonsPage from '../pages/ButtonsPage.vue'
import GoodTabsPage from '../pages/AccessibleTabsPage'
import BadTabsPage from '../pages/BadTabsPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/good-tabs",
      name: "goodTabs",
      component: GoodTabsPage
    },
    {
      path: "/bad-tabs",
      name: "badTabs",
      component: BadTabsPage
    },
    {
      path: "/buttons",
      name: "buttons",
      component: ButtonsPage
    }
  ]
});