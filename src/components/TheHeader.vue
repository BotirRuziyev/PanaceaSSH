<template>
  <header>
    <div class="container">
      <router-link to="/"
        ><img src="../assets/img/img2.png" alt="Logo" class="logo"
      /></router-link>
      <nav>
        <ul class="menu" :class="{ 'menu-active': IsMenuOpen === true }">
          <li class="active">
            <router-link to="/">About</router-link>
          </li>
          <li>
            <router-link to="/store">Store</router-link>
          </li>
          <li>
            <a
              href="https://api.panaceadayz.com/v2/Player.SteamLogin"
              v-if="!USER.auth"
              >Log in with Steam</a
            >
            <router-link to="/Roulette" v-else>Roulette</router-link>
          </li>
        </ul>
      </nav>

      <div class="right_header">
        <a
          v-if="!USER.auth"
          class="log_button"
          href="https://api.panaceadayz.com/v2/Player.SteamLogin"
          >Account
          <img src="../assets/img/svg/icon_profile.svg" alt="IconProfile"
        /></a>
        <button
          class="user"
          v-else
          @click="IsLoginModalOpen = !IsLoginModalOpen"
        >
          <div class="user__info">
            <div class="user__name">
              {{ USER.name }}
              <img src="../assets/img/svg/arrow.svg" alt="arrow" />
            </div>
            <div class="user__balance">${{ USER.balance }}</div>
          </div>
          <!--              {{console.log(USER)}}-->
          <div class="user__img"><img :src="USER.img" alt="UserImg" /></div>
        </button>

        <button class="md__button" @click="OpenModal()"><span></span></button>

        <div
          class="modal__login"
          :class="{ modal__active: IsLoginModalOpen === true }"
        >
          <a
            v-if="USER.isAdmin"
            href="https://adm.panaceadayz.com/admin"
            class="modal__item"
          >
            <div class="item__name">Admin Panel</div>
            <div class="item__icon">
              <img src="../assets/img/svg/icon_user.svg" alt="ItemIcon" />
            </div>
          </a>
          <router-link to="/Profile" class="modal__item">
            <div class="item__name">Profile</div>
            <div class="item__icon">
              <img src="../assets/img/svg/icon_user.svg" alt="ItemIcon" />
            </div>
          </router-link>
          <a @click="focusOnInput" class="modal__item">
            <div class="item__name">Add funds</div>
            <div class="item__icon">
              <img src="../assets/img/svg/icon_moore.svg" alt="ItemIcon" />
            </div>
          </a>
          <button @click="performLogout()" class="modal__button">
            Logout
            <img src="../assets/img/svg/icon_exit.svg" alt="Logout icon" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const { useToast } = require("vue-toastification");
import NotifyModal from "@/components/NotifyModal";
export default {
  name: "TheHeader",
  computed: {
    ...mapGetters(["USER"]),
  },
  data: () => {
    return {
      IsLoginModalOpen: false,
      IsMenuOpen: false,
    };
  },
  watch: {
    IsMenuOpen(val) {
      if (val) {
        document.body.classList.add("hide");
      } else {
        document.body.classList.remove("hide");
      }
    },
  },
  mounted() {
    if (this.IsMenuOpen) {
      document.body.classList.add("hide");
    }
  },

  beforeUnmount() {
    document.body.classList.remove("hide");
  },
  methods: {
    focusOnInput() {
      this.$nextTick(() => {
        this.$router.push("/Profile").then(() => {
          this.$nextTick(() => {
            const inputElement = document.querySelector(".header__input");
            if (inputElement) {
              inputElement.focus();
            }
          });
        });
      });
    },
    OpenModal() {
      this.IsMenuOpen = !this.IsMenuOpen;
    },
    async performLogout() {
      const toast = useToast();
      try {
        await this.LogOut();
        this.IsLoginModalOpen = false;
      } catch (error) {
        toast.error(
          {
            component: NotifyModal,
            props: {
              message: error.message,
              type: "Error!",
            },
          },
          {
            position: "top-right",
            timeout: 2000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: false,
          }
        );
      }
    },
    ...mapActions(["LogOut"]),
  },
};
</script>

<style lang="sass" scoped>
header
  padding: 42px 0px
  position: fixed
  top: 0
  width: 100%
  z-index: $modalIndex
  @media (max-width: $mobileContainer)
    padding: 24px 0

  .container
    +flexa
    justify-content: space-between
    padding: 0 15px

.logo
  width: 180px

.menu
  +flexa

  li
    margin-right: 58px
    font-weight: 600
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none

    a
      transition: .4s
      opacity: 0.65
      position: relative
      font-family: "Inter", sans-serif
      font-weight: 700
      font-size: 16px
      letter-spacing: 0.03em
      color: #fff

      &::before
        content: ""
        position: absolute
        width: 100%
        bottom: -12px
        height: 5px
        background: -webkit-gradient(linear, left top, right top, from(#D31027), to(#EA384D))
        background: linear-gradient(90deg, #D31027 0%, #EA384D 100%)
        border-radius: 10px
        transition: .4s
        transform: scaleX(0)

    &:last-child
      margin-right: 0px

    &:hover
      a
        opacity: 1

        &::before
          transform: scaleX(1)

  .router-link-active
    opacity: 1

    &::before
      transform: scaleX(1)

.log_button
  +flexa
  justify-content: space-between
  background: linear-gradient(90deg, #D31027 0%, #EA384D 100%)
  width: 197px
  height: 53px
  padding: 0 16px
  border-radius: 4px
  transition: 0.3s all
  font-family: "Inter", sans-serif
  font-weight: 700
  font-size: 14px
  letter-spacing: 0.03em
  color: #fff

  img
    width: 14px

  &:hover
    box-shadow: 0px 4px 89px rgba(225, 40, 62, 0.26)
    transform: scale(1.02)

.user
  +flexa
  cursor: pointer

  &__info
    display: flex
    flex-direction: column
    align-items: flex-end

  &__name
    +flexa
    font-size: 14px
    font-weight: 600
    margin-bottom: 5px

    img
      margin-left: 5px
      width: 11px

  &__balance
    opacity: 0.76
    font-size: 12px
    font-weight: 500

  &__img
    width: 53px
    height: 53px
    margin-left: 12px

    img
      border-radius: 10px

.right_header
  position: relative

.modal__login
  position: absolute
  top: 77px
  right: 0
  z-index: $modalIndex
  +bg
  background-image: url(~@/assets/img/dropdown_bg.png)
  padding: 13px 15px
  border-radius: 10px
  width: 185px
  transform: scale(0)
  transition: .3s

  img
    width: 13px

.modal__active
  transform: scale(1)

.modal__item
  +flexa
  justify-content: space-between
  margin-bottom: 9px
  opacity: 0.32
  transition: .3s

  &:hover
    opacity: 1

  .item__name

    font-size: 14px
    font-weight: 500

.modal__button
  +flexa
  font-size: 14px
  font-weight: 500
  width: 100%
  background: linear-gradient(90deg, $red 0%, $pink 100%)
  border-radius: 4px
  position: relative
  padding: 12px 16px
  transition: 0.3s all

  img
    position: absolute
    right: 16px
    top: 50%
    transform: translateY(-50%)

  &:hover
    box-shadow: 0px 4px 89px rgba(225, 40, 62, 0.26)
    transform: scale(1.02)

.md__button
  display: none

@media screen and (max-width: $tabletContainer)
  .container
    max-width: 950px

@media screen and (max-width: $smalltabletContainer)
  .router-link-exact-active
    z-index: $absIndex
  .right_header
    +flexa
    z-index: $absIndex
  .container
    padding: 0px 15px
  .menu
    display: block
    transform: scale(0)
    position: absolute
    z-index: $modalIndex
    top: 0
    left: 0
    width: 100%
    height: 100vh
    +flexa
    justify-content: center
    flex-direction: column
    backdrop-filter: blur(10px)
    transition: .4s

    li
      margin-bottom: 23px
      margin-right: 0px

    &-active
      transform: scale(1)
  .md__button
    margin-left: 15px
    display: block
    width: 30px
    height: 20px
    position: relative

    span
      width: 100%
      height: 2px
      background: $white
      display: block

    &::before, &::after
      width: 100%
      height: 2px
      background: $white
      position: absolute
      content: ""
      left: 0px
      width: 100%
      height: 2px
      background: $white

    &::before
      bottom: 0px

    &::after
      top: 0px

@media screen and (max-width: $mobileContainer)
  .user__img
    width: 30px
    height: 30px
  .logo
    width: 90px
</style>
