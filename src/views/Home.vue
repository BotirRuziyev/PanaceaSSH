<template>
  <div class="home-page">
    <TheHeader></TheHeader>
    <section class="welcom__section">
      <video autoplay muted loop playsinline class="bg-video">
        <source src="@/assets/sound/home-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="main__info">
        <aos-vue animation="fade-up" :delay="400" :offset="-250"
          ><h1 class="info__descript section__title">
            We are «Apple» in the world of Dayz. <br />
            We invest endless amount of time and effort in our creation. <br />
            We work solely off our own passion and dedication.
          </h1></aos-vue
        >
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
            <a href="https://discord.gg/panacea" target="_blank" class="discord"
              >Discord</a
            >
          </div>
        </aos-vue>
        <div class="mouse">
          <img src="../assets/img/svg/icon_mouse.svg" alt="Mouse" />
        </div>
      </div>
    </section>
    <TheFooter style="display: none"></TheFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "HomeView",
  components: { TheHeader, TheFooter },
  computed: {
    ...mapGetters(["USER"]),
  },
  mounted() {
    this.GET_USER();
  },
  methods: {
    ...mapActions(["GET_USER"]),
  },
};
</script>

<style lang="sass" scoped>
.welcom__section
  min-height: 100vh
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
</style>
