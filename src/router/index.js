// Composables
import { createRouter, createWebHistory } from "vue-router";

import Nomina from "@/views/Nomina.vue";
import Empresa from "@/views/Empresa.vue";
import Gastos from "@/views/Gastos.vue";
import Informes from "@/views/Informes.vue";
import Tramites from "@/views/Tramites.vue";
import AgregarEmpleado from '../views/AgregarEmpleado.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Nomina,
  },
  {
    path: "/empresa",
    name: "empresa",
    component: Empresa,
  },
  {
    path: "/gastos",
    name: "gastos",
    component: Gastos,
  },
  {
    path: "/informes",
    name: "informes",
    component: Informes,
  },
  {
    path: "/tramites",
    name: "tramites",
    component: Tramites,
  },
  {
    path: '/agregar-empleado',
    name: 'agregar-empleado',
    component: AgregarEmpleado,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
