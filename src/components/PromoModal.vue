<template>
  <div class="modalBg" :class="{'modalBg-active': IsModalOpen === true}">
    <div class="modal__main" :class="{'modal__main-active': ModalAnimate === true}">
      <button
          @click="this.$emit('CloseModal')"
          class="clode__btn"
      ><img src="../assets/img/svg/krest.svg" alt="krest"></button>
      <div class="main__info">
        <h1 class="modal__title">Promocode activation</h1>
        <p class="promo__descript">Promocode: <span>{{ information.data ? information.data.promocode : 'N/A' }}</span></p>
        <p class="promo__descript" v-html="information.data ? information.data.description : 'No description available'"/>
        <p class="promo__descript">Choose the option to activate the promocode</p>
      </div>
      <button class="vers" v-for="variants in information.data ? information.data.variants : []" :key="variants.id" @click="activatePromo(information.data.promocode, information.data.server_id, variants.id )">
        <h2 class="vers__title">{{variants.title}}</h2>
        <p class="vers__descript">{{variants.help}}</p>
      </button>
    </div>
  </div>
</template>

<script>
import NotifyModal from "@/components/NotifyModal";
import {mapGetters} from "vuex";
const {useToast} = require("vue-toastification");
export default {
    name: "ThePromoModal",
    props: {
        IsModalOpen: {
            type: Boolean
        },
        Promocode: {
            type: String
        },
        information:{
          type: Array
        }
    },
    data: () => {
        return {
            ModalAnimate: false,
        }
    },
    watch: {
        IsModalOpen(){
            setTimeout(() => {
                this.ModalAnimate = !this.ModalAnimate
            }, 100)
            
        }
    },
  methods:{
    activatePromo(code, server_id, variant ) {
      const toast = useToast();
      const requestData = {
        code: code,
        server_id: server_id,
        variant: variant
      };
      (async () => {
        try {
          const response = await this.axios.post(
              "https://api.panaceadayz.com/v2/Player.activatePromocode",
              requestData
          );

          // Handle the response here (e.g., update state)
          console.log('Response:', response);

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
            toast.success({
              component: NotifyModal,
              props: {
                message: response.data.message,
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
            this.$emit('CloseModal');
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
    }
  },
  computed: {
    ...mapGetters([
      'JWT'
    ])
  },
}
</script>

<style lang="sass" scoped>
.modal__main
    max-width: 600px
.clode__btn
    position: absolute
    top: 20px 
    right: 25px
    background: $pink
    border-radius: 6px
    width: 20px
    height: 20px
    +flexa
    justify-content: center
    img
        width: 9px 
        height: 9px

.modal__title
    font-size: 21px
    font-weight: 600
.promo__descript
    color: #C7A1AB
    font-size: 14px
    font-weight: 500
    margin-top: 10px
    span
        color: yellow
        font-weight: 600
.vers
    background: rgba(64, 17, 25, 0.4)
    padding: 10px 15px
    margin-top: 15px
    width: 100%
    border-radius: 10px
    text-align: left
    transition: .3s
    &:hover
        background-color: $pink
        color: #ffffff
    &__title
        font-size: 21px
        margin-bottom: 10px
    &__descript
        color: #C7A1AB
        font-size: 14px
</style>