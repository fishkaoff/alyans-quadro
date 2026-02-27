import { ref } from "vue";
import { defineStore } from "pinia";

import Pitbike from "@/assets/images/range-pitbike-01.png";
import ChildAtv from "@/assets/images/range-atv-01.png";
import AdultAtv from "@/assets/images/range-atv-02.png";
import HeavyAtv from "@/assets/images/range-atv-03.png";
import type { Category } from "../types/types";

const categoriesData: Category[] = [
  {
    img: Pitbike,
    title: "Питбайки и эндуро",
    description:
      "Лёгкие и манёвренные мотоциклы для бездорожья и активной езды. Отлично подойдут для обучения, покатушек и уверенного движения по сложным трассам.",
    startPrice: "250000",
    id: "31fd2074-397f-4f39-9b44-cd7a25f4f11e",
  },
  {
    img: ChildAtv,
    title: "Детские квадроциклы",
    description:
      "Безопасные и простые в управлении модели для детей и подростков. Надёжная техника для первых навыков и весёлых поездок под контролем взрослых.",
    startPrice: "120000",
    id: "31fd2074-397f-4f39-9b44-cd7a65f4f11e",
  },
  {
    img: AdultAtv,
    title: "Взрослые квадроциклы",
    description:
      "Мощные и проходимые модели для отдыха, путешествий, охоты и работы. Уверенно справляются с любым бездорожьем и нагрузками.",
    startPrice: "120000",
    id: "0ebe26bf-3790-40ca-bf73-c6edf58ca3fe",
  },
  {
    img: HeavyAtv,
    title: "Грузовая техника",
    description:
      "Практичные решения для хозяйства и бизнеса. Перевозка грузов, работа на участке, ферме или стройке — надёжно и без лишних затрат.",
    startPrice: "120000",
    id: "0ebe26bf-3790-40ca-bf73-c6ede58ca3fe",
  },
];

export const useCategoriesStore = defineStore("categories", () => {
  const categories = ref<Category[]>([]);

  async function loadCategories() {
    categories.value = categoriesData;
  }

  return { categories, loadCategories };
});
