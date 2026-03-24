<template>
  <div class="product-page">
    <short-specs :product="product" class="container" />

    <div class="specs">
      <div class="content">
        <h1 class="title">Характеристики</h1>

        <div class="cols">
          <!-- Колонка 1 — Двигатель -->
          <div class="col">
            <div class="row">
              <p class="spec-name">Бренд</p>
              <p class="spec-value">{{ product?.brand }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Год</p>
              <p class="spec-value">{{ product?.year }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Объем двигателя</p>
              <p class="spec-value">{{ product?.engineVolume }} см³</p>
            </div>
            <div class="row">
              <p class="spec-name">Мощность</p>
              <p class="spec-value">{{ product?.enginePower }} л.с.</p>
            </div>
            <div class="row">
              <p class="spec-name">Тип топлива</p>
              <p class="spec-value">{{ product?.fuelType }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Топливная система</p>
              <p class="spec-value">{{ product?.fuelSystem }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Тип зажигания</p>
              <p class="spec-value">{{ product?.ignitionType }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Тип охлаждения</p>
              <p class="spec-value">{{ product?.coolingType }}</p>
            </div>
          </div>

          <!-- Колонка 2 — Техника -->
          <div class="col">
            <div class="row">
              <p class="spec-name">Тип трансмиссии</p>
              <p class="spec-value">{{ product?.transmissionType }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Тип стартера</p>
              <p class="spec-value">{{ product?.starterType }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Кик-стартер</p>
              <p class="spec-value">
                {{ product?.starterKick ? "Есть" : "Нет" }}
              </p>
            </div>
            <div class="row">
              <p class="spec-name">Объем бака</p>
              <p class="spec-value">{{ product?.fuelTankVolume }} л</p>
            </div>
            <div class="row">
              <p class="spec-name">Материал бака</p>
              <p class="spec-value">{{ product?.fuelTankMaterial }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Вес</p>
              <p class="spec-value">{{ product?.dryWeight }} кг</p>
            </div>
            <div class="row">
              <p class="spec-name">Клиренс</p>
              <p class="spec-value">{{ product?.groundClearance }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Тип колес</p>
              <p class="spec-value">{{ product?.wheelType }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Передняя подвеска</p>
              <p class="spec-value">{{ product?.frontSuspensionType }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Задняя подвеска</p>
              <p class="spec-value">{{ product?.rearSuspensionType }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Тормозной шланг</p>
              <p class="spec-value">{{ product?.frontBrakeHose }}</p>
            </div>
          </div>

          <!-- Колонка 3 — Оснащение -->
          <div class="col">
            <div class="row">
              <p class="spec-name">Фара</p>
              <p class="spec-value">{{ product?.headlight }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Зеркала</p>
              <p class="spec-value">{{ product?.mirrors }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Сигнал</p>
              <p class="spec-value">{{ product?.horn }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Подогрев ручек</p>
              <p class="spec-value">{{ product?.heatedGrips }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Передний багажник</p>
              <p class="spec-value">{{ product?.frontTrunk }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Задний багажник</p>
              <p class="spec-value">{{ product?.rearTrunk }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Защита рук</p>
              <p class="spec-value">{{ product?.handProtection }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Задний ход</p>
              <p class="spec-value">{{ product?.reversGear }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Цена</p>
              <p class="spec-value">{{ product?.price }}</p>
            </div>
            <div class="row">
              <p class="spec-name">SKU</p>
              <p class="spec-value">{{ product?.sku }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Артикул производителя</p>
              <p class="spec-value">{{ product?.manufacturer_sku }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/shared/stores/products";
import ShortSpecs from "./ShortSpecs.vue";
import { useRoute } from "vue-router";

const id = useRoute().params.id;
const productsStore = useProductsStore();

const product = productsStore.products.find((product) => product.id == id);
</script>

<style scoped lang="scss">
.product-page {
  margin-top: 130px;
  padding-bottom: 30px;

  .container {
    @include mixins.container;
  }

  .specs {
    margin-top: 60px;
    background-color: variables.$color-card-bg;

    .content {
      @include mixins.container;
      @include mixins.text-base(18px);

      padding-top: 40px;
      padding-bottom: 40px;

      .title {
        color: variables.$color-fg;
        text-transform: uppercase;
        font-weight: 600;
      }

      .cols {
        margin-top: 20px;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 40px;

        .col {
          flex: 1;
          min-width: 250px;

          .row {
            padding: 20px;
            border-bottom: 1px solid rgb(207, 207, 207);

            display: flex;
            justify-content: space-between;

            .spec-name {
              color: variables.$color-fg;
              font-size: 16px;
            }

            .spec-value {
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
</style>
