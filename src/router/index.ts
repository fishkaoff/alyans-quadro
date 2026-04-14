import AboutView from "@/views/about/AboutView.vue";
import ContactPage from "@/views/contact/ContactPage.vue";
import Cookies from "@/views/documents/Cookies.vue";
import DeliveryAndPayment from "@/views/documents/DeliveryAndPayment.vue";
import PdAgreement from "@/views/documents/PdAgreement.vue";
import PrivacyPolicy from "@/views/documents/PrivacyPolicy.vue";
import Requisites from "@/views/documents/Requisites.vue";
import UserAgreement from "@/views/documents/UserAgreement.vue";
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
    {
      path: "/contacts",
      name: "ContactsPage",
      component: ContactPage,
    },
    {
      path: "/privacy-policy",
      name: "PrivacyPolicy",
      component: PrivacyPolicy,
    },
    {
      path: "/user-agreement",
      name: "UserAgreement",
      component: UserAgreement,
    },
    {
      path: "/pd-agreement",
      name: "PDAgreement",
      component: PdAgreement,
    },
    {
      path: "/cookies",
      name: "Cookies",
      component: Cookies,
    },
    {
      path: "/requisites",
      name: "Requisites",
      component: Requisites,
    },
    {
      path: "/delivery-and-payment",
      name: "DeliveryRules",
      component: DeliveryAndPayment,
    },
  ],
});

export default router;
