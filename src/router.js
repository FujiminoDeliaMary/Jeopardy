import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import CategoryPage from "./pages/CategoryPage.vue";
import QuestionPage from "./pages/QuestionPage.vue";

export const router = createRouter({
	history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/categories',
        name: 'categories',
        component : CategoryPage
    }, {
        path:'/question/:categoryName/:level',
        name : 'question',
        component: QuestionPage
    }
  ]
})