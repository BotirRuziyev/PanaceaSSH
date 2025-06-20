<template>
  <div>
    <TheHeader/>
    <main>
      <div class="container">
        <aside>
          <div class="profile">
            <div class="profile__logo"><img :src="USER.img" alt="user"></div>
            <div class="profile__name" style="display: flex;flex-direction: row;align-content: center;justify-content: center;align-items: center;">
              <img src="../assets/img/icons/steam-logo.svg" style="width: 30px;margin-right: 5px;" alt="steam-logo">{{ USER.name }}</div>
            <div v-if="!DISCORD_INFO.auth">
              <div class="profile__name" style="display: flex;flex-direction: row;align-content: center;justify-content: center;align-items: center;">
                <img src="../assets/img/icons/discord-logo.svg" style="width: 30px;margin-right: 5px;" alt="discord-logo">
                <a :href="DISCORD_LINK">Link my discord</a>
              </div>
            </div>
            <div v-else>
              <div class="profile__name" style="display: flex;flex-direction: row;align-content: center;justify-content: center;align-items: center;">
                <img src="../assets/img/icons/discord-logo.svg" style="width: 30px;margin-right: 5px;" alt="discord-logo">{{ DISCORD_INFO.data.name }}
              </div>
            </div>

            <!--            <div class="profile__level">Level {{ userLevel }}</div>-->
            <div class="level_container">
              <div class="progress" :style="{ width: levelPercents + '%' }"></div>
              <div class="level">Level {{ userLevel }}</div>

            </div>
            <div class="deposit_container">
              <form>
                <input ref="input_deposit" class="header__input" v-model="cost" type="number" min="0"
                       placeholder="Deposit money" @input="toggleButton" inputmode="numeric">
                <button @click="fetchCost(cost)" class="header__button" :class="{ 'show-button': hasValue }"
                        type="button">Deposit
                </button>
              </form>
            </div>

          </div>
          <div class="tabs">
            <button
                :class="{'tabs__item-active': TabsOpen === 1}"
                @click="this.TabsOpen = 1"
                class="tabs__item " id="tabs__item-1">Profile <img src="../assets/img/svg/icon_arrow_nav.svg"
                                                                   alt="iconArrowNav"></button>
            <button
                :class="{'tabs__item-active': TabsOpen === 2}"
                @click="this.TabsOpen = 2"
                class="tabs__item" id="tabs__item-2">Purchases <img src="../assets/img/svg/icon_arrow_nav.svg"
                                                                    alt="iconArrowNav"></button>
            <button
                :class="{'tabs__item-active': TabsOpen === 3}"
                @click="this.TabsOpen = 3"
                class="tabs__item" id="tabs__item-3">Purchase History <img src="../assets/img/svg/icon_arrow_nav.svg"
                                                                           alt="iconArrowNav"></button>
            <button
                :class="{'tabs__item-active': TabsOpen === 4}"
                @click="this.TabsOpen = 4"
                class="tabs__item" id="tabs__item-4">Promocodes <img src="../assets/img/svg/icon_arrow_nav.svg"
                                                                     alt="iconArrowNav"></button>
            <button
                :class="{'tabs__item-active': TabsOpen === 5}"
                @click="this.TabsOpen = 5"
                class="tabs__item" id="tabs__item-5">Subscriptions <img src="../assets/img/svg/icon_arrow_nav.svg"
                                                                        alt="iconArrowNav"></button>
            <button class="Logout" @click="performLogout">Logout</button>
            <p class="steam">SteamID: {{ USER.SteamId }}</p>
          </div>
        </aside>

        <div class="main__block">
          <div v-if="TabsOpen === 1">
            <div class="profile__statistic-header">
              <CustomSelect
                  :options="serverNames"
                  :default="serverNames[0]"
                  class="select_server"
                  @change="selected = $event"
              />

            </div>
            <div class="block__item stats">
              <VStatsItem
                  v-for="stat in filteredStats"
                  :key="stat.id"
                  :StatsItem="stat"
              ></VStatsItem>
            </div>
          </div>
          <div class="block__item promo" v-if="TabsOpen === 2">
            <VPurchases/>
          </div>
          <div class="block__item" v-if="TabsOpen === 3">
            <PurchasesHistory/>
          </div>
          <div class="block__item" v-if="TabsOpen === 4">
            <VPromo/>
          </div>
          <div class="block__item" v-if="TabsOpen === 5">
            <VSubscriptions/>
          </div>
        </div>
      </div>
      <VPaymentModal :IsOpen="IsDonateModalOpen" :cost="cost" v-on:CLoseModal="CLoseModal"/>
    </main>

    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue';
import {mapActions, mapGetters} from 'vuex';
import VStatsItem from '@/components/VStatsItem.vue';
import VPurchases from '@/components/VPurchases.vue';
import VSubscriptions from '@/components/VSubscriptions.vue';
import VPromo from '@/components/VPromo.vue';
import PurchasesHistory from "@/components/PurchasesHistory";
import CustomSelect from '@/components/CustomSelect2.vue'
import NotifyModal from "@/components/NotifyModal";
import VPaymentModal from "@/components/VPaymentModal";
const {useToast} = require("vue-toastification");

export default {
  name: "TheProfile",
  components: {
    PurchasesHistory,
    TheHeader,
    TheFooter,
    VStatsItem,
    VPurchases,
    VSubscriptions,
    VPromo,
    CustomSelect,
    VPaymentModal
  },
  mounted() {
    const toast = useToast();
    const params = this.$route.query;
    if (params.paymentsuccess === 'true') {
      toast.success({
        component: NotifyModal,
        props: {
          message: 'Balance has been successfully update',
          type: 'Success!'
        },
      }, {
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
      });
      setTimeout(function() {
        window.location = '/profile';
      }, 5000);
    }
    if(params.paymentsuccess === 'false') {
      toast.error({
        component: NotifyModal,
        props: {
          message: 'In payment has been error!',
          type: 'Error!'
        },
      }, {
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

      });
      setTimeout(function() {
        window.location = '/profile';
      }, 5000);
    }
    this.GET_USER()
    this.GET_DISCORD_REDIRECT_URI()
    this.GET_STATS()
        .then(() => {
          if (this.serverNames.length > 0) {
            this.selected = this.serverNames[0];
          }
        })
        .catch((error) => {
          toast.error({
            component: NotifyModal,
            props: {
              message: error.message,
              type: 'Error!'
            },
          }, {
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

          });
        });
  },
  methods: {
    toggleButton() {
      this.showButton = this.cost.length > 0;
    },
    ...mapActions([
      'GET_STATS',
      'GET_USER',
      'GET_DISCORD_REDIRECT_URI',
      'LogOut'
    ]),
    fetchCost(cost) {
      const toast = useToast();
      if (cost <= 0) {
        toast.error({
          component: NotifyModal,
          props: {
            message: 'Cost cannot be 0 or smaller (empty)',
            type: 'Error!'
          },
        }, {
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
        });
      } else {
        this.IsDonateModalOpen = true;
      }
    },
    CLoseModal() {
      this.IsDonateModalOpen = false
    },
    async performLogout() {
      try {
        await this.LogOut();
        this.IsLoginModalOpen = false;
      } catch (error) {
        console.error('Error in logout:', error);
      }
    },
  },

  computed: {
    ...mapGetters([
      'STATS',
      'USER',
      'DISCORD_LINK',
      'DISCORD_INFO'
    ]),
    hasValue() {
      return this.cost !== '';
    },
    serverNames() {
      if (Array.isArray(this.STATS) && this.STATS.length > 0) {
        return this.STATS.map(server => server.server);
      } else {
        return [];
      }
    },
    userLevel() {
      const selectedServer = this.selected;
      const serverStats = this.STATS ? this.STATS.find(server => server.server === selectedServer) : null;
      return serverStats ? serverStats.level : 0;
    },
    levelPercents() {
      const selectedServer = this.selected;
      const serverStats = this.STATS ? this.STATS.find(server => server.server === selectedServer) : null;
      return serverStats ? serverStats.progress : 0;
    },
    filteredStats() {
      const selectedServer = this.selected;
      const serverStats = this.STATS ? this.STATS.find(server => server.server === selectedServer) : null;
      return serverStats ? serverStats.stats : [];
    }
  },
  data: () => {
    return {
      TabsOpen: 1,
      cost: "",
      IsDonateModalOpen: false,
      selected: null,
      showButton: false,
    }
  }
}

</script>
<style scoped>
.level_container {
  width: 100%;
  height: 39px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 14px;
  background: -webkit-gradient(linear, left top, right top, from(rgba(211, 16, 39, 0.2)), to(rgba(234, 56, 77, 0.2)));
  background: linear-gradient(90deg, rgba(211, 16, 39, 0.2) 0%, rgba(234, 56, 77, 0.2) 100%);
  border-radius: 10px;
}

.level_container .progress {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 10px;
  background: -webkit-gradient(linear, left top, right top, from(#D31027), to(#EA384D));
  background: linear-gradient(90deg, #D31027 0%, #EA384D 100%);
}

.level_container .level {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  color: #FFFFFF;
  z-index: 2;
  text-align: center;
  position: relative;
}
</style>
<style lang="sass" scoped>
.select_server
  margin-bottom: 10px

.container
  display: flex

header
  position: static !important

aside
  width: 240px
  margin-right: 39px

.profile
  &__logo
    width: 240px
    height: 240px
    margin-bottom: 18px

    img
      border-radius: 10px

  &__name
    width: 100%
    font-weight: 600
    font-size: 16px
    margin-bottom: 10px
    border-radius: 10px
    background-image: url(~@/assets/img/name_bg.png)
    background: linear-gradient(90deg, rgb(255 0 0 / 20%), rgb(0 17 255 / 20%))
    +bg
    text-align: center
    padding: 15px 0px
    
    &:hover
      background: linear-gradient(90deg, rgb(255 0 0 / 100%), rgb(0 17 255 / 100%))

  &__level
    margin-bottom: 14px
    background: linear-gradient(90deg, rgba(211, 16, 39, 0.2) 0%, rgba(234, 56, 77, 0.2) 100%)
    border-radius: 10px
    font-size: 14px
    text-align: center
    padding: 11px 0px

.tabs
  display: flex
  flex-direction: column
  align-items: flex-start
  border-radius: 10px
  padding: 21px 11px
  padding-bottom: 14px
  background-image: url(~@/assets/img/profile_menu_bg.png)
  +bg

  &__item
    margin-bottom: 10px
    padding: 11px 14px
    font-size: 14px
    font-weight: 500
    color: rgba(255, 255, 255, 0.6)
    width: 100%
    text-align: left
    position: relative
    transition: .3s
    border-radius: 10px

    &:hover
      background: linear-gradient(90deg, #D31027 0%, #EA384D 100%)
      color: rgba(255, 255, 255, 1)

      img
        width: 12px

    img
      position: absolute
      width: 0px
      right: 14px
      top: 50%
      transform: translateY(-50%)
      transition: .3s

    &-active
      background: linear-gradient(90deg, #D31027 0%, #EA384D 100%)
      color: rgba(255, 255, 255, 1)

      img
        width: 12px

.main__block
  width: 100%

.stats
  display: grid
  -ms-grid-columns: 23.04% 23.04% 23.04% 23.04%
  grid-template-columns: 23.04% 23.04% 23.04% 23.04%
  grid-gap: 2.61%

.Logout
  margin: 25px auto
  border-radius: 10px
  background: url(~@/assets/img/exit_bg_btn.png)
  +bg
  font-weight: 500
  font-size: 16px
  padding: 13px 61px
  transition: .3s all

  &:hover
    background: linear-gradient(90deg, $red 0%, $pink 100%)

.steam
  font-size: 9px
  font-weight: 500
  text-align: center
  width: 100%

.deposit_container
  form
    display: flex
    flex-direction: column

@media screen and (max-width: $smalltabletContainer)
  .stats
    grid-template-columns: 48% 48%
    grid-gap: 16px

@media screen and (max-width: $mobileContainer)
  .stats
    grid-template-columns: 100%
    grid-gap: 16px

@media screen and (max-width: 500px)
  .main__block
    margin-top: 60px
  .Logout
    width: 100%
  .container
    flex-direction: column
    align-items: center
  .stats
    margin-top: 30px
  aside
    width: 100%
    margin-right: 0px
  .profile__logo
    margin: 0 auto
    margin-bottom: 18px

input[type="number"]
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button
    -webkit-appearance: none

  &:hover, &:focus
    appearance: none
    -moz-appearance: textfield

.header__input
  text-align: center
  font-weight: 500
  font-size: 12px
  background: linear-gradient(90deg, rgba(211, 16, 39, 0.2) 0%, rgba(234, 56, 77, 0.2) 100%)
  border-radius: 10px
  border: 1px solid transparent
  padding: 15px 17px

  &:focus
    border: 1px solid $red

.profile__statistic-header
  display: flex
  justify-content: space-between

.header__button
  padding: 15px
  opacity: 0
  display: none
  transform: translateY(10px)
  background: linear-gradient(90deg, #D31027 0%, #EA384D 100%)
  border-radius: 8px
  font-weight: 500
  font-size: 14px
  transition: 0.3s all
  animation: slideIn 0.3s ease-in-out
  margin-top: 10px

  &:hover
    transform: scale(1.05)

.show-button
  opacity: 1
  display: block
  transform: translateY(0)

@keyframes slideIn
  from
    transform: translateY(10px)
    opacity: 0
  to
    transform: translateY(0)
    opacity: 1

@media screen and (max-width: $mobileContainer)
  .header__button
    width: 100%
    margin-top: 10px
  .header__input
    width: 100%
    margin-right: 0
</style>