<template>
  <div class="contact">
    <h2 class="sub-title">Контакты</h2>
    <h1 class="title">Свяжитесь с нами</h1>
    <p class="description">
      Готовы ответить на любые вопросы о наших квадроциклах, сервисе и условиях
      покупки.
    </p>

    <div class="cols">
      <div class="col">
        <div class="contact-card">
          <div class="content">
            <img :src="PhoneIcon" alt="Номер теелфона" class="icon" />
            <h2 class="card-title">Телефон</h2>
            <p class="working-time">Ежедневно с 09:00 до 20:00</p>
            <a href="callto:79279366626" class="link">+7 (927) 936-66-26</a>
          </div>
        </div>
        <div class="contact-card">
          <div class="content">
            <img :src="MailIcon" alt="Почта" class="icon" />
            <h2 class="card-title">Email</h2>
            <p class="working-time">Ежедневно с 09:00 до 20:00</p>
            <a href="mailto:alyans219@mail.ru" class="link"
              >alyans219@mail.ru</a
            >
          </div>
        </div>
      </div>

      <div class="col">
        <form @submit.prevent="" class="contact-form">
          <div class="content">
            <h1 class="form-title">Оставьте заявку</h1>
            <p class="form-description">Мы перезвоним вам в течение 30 минут</p>

            <div class="inputs">
              <p class="label">Имя</p>
              <input
                type="text"
                class="form-input"
                placeholder="Как к вам обращаться?"
              />

              <p class="label">Телефон</p>
              <input
                type="text"
                class="form-input"
                placeholder="+7 (___) ___-__-__"
              />

              <p class="label">Почта</p>
              <input
                type="text"
                class="form-input"
                placeholder="your@email.com"
              />

              <p class="label">Сообщение</p>
              <textarea
                class="form-input"
                placeholder="Расскажите, что вас интересует"
              />

              <button class="form-btn" type="submit">Отправить</button>

              <p class="remark">
                Нажимая кнопку "Отправить" вы соглашаетесь с
                <router-link :to="{ name: 'PrivacyPolicy' }" class="link"
                  >политикой конфиденциальности</router-link
                >
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PhoneIcon from "@/assets/images/phone.svg";
import MailIcon from "@/assets/images/mail.svg";
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss">
.contact {
  @include mixins.container;
  @include mixins.text-base;
  margin-top: 150px;
  padding-bottom: 60px;

  .sub-title {
    font-size: 18px;
    font-weight: 600;

    text-transform: uppercase;
    color: variables.$color-accent;
    text-align: center;
  }

  .title {
    font-size: 50px;
    font-weight: 800;
    text-transform: uppercase;
    padding-top: 30px;
    text-align: center;
  }

  .description {
    font-size: 18px;
    text-align: center;
    color: variables.$color-fg;
    width: 600px;
    margin: 0 auto;
    padding-top: 30px;
    line-height: 1.5em;

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }

  .cols {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;

    .col {
      flex: 1;
      min-width: 300px;
      margin-top: 40px;

      @media screen and (max-width: 300px) {
        width: 100%;
      }

      .contact-card {
        border: 1px solid rgb(207, 207, 207);
        border-radius: 10px;

        .content {
          padding: 40px;

          .icon {
            width: 60px;
            height: 60px;
            padding: 10px;

            background-color: rgb(243, 231, 225);
          }

          .card-title {
            font-size: 22px;

            padding-top: 20px;
            font-weight: 600;
          }

          .working-time {
            font-size: 18px;
            margin-top: 10px;
            color: variables.$color-fg;
          }

          .link {
            display: block;
            color: variables.$color-accent;
            font-size: 18px;
            font-weight: 500;
            margin-top: 10px;
          }
        }
      }

      .contact-card:not(:first-of-type) {
        margin-top: 40px;
      }

      .contact-form {
        background-color: #fff;
        border: 1px solid rgb(207, 207, 207);
        border-radius: 10px;

        .content {
          padding: 40px;

          .form-title {
            font-weight: 600;
            font-size: 26px;
          }

          .form-description {
            font-size: 18px;
            color: variables.$color-fg;
            margin-top: 10px;
          }

          .inputs {
            margin-top: 40px;

            .label {
              font-size: 16px;
              font-weight: 600;
              margin-top: 20px;
            }

            .form-input {
              outline: none;
              border: 1px solid rgb(207, 207, 207);
              background-color: variables.$color-bg;
              border-radius: 5px;

              width: 100%;
              padding: 15px;
              font-size: 18px;
              margin-top: 10px;
            }

            .form-btn {
              display: block;
              outline: none;
              border: none;

              width: 100%;
              padding: 20px;
              margin-top: 20px;

              background-color: variables.$color-accent;
              color: #fff;
              font-size: 22px;
              border-radius: 10px;
              cursor: pointer;
              transition: all 0.2s;
            }

            .form-btn:hover {
              background-color: variables.$color-accent-hover;
            }

            .remark {
              color: variables.$color-fg;
              font-size: 16px;
              text-align: center;
              margin-top: 10px;
              line-height: 1.5em;

              .link {
                color: variables.$color-accent;
                transition: all 0.2s;
              }

              .link:hover {
                color: variables.$color-accent-hover;
              }
            }
          }
        }
      }
    }
  }
}
</style>
