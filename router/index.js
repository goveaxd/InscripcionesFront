import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/inicio',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/sesion.vue')
  },
  {
    path: '/kardex',
    name: 'kardex',
  
    component: () => import(/* webpackChunkName: "kardex" */ '../views/kardex.vue')
  },
  {
    path: '/pago',
    name: 'pago',
  
    component: () => import(/* webpackChunkName: "pago" */ '../views/comprobacionPago.vue')
  },
  {
    path: '/docentes',
    name: 'docentes',
  
    component: () => import(/* webpackChunkName: "docentes" */ '../views/consultarDocentes.vue')
  },
  {
    path: '/materias',
    name: 'materias',
  
    component: () => import(/* webpackChunkName: "materias" */ '../views/consultarMateriasPCarrera.vue')
  },
  {
    path: '/busquedaAlumnos',
    name: 'busquedaAlumnos',
  
    component: () => import(/* webpackChunkName: "busquedaAlumnos" */ '../views/busquedaAlumnos.vue')
  },
  {
    path: '/carreras',
    name: 'carreras',
  
    component: () => import(/* webpackChunkName: "carreras" */ '../views/consultaCarreras.vue')
  },
  {
    path: '/horario',
    name: 'horario',
  
    component: () => import(/* webpackChunkName: "horario" */ '../views/horario.vue')
  },
  {
    path: '/cargaAcademica',
    name: 'cargaAcademica',
  
    component: () => import(/* webpackChunkName: "cargaAcademica" */ '../views/cargaAcademica/index.vue')
  }
 
]

const router = new VueRouter({
  routes
})

export default router