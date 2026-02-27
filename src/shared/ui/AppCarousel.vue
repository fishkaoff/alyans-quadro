<template>
  <div class="slider">
    <swiper
      :modules="modules"
      :navigation="{
        nextEl: '.home-next-el',
        prevEl: '.home-prev-el',
      }"
      :slides-per-view="1"
      :space-between="30"
      :speed="1600"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
    >
      <slot />
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";

const modules = [Autoplay, Navigation];
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  gap: 20px;
  justify-content: end;
  padding: 20px 0;

  .prev .arrow {
    rotate: 180deg;
  }

  .prev,
  .next {
    transition: all 0.7s;
    cursor: pointer;
  }

  .prev:hover,
  .next:hover {
    scale: 1.2;
  }
}

.slider {
  :deep(.swiper-wrapper) {
    align-items: stretch;
  }

  :deep(.swiper-slide) {
    display: flex;
    height: auto;
  }
}
</style>
