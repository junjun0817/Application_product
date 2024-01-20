import { createRouter, createWebHistory } from 'vue-router'
import BodyItem from '../components/BodyItem.vue'
import AfterTreatment from '../components/AfterTreatment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BodyItem',
      component: BodyItem
    },
    {
      path: '/AfterTreatment',
      name: 'AfterTreatment',
      component: AfterTreatment
    },
  ]

  
})

export default router