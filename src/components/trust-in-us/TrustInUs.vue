<template>
  <div class="trust">
    <div class="content">
      <section-title>
        <template #sub-title>Кто мы</template>
        <template #title>И почему вы можете нам доверять?</template>
      </section-title>

      <div class="cards">
        <div class="card">
          <div class="card-content">
            <h3 class="title">Прямые поставки от прозиводителя</h3>
            <ul class="benefits">
              <li class="card-item">- Нет лишних наценок</li>
              <li class="card-item">- Лучшее соотношение цена/качество</li>
              <li class="card-item">- Наличие запчастей для обслуживания</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <h3 class="title">Собственный сборочный цех</h3>
            <ul>
              <li class="card-item">- Проверка качества перед продажей</li>
              <li class="card-item">- Правильная сборка и настройка</li>
              <li class="card-item">- Техника готова к эксплуатации</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <h3 class="title">Широкий ассортимент</h3>
            <ul>
              <li class="card-item">- Техника под любые задачи</li>
              <li class="card-item">- Возможность выбора</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <h3 class="title">Сервис и поддержка</h3>
            <ul>
              <li class="card-item">- Помощь с обслуживанием</li>
              <li class="card-item">- Консультации по эксплуатации</li>
              <li class="card-item">- Гарантия до 2 лет</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from "../shared/SectionTitle.vue";
</script>

<style scoped lang="scss">
.trust {
  background-color: variables.$color-card-bg;

  .content {
    @include mixins.container;
    padding-top: 40px;
    padding-bottom: 40px;

    .cards {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;

      padding-top: 30px;

      .card {
        flex: 1;
        min-width: 300px;

        border-radius: 10px;
        background-color: variables.$color-bg;

        .card-content {
          @include mixins.text-base;
          padding: 30px;

          .title {
            font-size: 22px;
            font-weight: 600;
          }

          ul {
            .card-item {
              color: variables.$color-fg;
              line-height: 1.4em;
              padding-top: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
