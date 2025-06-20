<template>
  <div class="modalBg blur" :class="{'modalBg-active': IsActive === true}">
    <div class="modal__item">
      <button
          @click="this.$emit('CloseProductModal', 'close')"
          class="modal__close">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path data-v-99b80dba=""
                d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z"
                fill="white" fill-opacity="0.2"></path>
        </svg>
      </button>
      <div class="slider__block">
        <Swiper
            :modules="modules"
            navigation
            :pagination="{ clickable: true }"
        >
          <SwiperSlide
              v-for="(img, index) in ProductsItem.imgForSlider"
              :key="index"

          ><img :src="'https://api.panaceadayz.com'+ProductsItem.imgForSlider[index]" alt="car">
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="info__block-container">
        <div class="info__block">
          <h1 class="modal__title">{{ ProductsItem.title }}</h1>
          <div class="desc-block">
            <p class="modal__descript"
               v-for="(desc, index) in ProductsItem.fullDescription"
               :key="index"
            >{{ ProductsItem.fullDescription[index] }}</p>
          </div>
        </div>
        <div class="modal__product-container" style="">
          <CustomSelect style=" margin-right: 20px;"
                        :options="['Chernarus MOD US']"
                        :default="'Chernarus MOD US'"
                        class="select-item"
                        v-model="selectedServer"
          />
          <button class="pur" @click="buy">Purchase</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {Swiper, SwiperSlide} from "swiper/vue"
import {Pagination, Navigation} from "swiper/modules"
import CustomSelect from "@/components/CustomSelect.vue"

const {useToast} = require("vue-toastification");
import NotifyModal from "@/components/NotifyModal";

import "swiper/css"
import "swiper/css/pagination"
import 'swiper/css/navigation';

export default {
  name: "CustomTagModal",
  components: {
    Swiper, SwiperSlide, CustomSelect
  },
  setup() {
    return {
      modules: [Navigation, Pagination]
    }
  },
  props: {
    IsActive: {
      type: Boolean,
      default() {
        return false
      }
    },
    ProductsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      selectedServer: "Chernarus MOD US", // Default values
    }
  },
  methods: {
    getServerByName(server_id) {
      switch (server_id) {
        case 'Chernarus MOD US':
          return 1;
      }
    },
    async buy() {
      const toast = useToast();
      try {
        let server_id = this.selectedServer;
        if (server_id !== '') {
          server_id = this.getServerByName(server_id);
        }
        const formData = new FormData();
        formData.append('server_id', server_id);
        const response = await this.axios.post('https://api.panaceadayz.com/v2/services.buySubTag', formData);
        if (response.data.status === 'error') {
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
          return;
        }
        this.$store.commit('SET_NEW_BALANCE', response.data.data.balance);
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
        this.$emit('CloseProductModal', 'close');


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
    }
  }
}
</script>
<style scoped>
.modal__product-container {
  display: flex;
  flex-direction: row
}
.info__block-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (max-width: 480px) {
  .modal__product-container {
    display: flex;
    flex-direction: column;
  }
  .pur {
    max-width: 100% !important;
    margin-top: 30px
  }
}
</style>
<style lang="sass" scoped>
//desc_block
//  max-height: 130px;
    overflow: auto;
    margin-bottom: 40px;
//.modal__descript{ padding: 0px 5px 0px 0;}
.modal__item
  padding: 35px 67px 60px
  border-radius: 17px
  background: linear-gradient(162deg, #541921, #17090b)
  border: 1px solid #ea384d
  width: 1011px
  height: 635px
  display: flex
  justify-content: space-between
  position: relative
  max-height: 100vh

.slider__block
  max-width: 420px
  width: 100%
  border-radius: 17px
  background: radial-gradient(94.43% 74.15% at 50% 50%, rgba(239, 44, 74, .55) 0, rgba(60, 18, 23, .55) 100%)
  +flexa

.modal__title
  max-width: 292px
  font-size: 32px
  font-weight: 700
  margin-bottom: 30px

.modal__descript
  font-size: 14px
  font-weight: 400
  line-height: 150%
  margin-bottom: 30px

.info__block
  max-width: 361px
  height: 90%

.pur
  max-width: 130px
  width: 100%
  border-radius: 5px
  background: #e4354a
  text-align: center
  font-size: 14px
  font-style: normal
  font-weight: 500
  padding: 10px
  transition: .3s

  &:hover
    transform: scale(1.1)

.modal__close
  position: absolute
  top: 35px
  right: 51px
  transition: .3s

  &:hover
    transform: scale(1.3)

    svg
      path
        fill-opacity: .5

.swiper-slide
  display: flex !important
  align-items: center
  justify-content: center

  img
    max-width: 85%
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none

.swiper
  height: 100%
.desc-block
  height: 80%
  overflow: auto
@media screen and (max-width: $smalltabletContainer)
  .swiper-slide
    padding: 40px 0px
  .modal__item
    flex-direction: column
    align-items: center
    max-width: 90%
    text-align: center
  .modal__title
    max-width: none
    margin-top: 50px

@media screen and (max-width: $mobileContainer)
  .modal__close
    top: 10px
    right: 10px
  .modal__item
    max-width: 100%
    padding: 35px 5px 60px
    height: unset
  .modal__descript
    font-size: 12px
    margin-bottom: 15px
  .modal__title
    font-size: 28px
  .desc-block
    max-height: 90px
    overflow-y: scroll
  .modal__title
    margin-top: 20px

@media screen and (max-width: 450px)
  .slider__block
    max-width: 80%

@media screen and (max-width: 400px) and (max-height: 570px)
  .swiper-slide img
    max-width: 85%
    max-height: 200px
    width: auto
  .modal__title
    font-size: 25px
    margin-bottom: 20px

@supports (-webkit-touch-callout: none)
  @media screen and (max-width: $mobileContainer)
    .modalBg
      padding-bottom: 100px
</style>