import { createRouter, createWebHistory } from 'vue-router'
import Event from '../views/Event.vue'
import ShowData from '../views/ShowData.vue'
import EventDetails from '../components/EventDetails.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Event',
      component: Event
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/ShowData',
      name:'ShowData',
      component:ShowData
    },
    {
      path:'/users/:id',
      name:'EventDetails',
      props:true,
      component:EventDetails
    }
  ]
})

export default router
