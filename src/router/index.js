import { createWebHistory, createRouter } from "vue-router";
import ProductListComponent from "@/components/ProductListComponent.vue";
import BucketPageVue from "@/components/BucketPage.vue";

const routes = [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductListComponent },
    { path: '/bucket', component: BucketPageVue },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

