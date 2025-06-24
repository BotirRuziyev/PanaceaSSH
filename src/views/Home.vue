<template>
  <div class="home-page">
    <TheHeader></TheHeader>
    <swiper
      ref="swiperRef"
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="30"
      :mousewheel="false"
      :modules="modules"
      class="scroll-container"
    >
      <section class="welcom__section scroll-slider" data-scrollable>
        <video autoplay muted loop playsinline class="bg-video">
          <source src="@/assets/sound/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="main__info" data-scrollable>
          <aos-vue animation="fade-up" :delay="400" :offset="-250">
            <h1 class="info__descript section__title">
              We are «Apple» in the world of Dayz. <br />
              We invest endless amount of time and effort in our creation.
              <br />
              We work solely off our own passion and dedication.
            </h1>
          </aos-vue>
          <aos-vue animation="fade-up" :delay="1000" :offset="-250">
            <div class="info__buttons">
              <a
                href="https://api.panaceadayz.com/v2/Player.SteamLogin"
                class="log__steam"
                v-if="!USER.auth"
                >Log in with Steam</a
              >
              <router-link to="profile" class="log__steam" v-else
                >Profile</router-link
              >
              <a
                href="https://discord.gg/panacea"
                target="_blank"
                class="discord"
                >Discord</a
              >
            </div>
          </aos-vue>
          <div class="mouse">
            <img src="../assets/img/svg/icon_mouse.svg" alt="Mouse" />
          </div>
        </div>
      </section>
      <section class="explore scroll-slider" data-scrollable>
        <h2 class="explore__title">Where do you stand?</h2>
        <div class="explore__tabs">
          <button
            :class="[
              'explore__tab-btn',
              activeTab === 'PVP' ? 'explore__tab-btn--active' : '',
            ]"
            @click="activeTab = 'PVP'"
          >
            PVP
          </button>
          <button
            :class="[
              'explore__tab-btn',
              activeTab === 'PVE' ? 'explore__tab-btn--active' : '',
            ]"
            @click="activeTab = 'PVE'"
          >
            PVE
          </button>
        </div>
        <div class="explore__content">
          <swiper
            :modules="swiperModules"
            :space-between="100"
            :navigation="{
              nextEl: '.explore__arrow-next',
              prevEl: '.explore__arrow-prev',
            }"
            class="explore__slider"
          >
            <swiper-slide
              v-for="(slide, index) in slides"
              :key="index"
              class="explore__slide"
            >
              <div class="explore__slide-in">
                <div class="explore__image-wrapper">
                  <p class="explore__label">{{ slide.label }}</p>
                  <img
                    :src="slide.image"
                    :alt="'Slide ' + (index + 1)"
                    class="explore__image"
                  />
                </div>
                <div class="explore__info">
                  <p class="explore__label">{{ slide.label }}</p>
                  <h3 class="explore__subtitle">{{ slide.title }}</h3>
                  <p class="explore__description">
                    {{ slide.description }}
                  </p>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper__arrows">
              <button
                class="swiper-button swiper-button-prev explore__arrow-prev"
              >
                <svg
                  width="21"
                  height="12"
                  viewBox="0 0 21 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3623 4.92773C19.7765 4.92773 20.1123 5.26352 20.1123 5.67773C20.1123 6.09195 19.7765 6.42773 19.3623 6.42773L19.3623 4.92773ZM1.10761 6.20806C0.814716 5.91517 0.814716 5.4403 1.10761 5.1474L5.88058 0.374432C6.17347 0.081539 6.64835 0.081539 6.94124 0.374432C7.23413 0.667326 7.23413 1.1422 6.94124 1.43509L2.6986 5.67773L6.94124 9.92037C7.23413 10.2133 7.23413 10.6881 6.94124 10.981C6.64835 11.2739 6.17347 11.2739 5.88058 10.981L1.10761 6.20806ZM19.3623 5.67773L19.3623 6.42773L1.63794 6.42773L1.63794 5.67773L1.63794 4.92773L19.3623 4.92773L19.3623 5.67773Z"
                    fill="white"
                    fill-opacity="1"
                  />
                </svg>
              </button>
              <button
                class="swiper-button swiper-button-next explore__arrow-next"
              >
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.773926 5.51904C0.359712 5.51904 0.0239257 5.85483 0.0239258 6.26904C0.0239258 6.68326 0.359712 7.01904 0.773926 7.01904L0.773926 5.51904ZM19.0286 6.79937C19.3215 6.50648 19.3215 6.0316 19.0286 5.73871L14.2557 0.965741C13.9628 0.672848 13.4879 0.672848 13.195 0.965741C12.9021 1.25863 12.9021 1.73351 13.195 2.0264L17.4376 6.26904L13.195 10.5117C12.9021 10.8046 12.9021 11.2794 13.195 11.5723C13.4879 11.8652 13.9628 11.8652 14.2557 11.5723L19.0286 6.79937ZM0.773926 6.26904L0.773926 7.01904L18.4983 7.01904L18.4983 6.26904L18.4983 5.51904L0.773926 5.51904L0.773926 6.26904Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </swiper>
        </div>
      </section>
      <section class="project-benefits scroll-slider" data-scrollable>
        <div class="project-benefits__container">
          <h2 class="project-benefits__title">
            Why
            <span class="project-benefits__title--highlight">Panacea DayZ</span
            ><br />
            is the best project to play.
          </h2>
          <div class="swiper__arrows">
            <button
              class="swiper-button swiper-button-prev project-benefits__arrow--prev"
            >
              <svg
                width="21"
                height="12"
                viewBox="0 0 21 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3623 4.92773C19.7765 4.92773 20.1123 5.26352 20.1123 5.67773C20.1123 6.09195 19.7765 6.42773 19.3623 6.42773L19.3623 4.92773ZM1.10761 6.20806C0.814716 5.91517 0.814716 5.4403 1.10761 5.1474L5.88058 0.374432C6.17347 0.081539 6.64835 0.081539 6.94124 0.374432C7.23413 0.667326 7.23413 1.1422 6.94124 1.43509L2.6986 5.67773L6.94124 9.92037C7.23413 10.2133 7.23413 10.6881 6.94124 10.981C6.64835 11.2739 6.17347 11.2739 5.88058 10.981L1.10761 6.20806ZM19.3623 5.67773L19.3623 6.42773L1.63794 6.42773L1.63794 5.67773L1.63794 4.92773L19.3623 4.92773L19.3623 5.67773Z"
                  fill="white"
                  fill-opacity="1"
                />
              </svg>
            </button>
            <button
              class="swiper-button swiper-button-next project-benefits__arrow--next"
            >
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.773926 5.51904C0.359712 5.51904 0.0239257 5.85483 0.0239258 6.26904C0.0239258 6.68326 0.359712 7.01904 0.773926 7.01904L0.773926 5.51904ZM19.0286 6.79937C19.3215 6.50648 19.3215 6.0316 19.0286 5.73871L14.2557 0.965741C13.9628 0.672848 13.4879 0.672848 13.195 0.965741C12.9021 1.25863 12.9021 1.73351 13.195 2.0264L17.4376 6.26904L13.195 10.5117C12.9021 10.8046 12.9021 11.2794 13.195 11.5723C13.4879 11.8652 13.9628 11.8652 14.2557 11.5723L19.0286 6.79937ZM0.773926 6.26904L0.773926 7.01904L18.4983 7.01904L18.4983 6.26904L18.4983 5.51904L0.773926 5.51904L0.773926 6.26904Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <swiper
            :modules="swiperModules"
            :space-between="25"
            :autoHeight="true"
            :navigation="{
              nextEl: '.project-benefits__arrow--next',
              prevEl: '.project-benefits__arrow--prev',
            }"
            :breakpoints="{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }"
            class="project-benefits__slider"
          >
            <swiper-slide class="project-benefits__card">
              <div class="project-benefits__card-icon">
                <img
                  src="@/assets/img/icons/icon-anticheat.svg"
                  alt="Anticheat icon"
                />
              </div>
              <h3 class="project-benefits__card-title">Anticheat.</h3>
              <p class="project-benefits__card-description">
                A beautiful, procedurally generated world awaits you, shrouded
                in mystery.
              </p>
              <div class="project-benefits__card-action">
                <img src="@/assets/img/icons/icon-arrow.svg" alt="More" />
              </div>
            </swiper-slide>
            <swiper-slide class="project-benefits__card">
              <div class="project-benefits__card-icon">
                <img
                  src="@/assets/img/icons/icon-performance.svg"
                  alt="Performance icon"
                />
              </div>
              <h3 class="project-benefits__card-title">Performance.</h3>
              <p class="project-benefits__card-description">
                A beautiful, procedurally generated world awaits you, shrouded
                in mystery.
              </p>
              <div class="project-benefits__card-action">
                <img src="@/assets/img/icons/icon-arrow.svg" alt="More" />
              </div>
            </swiper-slide>
            <swiper-slide class="project-benefits__card">
              <div class="project-benefits__card-icon">
                <img
                  src="@/assets/img/icons/icon-economy.svg"
                  alt="Economy icon"
                />
              </div>
              <h3 class="project-benefits__card-title">
                Stable and optimized economy.
              </h3>
              <p class="project-benefits__card-description">
                A beautiful, procedurally generated world awaits you, shrouded
                in mystery.
              </p>
              <div class="project-benefits__card-action">
                <img src="@/assets/img/icons/icon-arrow.svg" alt="More" />
              </div>
            </swiper-slide>
            <swiper-slide class="project-benefits__card">
              <div class="project-benefits__card-icon">
                <img
                  src="@/assets/img/icons/icon-anticheat.svg"
                  alt="Anticheat icon"
                />
              </div>
              <h3 class="project-benefits__card-title">Anticheat.</h3>
              <p class="project-benefits__card-description">
                A beautiful, procedurally generated world awaits you, shrouded
                in mystery.
              </p>
              <div class="project-benefits__card-action">
                <img src="@/assets/img/icons/icon-arrow.svg" alt="More" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </section>
      <section class="reviews scroll-slider" data-scrollable>
        <div class="reviews__container">
          <h2 class="reviews__title">
            No need to brag — let our <br />
            <span class="reviews__title--emphasis">players speak for us</span>
          </h2>

          <div class="reviews__slider-wrapper">
            <swiper
              :modules="swiperModules"
              :autoHeight="true"
              :navigation="{
                prevEl: '.reviews__arrow--prev',
                nextEl: '.reviews__arrow--next',
              }"
              :spaceBetween="24"
              :breakpoints="{
                0: { slidesPerView: 1.1, spaceBetween: 8 },
                768: { slidesPerView: 2 },
                1400: { slidesPerView: 3 },
              }"
              class="reviews__slider"
            >
              <swiper-slide
                class="reviews__card"
                v-for="review in reviews"
                :key="review.id"
              >
                <div class="reviews__card-header">
                  <div class="reviews__card-avatar-wrapper">
                    <img
                      class="reviews__card-avatar"
                      :src="review.avatar"
                      :alt="review.username"
                    />
                    <span class="reviews__card-status"></span>
                  </div>
                  <span class="reviews__card-tag">Discord review</span>
                </div>
                <div class="reviews__card-info">
                  <h3 class="reviews__card-username">
                    {{ review.username }}
                  </h3>
                  <span class="reviews__card-date">{{ review.date }}</span>
                </div>
                <p class="reviews__card-text">
                  {{ review.text }}
                </p>
              </swiper-slide>
            </swiper>
            <div class="swiper__arrows">
              <button
                class="swiper-button swiper-button-prev reviews__arrow--prev"
              >
                <svg
                  width="21"
                  height="12"
                  viewBox="0 0 21 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3623 4.92773C19.7765 4.92773 20.1123 5.26352 20.1123 5.67773C20.1123 6.09195 19.7765 6.42773 19.3623 6.42773L19.3623 4.92773ZM1.10761 6.20806C0.814716 5.91517 0.814716 5.4403 1.10761 5.1474L5.88058 0.374432C6.17347 0.081539 6.64835 0.081539 6.94124 0.374432C7.23413 0.667326 7.23413 1.1422 6.94124 1.43509L2.6986 5.67773L6.94124 9.92037C7.23413 10.2133 7.23413 10.6881 6.94124 10.981C6.64835 11.2739 6.17347 11.2739 5.88058 10.981L1.10761 6.20806ZM19.3623 5.67773L19.3623 6.42773L1.63794 6.42773L1.63794 5.67773L1.63794 4.92773L19.3623 4.92773L19.3623 5.67773Z"
                    fill="white"
                    fill-opacity="1"
                  />
                </svg>
              </button>
              <button
                class="swiper-button swiper-button-next reviews__arrow--next"
              >
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.773926 5.51904C0.359712 5.51904 0.0239257 5.85483 0.0239258 6.26904C0.0239258 6.68326 0.359712 7.01904 0.773926 7.01904L0.773926 5.51904ZM19.0286 6.79937C19.3215 6.50648 19.3215 6.0316 19.0286 5.73871L14.2557 0.965741C13.9628 0.672848 13.4879 0.672848 13.195 0.965741C12.9021 1.25863 12.9021 1.73351 13.195 2.0264L17.4376 6.26904L13.195 10.5117C12.9021 10.8046 12.9021 11.2794 13.195 11.5723C13.4879 11.8652 13.9628 11.8652 14.2557 11.5723L19.0286 6.79937ZM0.773926 6.26904L0.773926 7.01904L18.4983 7.01904L18.4983 6.26904L18.4983 5.51904L0.773926 5.51904L0.773926 6.26904Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="news scroll-slider" data-scrollable>
        <div class="news__container">
          <h2 class="news__title">More news.</h2>

          <div class="news__slider-wrapper">
            <swiper
              :modules="swiperModules"
              :autoHeight="true"
              :navigation="{
                prevEl: '.news__arrow--prev',
                nextEl: '.news__arrow--next',
              }"
              :spaceBetween="24"
              :breakpoints="{
                0: { slidesPerView: 1.1, spaceBetween: 8 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }"
              class="news__slider"
            >
              <swiper-slide
                class="news__card"
                v-for="post in newsPosts"
                :key="post.id"
              >
                <div class="news__card-image">
                  <img :src="post.image" :alt="post.title" />
                </div>
                <div class="news__card-content">
                  <h3 class="news__card-title">{{ post.title }}</h3>
                  <span class="news__card-date">{{ post.date }}</span>
                  <p class="news__card-description">{{ post.description }}</p>
                  <div class="news__card-wrapper--button">
                    <router-link to="#" class="news__card-button"
                      >Read More</router-link
                    >
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper__arrows">
              <button
                class="swiper-button swiper-button-prev news__arrow--prev"
                aria-label="Previous"
              >
                <svg
                  width="21"
                  height="12"
                  viewBox="0 0 21 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3623 4.92773C19.7765 4.92773 20.1123 5.26352 20.1123 5.67773C20.1123 6.09195 19.7765 6.42773 19.3623 6.42773L19.3623 4.92773ZM1.10761 6.20806C0.814716 5.91517 0.814716 5.4403 1.10761 5.1474L5.88058 0.374432C6.17347 0.081539 6.64835 0.081539 6.94124 0.374432C7.23413 0.667326 7.23413 1.1422 6.94124 1.43509L2.6986 5.67773L6.94124 9.92037C7.23413 10.2133 7.23413 10.6881 6.94124 10.981C6.64835 11.2739 6.17347 11.2739 5.88058 10.981L1.10761 6.20806ZM19.3623 5.67773L19.3623 6.42773L1.63794 6.42773L1.63794 5.67773L1.63794 4.92773L19.3623 4.92773L19.3623 5.67773Z"
                    fill="white"
                    fill-opacity="1"
                  />
                </svg>
              </button>
              <button
                class="swiper-button swiper-button-next news__arrow--next"
                aria-label="Next"
              >
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.773926 5.51904C0.359712 5.51904 0.0239257 5.85483 0.0239258 6.26904C0.0239258 6.68326 0.359712 7.01904 0.773926 7.01904L0.773926 5.51904ZM19.0286 6.79937C19.3215 6.50648 19.3215 6.0316 19.0286 5.73871L14.2557 0.965741C13.9628 0.672848 13.4879 0.672848 13.195 0.965741C12.9021 1.25863 12.9021 1.73351 13.195 2.0264L17.4376 6.26904L13.195 10.5117C12.9021 10.8046 12.9021 11.2794 13.195 11.5723C13.4879 11.8652 13.9628 11.8652 14.2557 11.5723L19.0286 6.79937ZM0.773926 6.26904L0.773926 7.01904L18.4983 7.01904L18.4983 6.26904L18.4983 5.51904L0.773926 5.51904L0.773926 6.26904Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="footer-wrapper scroll-slider" data-scrollable>
        <div class="footer__cta">
          <h2 class="footer__cta-title">
            Have questions?<br />
            <span class="footer__cta-subtitle">Let us know in Discord.</span>
          </h2>
          <a
            href="https://discord.gg/panacea"
            target="_blank"
            class="footer__cta-button discord"
          >
            Discord
          </a>
        </div>
        <TheFooter></TheFooter>
      </section>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { mapGetters, mapActions } from "vuex";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "HomeView",
  components: { Swiper, SwiperSlide, TheHeader, TheFooter },
  data() {
    return {
      activeTab: "PVP",
      swiperRef: null,
      slides: [
        {
          id: 1,
          image: require("@/assets/img/explore-slide.png"),
          label: "Key Features",
          title: "Explore.",
          description: `A beautiful, procedurally generated world awaits you,
                        shrouded in mystery. Venture into deep dark forests,
                        climb snow-peaked mountains and discover what’s left
                        of those who came before you. Take to the seas
                        on a mighty longship, but be wary of sailing too far moniy aolaj`,
        },
        {
          id: 2,
          image: require("@/assets/img/explore-slide.png"),
          label: "Key Features",
          title: "Explore.",
          description: `A beautiful, procedurally generated world awaits you,
                        shrouded in mystery. Venture into deep dark forests,
                        climb snow-peaked mountains and discover what’s left
                        of those who came before you. Take to the seas
                        on a mighty longship, but be wary of sailing too far…`,
        },
        {
          id: 3,
          image: require("@/assets/img/explore-slide.png"),
          label: "Key Features",
          title: "Explore.",
          description: `A beautiful, procedurally generated world awaits you,
                        shrouded in mystery. Venture into deep dark forests,
                        climb snow-peaked mountains and discover what’s left
                        of those who came before you. Take to the seas
                        on a mighty longship, but be wary of sailing too far…`,
        },
      ],
      reviews: [
        {
          id: 1,
          avatar: require("@/assets/img/avatar-30.png"),
          username: "Creativ4DayZ",
          date: "22.06.2025",
          text: `The best DayZ PVP server so far extended text fill, extended text fill, extended text fill, extended text fill, extended text fill, extended text fill,`,
        },
        {
          id: 2,
          avatar: require("@/assets/img/avatar-30.png"),
          username: "Creativ4DayZ",
          date: "22.06.2025",
          text: `The best DayZ PVP server so far extended text fill, extended text fill, extended text fill, extended text fill, extended text fill, extended text fill,`,
        },
        {
          id: 3,
          avatar: require("@/assets/img/avatar-30.png"),
          username: "Creativ4DayZ",
          date: "22.06.2025",
          text: `The best DayZ PVP server so far extended text fill, extended text fill, extended text fill, extended text fill, extended text fill, extended text fill,`,
        },
        {
          id: 4,
          avatar: require("@/assets/img/avatar-30.png"),
          username: "Creativ4DayZ",
          date: "22.06.2025",
          text: `The best DayZ PVP server so far extended text fill, extended text fill, extended text fill, extended text fill, extended text fill, extended text fill,`,
        },
        {
          id: 5,
          avatar: require("@/assets/img/avatar-30.png"),
          username: "Creativ4DayZ",
          date: "22.06.2025",
          text: `The best DayZ PVP server so far extended text fill, extended text fill, extended text fill, extended text fill, extended text fill, extended text fill,`,
        },
      ],
      newsPosts: [
        {
          id: 1,
          image: require("@/assets/img/news-1.png"),
          title: "DayZ Update 1.28",
          date: "June 3, 2025 11:45 pm EST",
          description:
            "We are happy to announce that the game update 1.28 has been released on all platforms.",
        },
        {
          id: 2,
          image: require("@/assets/img/news-2.png"),
          title: "Community Spotlight - May 2025",
          date: "May 30, 2025 12:50 am EST",
          description:
            "Welcome back to the Community Spotlight! May was a busy month full of new maps...",
        },
        {
          id: 3,
          image: require("@/assets/img/news-3.png"),
          title: "1.28 Experimental Release",
          date: "Apr 15, 2025 9:00 pm EST",
          description:
            "We're about to enter the public testing phase of game update 1.28...",
        },
      ],
      swiperModules: [Navigation],
      modules: [Mousewheel],
    };
  },
  computed: {
    ...mapGetters(["USER"]),
  },
  methods: {
    ...mapActions(["GET_USER"]),
  },
  mounted() {
    this.GET_USER();

    // // Swiper instance'ni olish
    // const swiper = this.swiperRef?.$el?.swiper;
    // if (!swiper) return;

    // // Avval mousewheel'ni faolsizlantirib qo'yamiz
    // swiper.mousewheel.disable();

    // // Event listener: wheel scroll uchun
    // swiper.el.addEventListener("wheel", (e) => {
    //   const activeSlide = swiper.slides[swiper.activeIndex];
    //   const scrollable = activeSlide.querySelector("[data-scrollable]");
    //   if (!scrollable) return;

    //   const { scrollTop, scrollHeight, clientHeight } = scrollable;
    //   const delta = e.deltaY;
    //   const isScrollingDown = delta > 0;

    //   const canScrollDown = scrollTop + clientHeight < scrollHeight;
    //   const canScrollUp = scrollTop > 0;

    //   if (
    //     (isScrollingDown && canScrollDown) ||
    //     (!isScrollingDown && canScrollUp)
    //   ) {
    //     // Kontent hali scroll bo'lishi mumkin — faqat scroll qilinsin
    //     e.preventDefault();
    //     e.stopPropagation();
    //   } else {
    //     // Scrollning oxiriga yetdi — faqat 1 marta slide o'tsin
    //     swiper.mousewheel.enable();

    //     // 1 marta scroll uchun vaqt beramiz (foydalanuvchi ko‘rmasligi uchun)
    //     setTimeout(() => {
    //       swiper.mousewheel.disable();
    //     }, 300);
    //   }
    // });
  },
};
</script>

<style lang="sass">
// .scroll-container
//   max-height: 100vh
//   .scroll-slider
//     height: 100%
//     overflow-y: auto
//     overflow-x: hidden
.welcom__section
  min-height: 100vh
  transition: 0.5s
  +flexa
  justify-content: center
  padding: 140px 0
  position: relative

  .bg-video
    width: 100%
    height: 100%
    object-fit: cover
    opacity: 0.3
    position: absolute
    top: 0
    left: 0

.main__info
  padding: 0 40px
  .info__descript
    max-width: 1042px
    font-family: "Inter", sans-serif
    font-weight: 600
    font-size: 35px
    letter-spacing: 0.01em
    text-align: center
    color: #fff

  .info__buttons
    +flexa
    margin: 0 auto
    margin-top: 50px
    max-width: 532px
    width: 100%
    justify-content: space-between

    a
      padding: 24px 0px
      max-width: 254px
      width: 100%
      font-family: "Inter", sans-serif
      text-align: center
      font-weight: 500
      font-size: 16px
      border-radius: 10px
      transition: .3s

      &:hover
        transform: scale(1.02)

.log__steam
  background: #D31027 url("~@/assets/img/welcome_bg_btn.png")

  &:hover
    box-shadow: 0px 4px 89px rgba(211, 16, 39, 0.26)

.discord
  background: #5865F2 url("~@/assets/img/welcome_bg_btn.png")

  &:hover
    box-shadow: 0px 4px 89px rgba(88, 101, 242, 0.26)

.mouse
  position: absolute
  bottom: 107px
  left: 50%
  transform: translateX(-50%)
  animation-duration: 1.9s
  animation-iteration-count: infinite
  animation-name: scroll

@keyframes scroll
  0%
    opacity: 1

  100%
    opacity: 0
    transform: translateY(56px) translateX(-50%)

@media screen and (max-width: $mobileContainer)
  .main__info
    .info__descript
      font-size: 22px
      line-height: 136%

  .info__buttons
    flex-direction: column
    margin-top: 34px

  .discord
    margin-top: 15px

  .mouse
    bottom: 34px

  @keyframes scroll
    0%
      opacity: 1

    100%
      opacity: 0
      transform: translateY(25px) translateX(-50%)
.swiper__arrows
  height: 55px
  display: inline-flex
  align-items: center
  gap: 16px
  line-height: 0
  @media (max-width: $mobileContainer)
    justify-content: center
  .swiper-button
    width: 55px
    height: 55px
    display: flex
    align-items: center
    justify-content: center
    margin: 0
    position: static
    border-radius: 100%
    background: rgba(255, 255, 255, 0.02)
    backdrop-filter: blur(21.299999237060547px)
    transition: 0.2s
    &:hover
      background: rgba(255, 255, 255, 0.1)
    &.swiper-button-disabled
      display: inline-flex !important
      opacity: 1
      svg
        opacity: 0.25
    svg
      width: 20px
      height: 12px
      transition: 0.2s
    &::after
      display: none
.explore
  transition: 0.5s
  padding: 135px 0
  max-height: 948px
  background: url("~@/assets/img/explore-bg.png")
  +bg
  @media (max-width: 1200px)
    max-height: 100% !important
    overflow-x: hidden
    background-position: left top
  @media (max-width: $mobileContainer)
    padding: 40px 0 32px

  &__title
    padding: 0 15px
    margin-bottom: 40px
    font-family: "inter", sans-serif
    font-weight: 500
    font-size: 56px
    text-align: center
    letter-spacing: -0.02em
    color: #fff
    @media (max-width: $mobileContainer)
      margin-bottom: 24px
      font-size: 36px
      letter-spacing: -0.03em
  &__tabs
    max-width: 212px
    width: 100%
    display: flex
    gap: 8px
    margin: 0 auto 40px
    border: 1px solid rgba(255, 255, 255, 0.05)
    padding: 4px
    border-radius: 10px
    @media (max-width: $mobileContainer)
      margin-bottom: 24px
  &__tab-btn
    width: 98px
    height: 38px
    display: flex
    align-items: center
    justify-content: center
    border-radius: 6px
    font-family: "Inter", sans-serif
    font-weight: 500
    font-size: 16px
    letter-spacing: 0.03em
    text-align: center
    color: #fff
    transition: 0.2s
    &--active
      background: #d91a31
      &:hover
        box-shadow: 0 4px 89px rgba(211, 16, 39, .26)
  &__content, &__slider
    width: 100%
  .swiper__arrows
    max-width: 440px
    width: 100%
    position: absolute
    right: 15px
    bottom: 23%
    z-index: 2
    @media (max-width: 1300px)
      bottom: 100px
    @media (max-width: 1200px)
      max-width: 100%
      justify-content: center
      position: static
  &__slider
    width: 100%
    max-width: 1410px
    padding: 0 15px
    margin: 0 auto
    position: relative
  &__slide
    width: 100%
    &-in
      display: flex
      align-items: start
      gap: 80px
      @media (max-width: 1300px)
        gap: 30px
      @media (max-width: 1200px)
        flex-direction: column
        align-items: center
        gap: 0
  &__image-wrapper
    .explore__label
      display: none
      text-align: center
      margin-bottom: 24px
      @media (max-width: 1200px)
        display: block
  &__image
    max-width: 856px
    width: 100%
    @media (max-width: $mobileContainer)
      width: calc( 100% + 9px)
      margin-left: -9px
  &__info
    max-width: 440px
    min-width: 440px
    padding-top: 25px
    @media (max-width: 1300px)
      min-width: 360px
    @media (max-width: 1200px)
      min-width: 100%
      max-width: 100%
      margin-top: -25px
      padding-top: 0
  &__label
    margin-bottom: 65px
    font-family: "Inter", sans-serif
    font-weight: 600
    font-size: 16px
    letter-spacing: 0.03em
    color: #df243a
    @media (max-width: 1200px)
      display: none
  &__subtitle
    margin-bottom: 40px
    font-family: "Inter", sans-serif
    font-weight: 500
    font-size: 48px
    letter-spacing: -0.02em
    color: #fff
    @media (max-width: $mobileContainer)
      margin-bottom: 24px
      font-size: 32px

  &__description
    margin-bottom: 100px
    display: -webkit-box
    -webkit-line-clamp: 5
    -webkit-box-orient: vertical
    overflow: hidden
    text-overflow: ellipsis
    font-family: "Inter", sans-serif
    font-weight: 400
    font-size: 16px
    line-height: 187%
    letter-spacing: 0.03em
    color: #fff
    @media (max-width: 1200px)
      margin-bottom: 24px
    @media (max-width: $mobileContainer)
      -webkit-line-clamp: 7

.swiper-wrapper
  height: auto !important
  align-items: stretch !important

.project-benefits
  transition: 0.5s
  background: url("~@/assets/img/project-benefits-bg.png")
  +bg
  padding: 200px 0 250px
  overflow: hidden
  position: relative
  z-index: 2
  @media (max-width: $mobileContainer)
    padding: 40px 0 32px
  &__container
    max-width: 1360px
    margin: 0 auto
    padding: 0 15px
    @media (max-width: $mobileContainer)
      display: flex
      flex-direction: column
  .swiper__arrows
    @media (max-width: $mobileContainer)
      order: 1
  &__title
    width: calc( 100% - 146px)
    display: inline-block
    font-family: "Inter", sans-serif
    font-weight: 600
    font-size: 56px
    letter-spacing: -0.02em
    color: #fff
    @media (max-width: $mobileContainer)
      width: 100%
      font-weight: 500
      font-size: 36px
      letter-spacing: -0.03em
    &--highlight
      color: #df243a
  &__slider
    width: 100%
    margin-top: 30px
    @media (max-width: $mobileContainer)
      margin: 24px 0
      overflow: visible

  &__card
    background: #131319
    border-radius: 18px
    padding: 30px 24px 24px 30px
    display: flex
    flex-direction: column
    @media (max-width: $mobileContainer)
      padding: 30px 20px 20px 30px
    &-icon
      margin-bottom: 65px
      @media (max-width: $mobileContainer)
        margin-bottom: 44px
      img
        width: fit-content
    &-title
      margin-bottom: 24px
      font-family: "Inter", sans-serif
      font-weight: 600
      font-size: 24px
      letter-spacing: -0.04em
      color: #fff
      @media (max-width: $mobileContainer)
        font-size: 20px
    &-description
      margin-bottom: 15px
      font-family: "Inter", sans-serif
      font-weight: 400
      font-size: 16px
      line-height: 187%
      letter-spacing: 0.03em
      color: #fff
      opacity: 0.65

    &-action
      display: flex
      justify-content: end
      align-items: end
      flex: 1 1 100%
      img
        width: auto
.reviews
  transition: 0.5s
  background: #0e0d10
  padding: 225px 0 90px
  @media (max-width: $mobileContainer)
    padding: 40px 0 32px
  &__container
    max-width: 1360px
    margin: 0 auto
    padding: 0 15px
  &__title
    max-width: 680px
    margin: 0 auto 75px
    font-family: "Inter", sans-serif
    font-weight: 600
    font-size: 56px
    letter-spacing: -0.02em
    text-align: center
    color: #fff
    @media (max-width: $mobileContainer)
      margin-bottom: 32px
      font-weight: 500
      font-size: 36px
      letter-spacing: -0.03em
      br
        display: none
  &__slider
    overflow: visible
    margin-bottom: 75px
    @media (max-width: $mobileContainer)
      margin-bottom: 32px
  &__card
    background: #131319
    border-radius: 18px
    padding: 30px 30px 35px
    @media (max-width: $mobileContainer)
      padding: 25px 30px
    &-header
      display: flex
      justify-content: space-between
      margin-bottom: 32px

    &-avatar-wrapper
      position: relative
    &-status
      display: block
      width: 15px
      height: 15px
      border-radius: 50%
      background: #43a25a
      border: 3px solid #131318
      position: absolute
      right: 6px
      bottom: 6px
      z-index: 2
    &-tag
      width: 114px
      height: 30px
      display: flex
      align-items: center
      justify-content: center
      background: url("~@/assets/img/link-bg.png") no-repeat center/100%
      border-radius: 10px
      font-family: "Inter", sans-serif
      font-weight: 500
      font-size: 14px
      letter-spacing: -0.03em
      text-align: center
      color: #fff
    &-username
      margin-bottom: 16px
      font-family: "Inter", sans-serif
      font-weight: 600
      font-size: 24px
      letter-spacing: -0.04em
      color: #fff
      @media (max-width: $mobileContainer)
        font-size: 20px
    &-date
      font-family: "Inter", sans-serif
      font-weight: 400
      font-size: 15px
      line-height: 200%
      letter-spacing: -0.03em
      color: #5865f2
    &-text
      font-family: "Inter", sans-serif
      font-weight: 400
      font-size: 16px
      line-height: 187%
      letter-spacing: -0.03em
      color: #fff
  .swiper__arrows
    width: 100%
    justify-content: center
.news
  transition: 0.5s
  background: #0e0d10
  padding: 130px 0 145px
  overflow: hidden
  @media (max-width: $mobileContainer)
    padding: 40px 0 32px
  &__container
    max-width: 1360px
    margin: 0 auto
    padding: 0 15px
  &__title
    margin-bottom: 60px
    font-family: "Inter", sans-serif
    font-weight: 600
    font-size: 56px
    letter-spacing: -0.02em
    text-align: left
    color: #fff
    @media (max-width: $mobileContainer)
      margin-bottom: 32px
      font-weight: 500
      font-size: 36px
      letter-spacing: -0.03em
  &__slider
    @media (max-width: $mobileContainer)
      overflow: visible
  &__card
    background: #131319
    border-radius: 18px
    padding: 16px 16px 42px
    @media (max-width: $mobileContainer)
      padding: 16px 16px 35px
    &-image
      border-radius: 14px
      overflow: hidden
      margin-bottom: 30px
    &-content
      display: flex
      flex-direction: column
      gap: 24px
      padding: 0 15px
    &-title
      font-family: "Inter", sans-serif
      font-weight: 600
      font-size: 24px
      letter-spacing: -0.04em
      color: #fff
      @media (max-width: $mobileContainer)
        font-size: 20px
    &-date
      font-family: "Inter", sans-serif
      font-weight: 400
      font-size: 15px
      line-height: 200%
      letter-spacing: -0.03em
      color: rgba(255, 255, 255, 0.4)
    &-description
      font-family: "Inter", sans-serif
      font-weight: 400
      font-size: 16px
      line-height: 187%
      letter-spacing: -0.03em
      color: #fff
      @media (max-width: $mobileContainer)
        margin-bottom: 8px
    &-wrapper--button
      flex: 1 1 100%
      display: flex
      align-items: end
    &-button
      width: 96px
      padding: 10px 0
      border-radius: 10px
      background: #D31027 url("@/assets/img/link-news-bg.png") no-repeat center/100%
      font-family: "Inter", sans-serif
      font-weight: 500
      font-size: 14px
      line-height: 10px
      letter-spacing: -0.03em
      text-align: center
      color: #fff
      transition: 0.2s
      &:hover
        box-shadow: 0 4px 89px rgba(211, 16, 39, .26)
        transform: scale(1.02)
  .swiper__arrows
    width: 100%
    justify-content: center
    .swiper-button
      margin-top: 32px
      &.swiper-button-lock
        display: none !important
.footer-wrapper
  transition: 0.5s
  background: #0e0d10 url("@/assets/img/footer-bg.png") no-repeat center/cover
  padding: 130px 0 0
  @media (max-width: $mobileContainer)
    background: #0e0d10 url("@/assets/img/footer-mobile-bg.png") no-repeat center/cover
    padding: 60px 0 0
.footer__cta
  text-align: center
  margin-bottom: 65px
  @media (max-width: $mobileContainer)
    margin-bottom: 48px

  &-title
    padding: 0 15px
    font-family: "Inter", sans-serif
    font-weight: 600
    font-size: 56px
    letter-spacing: -0.02em
    text-align: center
    color: #fff
    margin-bottom: 48px
    @media (max-width: $mobileContainer)
      font-size: 36px

  &-button
    display: block
    padding: 24px 0px
    max-width: 254px
    width: 100%
    margin: 0 auto
    font-family: "Inter", sans-serif
    text-align: center
    font-weight: 500
    font-size: 16px
    border-radius: 10px
    transition: .3s

    &:hover
      transform: scale(1.02)
</style>
