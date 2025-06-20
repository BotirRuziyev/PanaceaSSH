<template>
  <TheHeader></TheHeader>
  <section class="welcom__section">
    <div class="main__info">
      <aos-vue animation="fade-up" :delay="400" :offset="-250"><h1 class="info__descript section__title">We are "Apple"
        in the world of Dayz. We invest endless amount of time and effort in our creation. We work solely off our own
        passion and dedication.</h1></aos-vue>
      <aos-vue animation="fade-up" :delay="1000" :offset="-250">
        <div class="info__buttons">
          <a href="https://api.panaceadayz.com/v2/Player.SteamLogin" class="log__steam" v-if="!USER.auth">Log in with
            Steam</a>
          <router-link to='profile' class="log__steam" v-else>Profile</router-link>
          <a href="https://discord.gg/panacea" target="_blank" class="discord">Discord</a>
        </div>
      </aos-vue>
      <div class="mouse"><img src="../assets/img/svg/icon_mouse.svg" alt="Mouse"></div>
    </div>
  </section>
  <TheMonit></TheMonit>
  <TheTabs></TheTabs>
  <TheFooter></TheFooter>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import TheHeader from '@/components/TheHeader.vue';
import TheMonit from '@/components/TheMonit.vue';
import TheTabs from '@/components/TheTabs.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'HomeView',
  components: {TheHeader, TheMonit, TheTabs, TheFooter},
  computed: {
    ...mapGetters([
      'USER'
    ]),
  },
  mounted() {
    this.GET_USER()
  },
  methods: {
    ...mapActions([
      'GET_USER'
    ])
  }

}
</script>
<style lang="sass" scoped>
.welcom__section
  background-image: url("~@/assets/img/is_bg.png")
  +bg
  background-position: center top
  height: 100vh
  +flexa
  justify-content: center
  position: relative

.main__info
  .info__descript
    max-width: 560px
    text-align: center

  .info__buttons
    +flexa
    margin: 0 auto
    margin-top: 73px
    max-width: 531px
    width: 100%
    justify-content: space-between

    a
      padding: 24px 0px
      width: 254px
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
  .info__buttons
    flex-direction: column
  .discord
    margin-top: 15px
</style>
