import AboutView from "@/views/about/AboutView.vue";
import HomePage from "@/views/home/HomePage.vue";
import CatalogPage from "@/views/product/CatalogPage.vue";
import ProductPage from "@/views/product/ProductPage.vue";
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
    {
      path: "/catalog/:id",
      name: "ProductPage",
      component: ProductPage,
    },
    {
      path: "/about",
      name: "AboutPage",
      component: AboutView,
    },
  ],
});

export default router;
