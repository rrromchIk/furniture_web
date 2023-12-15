import { createWebHistory, createRouter } from "vue-router";
import ProductListComponent from "@/components/ProductListComponent.vue";

const routes = [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductListComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

