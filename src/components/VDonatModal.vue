<template>
  <div class="modalBg blur" :class="{'modalBg-active': IsOpen === true}">
    <div class="modal__donat">
      <h1 class="modal__title">Donation</h1>
      <p class="modal__descript">Donate to Panacea Project and its development</p>
      <h2 class="form__title">How much would you like to donate?</h2>
      <form class="modal__form">
        <div class="amount">
          <button
              type='button'
              class="amount__item"
              :class="{'amount__item-active': ActiveButton === 1}"
              @click="this.ActiveButton = 1"
          ><span>$</span>10
          </button>
          <button
              type='button'
              class="amount__item"
              :class="{'amount__item-active': ActiveButton === 2}"
              @click="this.ActiveButton = 2"
          ><span>$</span>20
          </button>
          <button
              type='button'
              class="amount__item"
              :class="{'amount__item-active': ActiveButton === 3}"
              @click="this.ActiveButton = 3"
          ><span>$</span>50
          </button>
          <button
              type='button'
              class="amount__item"
              :class="{'amount__item-active': ActiveButton === 4}"
              @click="this.ActiveButton = 4"
          ><span>$</span>100
          </button>
        </div>
        <input
            v-model="SummInput"
            type="number"
            min="0"
            class="another__amount"
            placeholder="Other amount">
        <textarea class="modal__text" placeholder="comment" v-model="CommentInput"></textarea>
        <button
            @click="buyDonate(ActiveButton)"
            type='button'
            class="donate">Donate
        </button>
      </form>
      <button
          @click="this.$emit('CloseProductModal', 'close')"
          class="closeBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path data-v-99b80dba=""
                d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z"
                fill="white" fill-opacity="0.2"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

const {useToast} = require("vue-toastification");
import NotifyModal from "@/components/NotifyModal";

export default {
  name: "VDonatModal",
  props: {
    IsOpen: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data: () => {
    return {
      ActiveButton: 0,
      SummInput: "",
      CommentInput: "",
    }
  },
  watch: {
    SummInput() {
      if (this.SummInput != 0) this.ActiveButton = 0
    },
    ActiveButton() {
      if (this.ActiveButton != 0) this.SummInput = ""
    }
  },
  methods: {
    async buyDonate(variant) {
      const toast = useToast();
      try {
        let amountToSend = this.SummInput;
        if (variant !== 0) {
          amountToSend = this.getAmountByVariant(variant);
        }
        if (amountToSend <= 0) {
          toast.error({
            component: NotifyModal,
            props: {
              message: "Sum need to be more than 0",
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
        const formData = new FormData();
        formData.append('sum', amountToSend);
        formData.append('comment', this.CommentInput);
        const response = await this.axios.post('https://api.panaceadayz.com/v2/services.sendDonat', formData);
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
        this.$store.commit('SET_NEW_BALANCE', response.data.data.balance);
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
    },
    getAmountByVariant(variant) {
      switch (variant) {
        case 1:
          return 10;
        case 2:
          return 20;
        case 3:
          return 50;
        case 4:
          return 100;
        default:
          return 0;
      }
    },
  },
  components: {
    NotifyModal
  }
}
</script>

<style lang="sass" scoped>
.modal
  &__donat
    border-radius: 17px
    border: 1px solid $pink
    transition: .4s
    position: relative
    background: linear-gradient(162deg, #541921, #17090b)
    max-width: 500px
    width: 100%
    padding: 35px
    max-height: 100vh
    padding-bottom: 60px

  &__title
    font-size: 32px
    font-weight: 700
    margin-bottom: 13px

  &__descript
    font-size: 14px
    font-weight: 300
    max-width: 200px
    margin-bottom: 20px

.form__title
  font-size: 16px
  font-weight: 700
  margin-bottom: 19px

.amount
  display: flex
  justify-content: space-between
  margin-bottom: 23px

  &__item
    padding: 22px 18px 22px 22px
    background: transparent
    border-radius: 17px
    border: 1px solid #ea384d
    font-size: 32px
    font-weight: 700
    display: flex
    flex-direction: row
    align-items: center

    &-active
      background: #ea384d

    span
      font-size: 12px
      font-weight: 700
      margin-bottom: 6px

.another__amount
  font-size: 14px
  font-weight: 700
  border-radius: 17px
  text-align: center
  border: 1px solid #ea384d
  background: transparent
  width: 100%
  padding: 22px 0
  margin-bottom: 22px

  &::placeholder
    color: $white

.modal__text
  border-radius: 17px
  background: #453134
  width: 100%
  height: 107px
  padding: 18px
  font-size: 14px
  font-weight: 300
  border: none
  resize: none
  outline: none
  margin-bottom: 40px

  &::placeholder
    color: $white

.donate
  float: right
  border-radius: 5px
  background: #e4354a
  text-align: center
  font-size: 14px
  font-weight: 500
  width: 100%
  padding: 15px
  transition: .3s

  &:hover
    transform: scale(1.1)

.closeBtn
  position: absolute
  top: 16px
  right: 16px
  transition: .3s

  &:hover
    transform: scale(1.3)

    svg
      path
        fill-opacity: .5

@media screen and (max-width: 380px)
  .modal__donat
    padding: 15px
    max-width: 98%
    width: 100%
  .amount
    flex-wrap: wrap
    margin-bottom: 10px
  .amount__item
    max-width: 63px
    width: 100%
    padding: 10px 0
    margin-bottom: 10px
    font-size: 24px
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center

    &::nth-child(3), &::nth-child(4)
      margin-bottom: 0px
  .donate
    max-width: 100%
  .another__amount
    padding: 15px 0px
    margin-bottom: 10px
  .modal
    &__title
      font-size: 25px

    &__descript
      font-size: 12px
      margin-bottom: 20px
  .form__title
    font-size: 14px
    margin-bottom: 10px
  .modal__text
    height: 75px
    margin-bottom: 15px

@media (min-width: 381px) and (max-width: 480px)
  .modal__donat
    padding: 15px
    max-width: 98%
    width: 100%
  .amount
    flex-wrap: wrap
    margin-bottom: 10px
  .amount__item
    max-width: 80px
    width: 100%
    padding: 10px 0
    margin-bottom: 10px
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center

    &::nth-child(3), &::nth-child(4)
      margin-bottom: 0px
  .donate
    max-width: 100%
  .another__amount
    padding: 15px 0px
    margin-bottom: 10px
  .modal
    &__title
      font-size: 25px

    &__descript
      font-size: 12px
      margin-bottom: 20px
  .form__title
    font-size: 14px
    margin-bottom: 10px
  .modal__text
    height: 75px
    margin-bottom: 15px

@media (min-width: 481px) and (max-width: 768px)
  .amount__item
    max-width: 90px
    width: 100%
    padding: 15px 0
    margin-bottom: 10px
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center

    &::nth-child(3), &::nth-child(4)
      margin-bottom: 0
</style>