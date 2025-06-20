<template>
    <div class="modalBg" :class="{'modalBg-active': IsOpen === true}">
        <div class="payment" :class="{'payment-active': IsAnimate === true}">
            <h1 class="payment__title">Choose a payment method: <span>{{ cost }}$</span></h1>
            <div class="payment-block">
                <a class="payment__item" :class="{ disabled: !isApproved }" data-method="1" :disabled="!isApproved" @click="makePayment(2)"><img src="../assets/img/svg/logo-main.svg" alt="LogoMain"></a>
                <a class="payment__item" :class="{ disabled: !isApproved }" data-method="2" :disabled="!isApproved" @click="makePayment(5)"><img src="../assets/img/stripe.png" alt="stripe"></a>
            </div>
            <div class="payment-approve">
              <input type="checkbox" v-model="isApproved"><span>By continuing, you agree to the <router-link style="color: #d31027" to="/Terms" @click="scrollToTop">Terms of use</router-link> and <router-link  style="color: #d31027" to="/Fulfilment" @click="scrollToTop">Fulfillment Policy</router-link>.</span>
            </div>
            <button
            @click="this.$emit('CLoseModal')"
            class="cancel">Cancel</button>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
const {useToast} = require("vue-toastification");
import NotifyModal from "@/components/NotifyModal";
export default {
  name: "VPaymentModal",
    props: {
        cost: {
            type: String,
            default(){
                return ""
            }
        },
        IsOpen: {
            type: Boolean,
            default(){
                return false
            }
        }
    },
    data: () => {
        return {
            IsAnimate: false,
            message: '',
            IsNotifyModalOpen: false,
            typeNotifyModal: '',
            isApproved: false
        }
    },
    watch: {
        IsOpen(){
            setTimeout(() => {
                this.IsAnimate = !this.IsAnimate
            }, 200)

        }
    },
    computed: {
      ...mapGetters([
        'JWT'
      ]),
    },
    methods: {
      CloseNotifyModal(){
        this.IsNotifyModalOpen = false;
      },
      async makePayment(methodId) {
          const toast = useToast();
        if (!this.isApproved) {
          const toast = useToast();
          toast.error({
            component: NotifyModal,
            props: {
              message: 'You must approve to proceed with the payment.',
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
          try {
            const requestData = {
              method_id: methodId,
              sum: this.cost,
              email: ""
            };
            const response = await this.axios.post('https://api.panaceadayz.com/v2/Payment.create', requestData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
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
            } else {
              // this.typeNotifyModal = 'success';
              // this.IsNotifyModalOpen = true;
              window.location.href = response.data.link;
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
        }
    }
}
</script>

<style lang="sass" scoped>

.payment
    background: url("~@/assets/img/modal_drop_bg.png")
    +bg
    border-radius: 24px
    padding: 32px
    position: relative
    max-width: 340px
    width: 100%
    height: 368px
    transform: perspective(2500px) rotateX(-90deg)
    transition: .6s
    &-active
        transform: perspective(2500px) rotateX(0deg)
    &__title
        font-size: 14px
        font-weight: 500
        span
            font-weight: 700
            color: #ff0000
    &-block
        +flexa
        margin-top: 20px
        justify-content: space-between
        .payment__item
            padding: 0px 3px
            background: linear-gradient(90deg, rgba(211, 16, 39, 0.2) 0%, rgba(234, 56, 77, 0.2) 100%)
            border-radius: 10px
            border: 2px solid transparent
            transition: border 0.2s
            height: 50px
            +flexa
            justify-content: center
            &:hover
                border: 2px solid #ffffff59
            &.disabled
              pointer-events: none
              opacity: 0.6
            &.no-hover:hover
              border: 2px solid transparent
    .cancel
        position: absolute
        bottom: 0px
        left: 50%
        transform: translate(-50%, 50%)
        transition: 0.3s all
        background: linear-gradient(90deg, #D31027 0%, #EA384D 100%)
        border-radius: 10px
        font-weight: 500
        font-size: 16px
        padding: 18px 52px
    .payment-approve
      display: flex
      position: absolute
      bottom: 15%
      left: 10%
      transform: translate(-5%, 50%)
      font-weight: 500
      font-size: 13px
      input[type="checkbox"]
        -webkit-appearance: none
        -moz-appearance: none
        appearance: none
        width: 30px
        border-radius: 4px
        height: 20px
        border: 2px solid #7f2436
        margin-right: 10px
        cursor: pointer
        position: relative
        &:checked
          &::after
            content: "✔"
            display: block
            width: 20px
            height: 20px
            border-radius: 4px
            color: #d5142b
            position: absolute
            top: -3px
            left: 2px

</style>