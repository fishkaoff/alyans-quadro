<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/shared/AppHeader.vue";
import AppFooter from "./components/shared/AppFooter.vue";
import { onBeforeMount } from "vue";
import { useProductsStore } from "./shared/stores/products";

const productsStore = useProductsStore();

onBeforeMount(async () => {
  await productsStore.loadProducts();
});
</script>

<template>
  <app-header></app-header>
  <RouterView />
  <app-footer></app-footer>
</template>

<style scoped></style>
