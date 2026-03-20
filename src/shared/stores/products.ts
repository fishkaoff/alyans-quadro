import { ref } from "vue";
import { defineStore } from "pinia";
import { atvList } from "./data";
import type { Product } from "../types/products";

export const useProductsStore = defineStore("products", () => {
  const products = ref<Product[]>([]);

  async function loadProducts() {
    products.value = atvList;
  }

  return { products, loadProducts };
});
