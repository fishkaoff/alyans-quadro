import { ref } from "vue";
import { defineStore } from "pinia";
import type { Atv } from "../types/products/atv";
import type { Pitbike } from "../types/products/pitbike";
import { atvList, pitbikeList } from "./data";

export const useProductsStore = defineStore("products", () => {
  const atvs = ref<Atv[]>([]);
  const pitbikes = ref<Pitbike[]>([]);

  async function loadProducts() {
    atvs.value = atvList;
    pitbikes.value = pitbikeList;
  }

  return { atvs, pitbikes, loadProducts };
});
