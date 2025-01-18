import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/Home.vue";
import ThreeComponent from "@/components/ThreeComponent.vue";
import Redirect from "@/components/Redirect.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/three',
      name: 'three',
      component: ThreeComponent,
    },
    {
      path: '/redirect/:url',
      name: 'redirect',
      component: Redirect,
      props: true
    },
  ],
})

export default router
