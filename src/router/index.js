import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsuarioNew from '../views/UsuarioNew.vue'
import UsuarioEdit from '../views/UsuarioEdit.vue'
import UsuarioView from '../views/UsuarioView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/createE',
    name: 'createE',
    component: UsuarioNew
  },
  {
    path: '/editE/:id',
    name: 'editE',
    component: UsuarioEdit
  },
  {
    path: '/viewE/:id',
    name: 'viewE',
    component: UsuarioView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
