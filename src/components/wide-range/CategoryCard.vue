<template>
  <div class="card">
    <div class="content">
      <h3 class="title">{{ title }}</h3>

      <div class="cols">
        <div class="image-container">
          <img :src="img" alt="Питбайк" class="image" />
        </div>

        <div class="text-container">
          <p class="text">
            {{ text }}
          </p>

          <app-button class="btn">Посмотреть</app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from "@/shared/ui/AppButton.vue";
defineProps<{
  img: string | undefined;
  title: string | undefined;
  text: string | undefined;
}>();
</script>

<style scoped lang="scss">
.card {
  border-radius: 10px;
  background-color: variables.$color-card-bg;
  transition: all 0.7s;

  .content {
    padding: 30px;
    @include mixins.text-base;

    .title {
      font-size: 26px;
      font-weight: 800;
    }

    .cols {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      gap: 10px;
      margin-top: 40px;

      .image-container {
        flex: 1;
        max-width: 300px;
        min-width: 200px;

        .image {
          width: 100%;
          height: auto;
        }
      }

      .text-container {
        flex: 1;
        min-width: 200px;

        .text {
          font-size: 18px;
          line-height: 1.4em;
          color: variables.$color-fg;
        }

        .btn {
          margin-top: 20px;
        }
      }
    }
  }
}

.card:hover {
  scale: 1.02;
}
</style>
