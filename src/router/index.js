import {createWebHistory, createRouter} from "vue-router";
import store from "@/services/store";
import ProductListComponent from "@/components/ProductListComponent.vue";
import BucketPageVue from "@/components/BucketPage.vue";

const routes = [
    {path: '/', redirect: '/products'},
    {path: '/products', component: ProductListComponent},
    {
        name: 'bucket',
        path: '/bucket',
        component: BucketPageVue,
        beforeEnter: async (to, from, next) => {
            // Check if a team is selected
            let bucketItems = store.state.bucketItems;

            if (bucketItems.length > 0) {
                next(); // Allow access to the route
            } else {
                // Redirect to the team selection page if the team does not exist
                next('/products');
            }
        },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

