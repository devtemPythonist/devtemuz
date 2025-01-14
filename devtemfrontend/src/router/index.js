import { createRouter, createWebHistory } from 'vue-router';

// Import your components for the routes
import HomeView from '../views/HomeView.vue';
import TelegrambotView from '../views/TelegrambotView.vue';
import MainView from '../views/layouts/MainView.vue';
import SidebarView from '../views/layouts/SidebarView.vue';
import HrModuleView from '../views/HrModuleView.vue';
import FinanceModuleView from '../views/FinanceModuleView.vue';

// Define your routes
const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView,
    children: [
      {
        path: 'main-sidebar', // This will be nested under '/'
        name: 'SidebarView',
        component: SidebarView,
        children: [
          {
            path: "/",
            redirect: "/main-sidebar/hometest",
        },
          {
            path: 'hometest', // This will be nested under '/main-sidebar'
            name: 'HomeView',
            component: HomeView,
          },
          {
            path: 'hr-module', // This will be nested under '/main-sidebar'
            name: 'HrModuleView',
            component: HrModuleView,
          },
          {
            path: 'finance-module', // This will be nested under '/main-sidebar'
            name: 'FinanceModuleView',
            component: FinanceModuleView,
          }
        ]
      }
    ]
  },
  {
    path: '/telegrambot',
    name: 'TelegrambotView',
    component: TelegrambotView,
  },
];

// Create the router instance with history mode
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
