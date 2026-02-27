import HomePage from "@/views/home/HomePage.vue";
import CatalogPage from "@/views/catalog/CatalogPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/catalog",
      name: "Catalog",
      component: CatalogPage,
    },
  ],
});

export default router;
