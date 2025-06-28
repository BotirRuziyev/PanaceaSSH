<template>
  <div class="home-page">
    <TheHeader></TheHeader>
    <section
      class="welcom__section scroll-slider"
      :class="{
        'scroll-slider--passed': currentSection > 0,
        'scroll-slider--active': 0 === currentSection,
      }"
      ref="section0"
    >
      <div class="welcom__section--in">
        <video autoplay muted loop playsinline class="bg-video">
          <source src="@/assets/sound/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="main__info">
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
      </div>
    </section>
    <section
      class="explore scroll-slider"
      :class="{
        'scroll-slider--passed': currentSection > 1,
        'scroll-slider--active': 1 === currentSection,
      }"
      ref="section1"
    >
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
          v-if="activeTab === 'PVP'"
          :modules="swiperModules"
          :space-between="100"
          :effect="'fade'"
          :fadeEffect="{ crossFade: true, duration: 0 }"
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
              <p class="explore__label">{{ slide.label }}</p>
              <div class="explore__image-wrapper">
                <img
                  :src="slide.forestBackground"
                  :alt="'Slide ' + (index + 1)"
                  class="explore__image-bg"
                />
                <img
                  :src="slide.mainCharacter"
                  :alt="'Slide ' + (index + 1)"
                  class="explore__character"
                />
              </div>
              <div class="explore__info">
                <p class="explore__label">{{ slide.label }}</p>
                <h3 class="explore__subtitle">{{ slide.title }}</h3>
                <p class="explore__description">
                  {{ slide.description }}
                </p>
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
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <swiper
          v-else
          :modules="swiperModules"
          :space-between="100"
          :effect="'fade'"
          :fadeEffect="{ crossFade: true, duration: 0 }"
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
              <p class="explore__label">{{ slide.label }}</p>
              <div class="explore__image-wrapper">
                <img
                  :src="slide.forestBackground"
                  :alt="'Slide ' + (index + 1)"
                  class="explore__image-bg"
                />
                <img
                  :src="slide.mainCharacter"
                  :alt="'Slide ' + (index + 1)"
                  class="explore__character"
                />
              </div>
              <div class="explore__info">
                <p class="explore__label">{{ slide.label }}</p>
                <h3 class="explore__subtitle">{{ slide.title }}</h3>
                <p class="explore__description">
                  {{ slide.description }}
                </p>
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
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <section
      class="project-benefits scroll-slider"
      :class="{
        'scroll-slider--passed': currentSection > 2,
        'scroll-slider--active': 2 === currentSection,
      }"
      ref="section2"
    >
      <div class="project-benefits-in">
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
            <swiper-slide
              class="project-benefits__card"
              @click="isModal = true"
            >
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
            <swiper-slide
              class="project-benefits__card"
              @click="isModal = true"
            >
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
            <swiper-slide
              class="project-benefits__card"
              @click="isModal = true"
            >
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
            <swiper-slide
              class="project-benefits__card"
              @click="isModal = true"
            >
              <div class="project-benefits__card-icon">
                <img
                  src="@/assets/img/icons/icon-profile-sync.svg"
                  alt="Anticheat icon"
                />
              </div>
              <h3 class="project-benefits__card-title">Active admins.</h3>
              <p class="project-benefits__card-description">
                A beautiful, procedurally generated world awaits you, shrouded
                in mystery.
              </p>
              <div class="project-benefits__card-action">
                <img src="@/assets/img/icons/icon-arrow.svg" alt="More" />
              </div>
            </swiper-slide>
            <swiper-slide
              class="project-benefits__card"
              @click="isModal = true"
            >
              <div class="project-benefits__card-icon">
                <img
                  src="@/assets/img/icons/icon-puzzle.svg"
                  alt="Anticheat icon"
                />
              </div>
              <h3 class="project-benefits__card-title">Custom mods.</h3>
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
      </div>
    </section>
    <section
      class="reviews scroll-slider"
      :class="{
        'scroll-slider--passed': currentSection > 3,
        'scroll-slider--active': 3 === currentSection,
      }"
      ref="section3"
    >
      <div class="reviews__container">
        <h2 class="reviews__title" :style="titleStyle">
          No need to brag — let our <br />
          <span class="reviews__title--emphasis">players speak for us</span>
        </h2>

        <div class="reviews__slider-wrapper">
          <swiper
            ref="swiperRef"
            @slideChange="onSlideChange"
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
    <div
      class="scroll-slider"
      :class="{
        'scroll-slider--passed': currentSection > 4,
        'scroll-slider--active': 4 === currentSection,
      }"
      ref="section4"
    >
      <section class="news">
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
                  <img
                    :src="post.image"
                    :alt="post.title"
                    class="news__card-bg"
                  />
                  <img
                    :src="post.img"
                    alt="Character"
                    class="news__card-character"
                  />
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
      <section class="footer-wrapper">
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
    </div>

    <div class="modal" :class="{ show: isModal }">
      <div class="modal-in">
        <div class="modal__card-icon">
          <img
            src="@/assets/img/icons/icon-anticheat.svg"
            alt="Anticheat icon"
          />
          <button class="close-btn" @click="isModal = false">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17.7966" cy="17.7966" r="17.7966" fill="white" />
              <path
                d="M12.6804 21.0207L21.021 12.6801L22.9134 14.5724L14.5727 22.9131L12.6804 21.0207ZM12.6804 14.5724L14.5727 12.6801L22.9134 21.0207L21.021 22.9131L12.6804 14.5724Z"
                fill="#131318"
              />
            </svg>
          </button>
        </div>
        <h3 class="modal__card-title">Flexible delivery and pickup options</h3>
        <p class="modal__card-description">
          Get your new Apple products quickly and easily with 2-hour delivery
          from an Apple Store, free next day delivery, or convenient Apple
          pickup options
        </p>
        <a href="#" class="more-btn"
          >Learn More
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.79258 2.66194C7.5898 2.86187 7.57077 3.1778 7.73701 3.39946L7.78694 3.45742L11.2188 6.9375L2.4375 6.9375C2.12684 6.9375 1.875 7.18934 1.875 7.5C1.875 7.78676 2.08959 8.02341 2.36694 8.05812L2.4375 8.0625H11.2188L7.78694 11.5426C7.58701 11.7454 7.57247 12.0615 7.74184 12.2808L7.79258 12.3381C7.99537 12.538 8.31153 12.5525 8.53081 12.3832L8.58806 12.3324L12.9631 7.89492C13.161 7.69416 13.1775 7.3818 13.0125 7.16245L12.9631 7.10508L8.58806 2.66758C8.36995 2.44636 8.01381 2.44384 7.79258 2.66194Z"
              fill="#DF243A"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectFade } from "swiper/modules";
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
      isModal: false,
      activeTab: "PVP",
      swiperRef: null,
      slides: [
        {
          id: 1,
          forestBackground: require("@/assets/img/explore-slide-1.png"),
          mainCharacter: require("@/assets/img/explore-slide-1_1.png"),
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
          forestBackground: require("@/assets/img/explore-slide-2.png"),
          mainCharacter: require("@/assets/img/explore-slide-1_2.png"),
          label: "Key Features",
          title: "Conquer.",
          description: `A beautiful, procedurally generated world awaits you, 
shrouded in mystery. Venture into deep dark forests, 
climb snow-peaked mountains and discover what’s left 
of those who came before you. Take to the seas 
on a mighty longship, but be wary of sailing too far…`,
        },
        {
          id: 3,
          forestBackground: require("@/assets/img/explore-slide-3.png"),
          mainCharacter: require("@/assets/img/explore-slide-1_3.png"),
          label: "Key Features",
          title: "Fight.",
          description: `A beautiful, procedurally generated world awaits you, 
shrouded in mystery. Venture into deep dark forests, 
climb snow-peaked mountains and discover what’s left 
of those who came before you. Take to the seas 
on a mighty longship, but be wary of sailing too far…`,
        },
        {
          id: 4,
          forestBackground: require("@/assets/img/explore-slide-4.png"),
          mainCharacter: require("@/assets/img/explore-slide-1_4.png"),
          label: "Key Features",
          title: "Raid.",
          description: `A beautiful, procedurally generated world awaits you, 
shrouded in mystery. Venture into deep dark forests, 
climb snow-peaked mountains and discover what’s left 
of those who came before you. Take to the seas 
on a mighty longship, but be wary of sailing too far…`,
        },
        {
          id: 5,
          forestBackground: require("@/assets/img/explore-slide-5.png"),
          mainCharacter: require("@/assets/img/explore-slide-1_5.png"),
          label: "Key Features",
          title: "Not Vanilla.",
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
          image: require("@/assets/img/explore-slide-2.png"),
          img: require("@/assets/img/news-slide-1_2.png"),
          title: "DayZ Update 1.28",
          date: "June 3, 2025 11:45 pm EST",
          description:
            "We are happy to announce that the game update 1.28 has been released on all platforms.",
        },
        {
          id: 2,
          image: require("@/assets/img/explore-slide-3.png"),
          img: require("@/assets/img/news-slide-1_3.png"),
          title: "Community Spotlight - May 2025",
          date: "May 30, 2025 12:50 am EST",
          description:
            "Welcome back to the Community Spotlight! May was a busy month full of new maps...",
        },
        {
          id: 3,
          image: require("@/assets/img/explore-slide-5.png"),
          img: require("@/assets/img/news-slide-1_5.png"),
          title: "1.28 Experimental Release",
          date: "Apr 15, 2025 9:00 pm EST",
          description:
            "We're about to enter the public testing phase of game update 1.28...",
        },
      ],
      swiperModules: [Navigation, EffectFade],
      currentSection: 0,
      totalSections: 5,
      isAnimating: false,
      touchStartY: 0,
      touchEndY: 0,
      swiperInstance: null,
      activeIndex: 0,
    };
  },
  computed: {
    ...mapGetters(["USER"]),
    titleStyle() {
      const slidesCount = this.reviews.length - 1;
      // Avoid division by zero
      if (slidesCount === 0) return {};

      // Proportion between 0..1
      const k = this.activeIndex / slidesCount;

      // Scale: 1 to 1.9
      const scale = Math.min(1 + 1.8 * k, 2.8);

      // Opacity: 1 to 0.2
      const opacity = Math.max(1 - 2.2 * k, 0.1);

      return {
        transform: `scale(${scale})`,
        opacity: opacity,
        transition: "transform 0.6s cubic-bezier(.7,.25,.3,1), opacity 0.6s",
      };
    },
  },
  mounted() {
    this.GET_USER();
    window.addEventListener("wheel", this.handleWheel, { passive: false });
    window.addEventListener("touchstart", this.handleTouchStart, {
      passive: false,
    });
    window.addEventListener("touchend", this.handleTouchEnd, {
      passive: false,
    });
  },
  beforeUnmount() {
    window.removeEventListener("wheel", this.handleWheel);
    window.removeEventListener("touchstart", this.handleTouchStart);
    window.removeEventListener("touchend", this.handleTouchEnd);
  },
  methods: {
    ...mapActions(["GET_USER"]),
    handleWheel(e) {
      if (this.isAnimating) return;
      const sections = document.querySelectorAll(".scroll-slider");
      const current = sections[this.currentSection];

      // Pastga scroll
      if (e.deltaY > 0) {
        if (
          current.scrollTop + current.clientHeight >=
          current.scrollHeight - 6
        ) {
          if (this.currentSection < this.totalSections - 1) {
            this.isAnimating = true;
            this.currentSection++;
            sections[this.currentSection].scrollIntoView({
              behavior: "smooth",
            });
            setTimeout(() => (this.isAnimating = false), 900);
          }
          e.preventDefault();
        }
      }

      if (e.deltaY < 0) {
        if (current.scrollTop <= 0) {
          if (this.currentSection > 0) {
            this.isAnimating = true;
            this.currentSection--;
            sections[this.currentSection].scrollIntoView({
              behavior: "smooth",
            });
            setTimeout(() => (this.isAnimating = false), 900);
          }
          e.preventDefault();
        }
      }
    },
    handleTouchStart(e) {
      // faqat bitta fingerni olamiz
      this.touchStartY = e.touches[0].clientY;
    },
    handleTouchEnd(e) {
      this.touchEndY = e.changedTouches[0].clientY;
      this.handleTouchScroll();
    },
    handleTouchScroll() {
      if (this.isAnimating) return;
      const diff = this.touchStartY - this.touchEndY;
      if (Math.abs(diff) < 40) return; // kichik harakatga reaksiya qilmasin
      const sections = document.querySelectorAll(".scroll-slider");
      const current = sections[this.currentSection];

      // Pastga scroll (user yuqoriga surdi)
      if (diff > 0) {
        if (
          current.scrollTop + current.clientHeight >=
          current.scrollHeight - 6
        ) {
          if (this.currentSection < this.totalSections - 1) {
            this.isAnimating = true;
            this.currentSection++;
            sections[this.currentSection].scrollIntoView({
              behavior: "smooth",
            });
            setTimeout(() => (this.isAnimating = false), 900);
          }
        }
      }
      // Yuqoriga scroll (user pastga surdi)
      if (diff < 0) {
        if (current.scrollTop <= 0) {
          if (this.currentSection > 0) {
            this.isAnimating = true;
            this.currentSection--;
            sections[this.currentSection].scrollIntoView({
              behavior: "smooth",
            });
            setTimeout(() => (this.isAnimating = false), 900);
          }
        }
      }
    },
    onSlideChange(swiper) {
      this.activeIndex = swiper.activeIndex;
    },
  },
};
</script>

<style lang="sass">
.home-page
  width: 100%
  height: 100vh
  overflow: hidden
  scroll-behavior: smooth
  background: #050505

.scroll-slider
  width: 100%
  height: 100vh
  overflow-y: auto
  position: fixed
  top: 100%
  z-index: 1
  scroll-snap-align: start
  scroll-snap-stop: always
  transition: 0.5s
  &--passed
    top: 0
  &--active
    top: 0
  &::nth-child(1)
    z-index: 1
  &::nth-child(2)
    z-index: 2
  &::nth-child(3)
    z-index: 3
  &::nth-child(4)
    z-index: 4
  &::nth-child(5)
    z-index: 5
  &::nth-child(6)
    z-index: 6
.welcom__section
  transition: 0.5s

  &--in
    +flexa
    justify-content: center
    min-height: 100%
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
  padding: 135px 0 0
  // max-height: 948px
  background: #0c0c0f url("~@/assets/img/explore-bg.png")
  +bg
  @media (max-width: 1200px)
    padding-bottom: 135px
    overflow-x: hidden
    background-position: left top
  @media (max-width: $mobileContainer)
    padding: 140px 0 32px
  .swiper__arrows
    @media (max-width: 1200px)
      width: 100%
      justify-content: center
      margin: 0 auto

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
  &__slider
    width: 100%
    overflow-y: visible
    position: relative
  &__slide
    width: 100%
    opacity: 0
    transform: translateX(0)
    &:nth-child(1)
      .explore__character
        height: 117%
        @media (max-width: $mobileContainer)
          height: 97%
          bottom: 16px
          left: -10px
    &:nth-child(2)
      .explore__character
        height: 130%
        left: -296px
        @media (max-width: $mobileContainer)
          height: 100%
          bottom: -6px
          left: -90px
    &:nth-child(3)
      .explore__character
        height: 135%
        left: -168px
        @media (max-width: $mobileContainer)
          height: 103%
          bottom: -6px
          left: -53px
    &:nth-child(4)
      .explore__character
        height: 135%
        left: -172px
        @media (max-width: $mobileContainer)
          height: 103%
          bottom: -12px
          left: -40px
    &:nth-child(5)
      .explore__character
        height: 135%
        left: -143px
        @media (max-width: $mobileContainer)
          height: 103%
          bottom: -6px
          left: -35px
    &.swiper-slide-next
      transition: 0s !important
    &.swiper-slide-active
      opacity: 1
      z-index: 2
      .explore__image-bg,.explore__character, .explore__info
        transform: translateX(0)
        opacity: 1
    &-in
      max-width: 1410px
      padding: 0 15px
      margin: 0 auto
      display: flex
      align-items: start
      gap: 80px
      @media (max-width: 1300px)
        gap: 30px
      @media (max-width: 1200px)
        flex-direction: column
        align-items: center
        gap: 0
  .explore__label
    display: none
    text-align: center
    margin-bottom: 24px
  &__image-wrapper
    position: relative
    @media (max-width: 1200px)
      display: block
  &__image-bg
    max-width: 856px
    width: 100%
    border-radius: 18px
    transform: translateX(505px)
    opacity: 0
    transition: 1s
    @media (max-width: 1200px)
      margin-bottom: 45px
  &__character
    width: auto
    transform: translateX(700px)
    opacity: 0
    position: absolute
    left: -23px
    bottom: -180px
    transition: transform 1s, opacity 0.2s
    @media (max-width: $mobileContainer)
      height: 90% !important
      bottom: 16px !important
      left: -10px !important
  &__info
    max-width: 440px
    min-width: 440px
    padding-top: 25px
    transform: translateX(500px)
    opacity: 0
    transition: 1s
    @media (max-width: 1300px)
      min-width: 360px
    @media (max-width: 1200px)
      min-width: 100%
      max-width: 100%
      margin-top: -25px
      padding-top: 0
  &__label
    display: block
    margin-bottom: 65px
    font-family: "Inter", sans-serif
    font-weight: 600
    font-size: 16px
    text-align: left
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
  @media (max-width: $mobileContainer)
    padding: 140px 0 32px
  &-in
    overflow: hidden
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
    overflow: visible
    margin-top: 30px
    @media (max-width: 768px)
      width: calc(100% + 30px)
      margin-left: -15px
      padding: 0 15px
    @media (max-width: $mobileContainer)
      margin: 24px 0
      margin-left: -15px

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
    padding: 140px 0 32px
  &__container
    overflow: hidden
  &__slider-wrapper
    max-width: 1360px
    margin: 0 auto
    padding: 0 15px
  &__title
    max-width: 710px
    margin: 0 auto 75px
    padding: 0 15px
    transform-origin: top center
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
  padding: 130px 0 32px
  @media (max-width: $mobileContainer)
    padding: 140px 0 32px
  &__container
    max-width: 1360px
    margin: 0 auto
    padding: 0 15px
  &__title
    margin-bottom: 60px
    padding: 0 15px
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
    @media (max-width: 768px)
      width: calc(100% + 30px)
      margin-left: -15px
      padding: 0 15px
  &__card
    background: #131319
    border-radius: 18px
    padding: 16px 16px 42px
    &:hover
      .news__card-bg
        transform: scale(1.1)
      .news__card-character
        transform: translate(-15px, -15px)
    &:nth-child(1)
      .news__card-character
        height: 110%
    &:nth-child(2)
      .news__card-character
        height: 120%
        bottom: -83px
        left: 0
    &:nth-child(3)
      .news__card-character
        height: 110%
        bottom: -60px
        left: 60px
    @media (max-width: $mobileContainer)
      padding: 16px 16px 35px
    &-image
      border-radius: 14px
      overflow: hidden
      margin-bottom: 30px
      position: relative
    &-bg
      width: 100%
      height: 100%
      object-fit: cover
      transform: scale(1.3)
      transform-origin: center
      transition: 0.5s
    &-character
      width: auto
      position: absolute
      left: -11px
      bottom: -73px
      transition: 0.5s

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
        height: 0
.footer-wrapper
  transition: 0.5s
  background: #0e0d10 url("@/assets/img/footer-bg.png") no-repeat center/cover
  padding: 130px 0 0
  @media (max-width: $mobileContainer)
    background: #0e0d10 url("@/assets/img/footer-mobile-bg.png") no-repeat center/cover
    padding: 120px 0 0
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
.modal
  width: 100%
  height: 100%
  padding: 0 15px
  position: fixed
  top: 0
  left: 0
  backdrop-filter: blur(41.79999923706055px)
  background: rgba(0, 0, 0, 0.03)
  display: flex
  align-items: center
  justify-content: center
  z-index: 100
  opacity: 0
  visibility: hidden
  transition: 0.5s
  &.show
    opacity: 1
    visibility: visible
  &-in
    max-width: 633px
    margin: 0 auto
    background: #131319
    border-radius: 18px
    padding: 30px 32px 40px
    position: relative
  .close-btn
    position: absolute
    top: 24px
    right: 24px
    @media (max-width: $mobileContainer)
      top: 16px
      right: 16px
  &__card-icon
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 66px
    img
      width: auto
  &__card-title
    margin-bottom: 24px
    font-family: "Inter", sans-serif
    font-weight: 600
    font-size: 24px
    line-height: 133%
    letter-spacing: -0.04em
    color: #fff
    @media (max-width: $mobileContainer)
      font-size: 20px
  &__card-description
    margin-bottom: 32px
    font-family: "Inter", sans-serif
    font-weight: 400
    font-size: 16px
    line-height: 187%
    letter-spacing: 0.03em
    color: #fff
  .more-btn
    display: flex
    align-items: center
    gap: 16px
    font-family: "Inter", sans-serif
    font-weight: 400
    font-size: 16px
    line-height: 187%
    letter-spacing: 0.03em
    color: #df243a
</style>
