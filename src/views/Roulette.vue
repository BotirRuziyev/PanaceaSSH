<template>
  <div>
    <TheHeader></TheHeader>
    <main>
      <section class="roulette">
        <div class="container">
          <div class="info__title">
            <div class="info__container">
              <img class="min__logo" src="../assets/img/logo-2.png" alt="LogoMin">
              <h1 class="section__title">Cases</h1>
            </div>
            <div class="info__container">
              <span class="info__timer-header header_chanc">The roulette is resetting in {{ formattedTime(time_remaining) }} <img src="../assets/img/icons/excl.svg" style="width: 12px;margin-right: 5px;"
                  v-tooltip.top="'All your time spent on the server is reset once a day to prevent abuse of the system.'"></span>
            </div>

          </div>
          <div class="game_container">
            <RouletteMain/>
          </div>
        </div>
      </section>
      <section class="live">
        <div class="container">
          <div class="live__dropp">
            <div class="drop__item">
              <div class="item__img"><img src="../assets/img/svg/icon_users.svg" alt="DropItem"></div>
              <div class="item__title">LIVE DROP</div>
              <div class="item__count">
                <div>
                </div>
                {{ LIVE_USERS }}
              </div>
            </div>
            <VRouletteItem
                v-for="RouletteItems in LIVE_ITEMS"
                :key="RouletteItems.id"
                :RouletteItems="RouletteItems"
            >{{ RouletteItems.chance }}%
            </VRouletteItem>
          </div>
        </div>
      </section>
      <section class="items">
        <div class="container">
          <div class="items__header">
            <div class="header__title">
              <div class="title__img"><img src="../assets/img/svg/icon_arrow_items.svg" alt="IconArrowItems"></div>
              <h2 class="title">Possible Winnings</h2>
            </div>
            <div class="header_chanc">Free spin for every four (4) hours played on the server.</div>
          </div>
          <div class="items__main">

            <VRouletteItem
                v-for="RouletteItems in ITEMS"
                :key="RouletteItems.id"
                :RouletteItems="RouletteItems"
            ></VRouletteItem>
          </div>
        </div>
      </section>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>

import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import {mapActions, mapGetters} from 'vuex';
import VRouletteItem from '@/components/VRouletteItem.vue';
import RouletteMain from "@/components/RouletteMain";


export default {

  name: "TheRoulette",
  components: {RouletteMain, TheHeader, TheFooter, VRouletteItem},

  mounted() {
    this.GET_USER()
    this.GET_LIVE_ITEMS()
    this.GET_USERS_IN_LIVE();
    this.GET_TIMER_ROULETTE();
  },
  sockets: {
    "livedrop.online": function (data) {
      this.$store.commit('SET_LIVE_USERS', data.count);
    }
  },
  data() {
    return {
      IsModalOpen: false,
      time_remaining: null,
    }
  },
  methods: {
    formattedTime(totalSeconds) {
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      return `${days} d. ${hours} h. ${minutes} min. ${seconds} s.`;
    },
    setTimerData(){
      this.time_remaining = this.ROULETTE_TIME_REMAINING;
    },
    countDownTimer () {
      if (this.time_remaining > 0) {
        setTimeout(() => {
          this.time_remaining -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
    ...mapActions([
      'GET_USER',
      'GET_LIVE_ITEMS',
      'GET_USERS_IN_LIVE',
      'GET_TIMER_ROULETTE'
    ]),
  },
  created () {
    this.setTimerData()
    this.countDownTimer()
  },
  computed: {

    ...mapGetters([
      'ITEMS',
      'LIVE_ITEMS',
      'LIVE_USERS',
      'ROULETTE_TIME_REMAINING'
    ]),

  },

}
</script>
<style lang="sass" scoped>
header
  position: static !important

section.items
  margin-top: 66px

.items__main
  width: 100%
  display: grid
  grid-template-columns: 15.33% 15.33% 15.33% 15.33% 15.33% 15.33%
  grid-gap: 1.84%
  margin-top: 70px

.items__header
  +flexa
  justify-content: space-between

  .title
    font-weight: 500
    font-size: 16px

.header__title
  +flexa

  .title__img
    width: 24px
    margin-right: 8px

.header_chanc
  font-weight: 500
  color: rgba(255, 255, 255, 0.7)

.drop__item
  +flexa
  +bg
  flex-direction: column
  background-image: url(~@/assets/img/live_block.png)
  width: 202px
  justify-content: center
  border-radius: 10px
  max-height: 215px

  .item__img
    width: 38px

  .item__title
    font-weight: 600
    font-size: 16px
    margin-top: 14px

  .item__count
    margin-top: 11px
    background: linear-gradient(90deg, rgba(211, 16, 39, 0.2) 0%, rgba(234, 56, 77, 0.2) 100%)
    border-radius: 10px
    padding: 10px 17px
    +flexa

    div
      width: 7px
      height: 7px
      background: $red
      border-radius: 100%
      display: block
      margin-right: 10px

.live
  max-width: 100%
  overflow-x: hidden

.live__dropp
  display: flex
  justify-content: space-between
  flex-wrap: nowrap
  min-width: 1324px

  .roulette__item
    width: 211px
    min-width: 211px

@media screen and (max-width: $tabletContainer)
  .items__main
    grid-template-columns: 23.52% 23.52% 23.52% 23.52%
    grid-gap: 1.94%

@media screen and (max-width: $mobileContainer)
  .items__main
    grid-template-columns: 48% 48%
    grid-gap: 15px
  .items__header
    flex-direction: column
    text-align: center
</style>