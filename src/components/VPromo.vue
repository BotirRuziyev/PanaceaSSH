<template>
  <section class="promo">
    <div class="promo__header">
        <div class="header__input">
            <input 
            v-model="promo_code"
            type="text" 
            name="Promo" 
            placeholder="Promo code">
            <CustomSelect
            :options="serverNames"
            :default="serverNames[0]"
            class="select_server"
            @change="selected = $event"
            >
            </CustomSelect>
        </div>
        <button 
        @click="checkPromo"
        class="header__button"
        >Activate</button>
    </div>
    <div class="promo__titles">
        <div class="titles__item item-1">Server</div>
        <div class="titles__item item-2">Promo Code</div>
        <div class="titles__item item-3">Amount</div>
        <div class="titles__item item-4">Date</div>
    </div>
    <div class="promo__main">
        <VPromoItem
        v-for="item in PROMO_CODES"
        :key="item.id"
        :PromoItem="item"
        :CloseModal="CloseModal"
        >
        </VPromoItem>
    </div>
  </section>
  <PromoModal 
  :Promocode="promo_code"
  :IsModalOpen="IsModalOpen"
  :information="promoModalInfo"
  v-on:CloseModal="CloseModal"
  ></PromoModal>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PromoModal from './PromoModal.vue';
import VPromoItem from './VPromoItem.vue';
import CustomSelect from '@/components/CustomSelect2.vue'
import NotifyModal from "@/components/NotifyModal";
const {useToast} = require("vue-toastification");
export default {

    name: "ThePromo",
    mounted() {
        this.GET_ALL_PROMO_CODES()
        this.selected = this.serverNames[0];
    },
    data: () => {
        return {
            IsModalOpen: false,
            promo_code: "",
            selected: null,
            message: '',
            IsNotifyModalOpen: false,
            typeNotifyModal: '',
            promoModalInfo: []
        }
    },
    methods: {

        ...mapActions([
            'GET_ALL_PROMO_CODES'
        ]),
        CloseNotifyModal() {
          this.IsNotifyModalOpen = false;
        },
        //Здесь идет проверка на правильность/неправльность промокода. В случае успеха меняем на true
        checkPromo(){
          const serverObject = this.STATS.find(server => server.server === this.selected);
          const toast = useToast();

          if (!serverObject) {
            toast.error({
              component: NotifyModal,
              props: {
                message: 'Selected server not found',
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
            return;
          }

          const serverId = serverObject.serverid;

          const requestData = {
            code: this.promo_code,
            server_id: serverId,
          };
          console.log(requestData)
          const requestConfig = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          };

          (async () => {
            try {
              const response = await this.axios.post(
                  "https://api.panaceadayz.com/v2/Player.preActivatePromocode",
                  requestData,
                  requestConfig
              );

              // Handle the response here (e.g., update state)
              // console.log('Response:', response);

              if(response.data.status === 'error'){
                toast.error({
                  component: NotifyModal,
                  props: {
                    message: response.data.message,
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
                this.IsModalOpen = true;
                this.promoModalInfo = response.data;
                var body = document.body;
                body.classList.toggle('openBody');
              }
            } catch (error) {
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
            }
          })();
        },
        CloseModal(){
            var body = document.body
            body.classList.remove('openBody')
            this.IsModalOpen = false
        }
    },
    computed: {
        ...mapGetters([
            'PROMO_CODES','STATS', 'JWT'
        ]),
      serverNames() {
        return this.STATS.map(server => server.server);
      },
    },
    components: { VPromoItem, PromoModal,CustomSelect }
}
</script>

<style lang="sass" scoped>
.promo__header
    +flexa
    justify-content: space-between
    input
        margin-right: 15px
        text-align: center
        font-weight: 500
        font-size: 12px
        background: linear-gradient(90deg, rgba(211, 16, 39, 0.2) 0%, rgba(234, 56, 77, 0.2) 100%)
        border-radius: 10px
        padding: 16px 18px
        border: 1px solid transparent
        &:focus
            border: 1px solid $red
    select
        text-align: center
        font-weight: 500
        font-size: 12px
        border: none
        outline: none
        background: linear-gradient(90deg, rgba(211, 16, 39, 0.2) 0%, rgba(234, 56, 77, 0.2) 100%)
        border-radius: 10px
        padding: 15px 49px
        border: 1px solid transparent
        &:focus
            border: 1px solid $red
    option
        color: $white
        text-align: left
        background: #551219
.header__button
    padding: 16px 80px
    transition: 0.3s all
    background: linear-gradient(90deg, #D31027 0%, #EA384D 100%)
    border-radius: 10px
    font-weight: 500
    font-size: 12px
    &:hover
        transform: scale(1.05)
.header__input
    +flexa
.promo__titles
    +flexa
    margin-top: 34px
    padding: 0px 43px
    .titles__item
        width: 25%
    .item-2, .item-3
        text-align: center
    .item-4
        text-align: right
.promo__main
    margin-top: 4px
    max-height: 650px
    overflow-y: auto
@media screen and (max-width: $tabletContainer)
    .promo__titles
        display: none
@media screen and (max-width: $smalltabletContainer)
    .promo__header, .header__input
        display: flex
        flex-direction: column
        align-items: center
        width: 100%
        input
            margin-right: 0px
            width: 100%
            text-align: left
            padding: 15px 10px
            margin-bottom: 10px
        select
            width: 100%
            padding: 15px 10px
    .header__button
        width: 100%
        margin-top: 10px
</style>