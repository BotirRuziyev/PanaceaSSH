<template>
  <div class="modalBg blur" :class="{'modalBg-active': IsOpen === true}">
    <div class="priority__modal">
      <button
          @click="this.$emit('CloseProductModal', 'close')"
          class="modal__close">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path data-v-99b80dba=""
                d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z"
                fill="white" fill-opacity="0.2"></path>
        </svg>
      </button>
      <h1 class="priority__title">Priority queue</h1>
      <p class="priority__descript">By purchasing Priority Que, you will log into the server before others. The
        privilege is valid for a month.</p>
      <h2 class="form__title">Enter details</h2>
      <form>
        <div class="select">
          <CustomSelect
              :options="['7 days ($5)', '30 days ($10)', 'Lifetime ($100)']"
              :default="'7 days ($5)'"
              class="select-item"
              v-model="selectedDuration"
          />
          <CustomSelect
              :options="['Chernarus MOD US']"
              :default="'Chernarus MOD US'"
              class="select-item"
              v-model="selectedServer"
          />
        </div>
        <button
            @click="buy"
            type="button"
            class="buy">Buy
        </button>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

const {useToast} = require("vue-toastification");
import NotifyModal from "@/components/NotifyModal";

import CustomSelect from "@/components/CustomSelect.vue"

export default {
  name: "VPriorityModal",
  props: {
    IsOpen: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      selectedDuration: "7 days ($5)", // Default values
      selectedServer: "Chernarus MOD US", // Default values
    }
  },
  components: {
    CustomSelect, NotifyModal
  },
  methods: {
    getAmountByName(variant) {
      switch (variant) {
        case '7 days ($5)':
          return 1;
        case '30 days ($10)':
          return 2;
        case 'Lifetime ($100)':
          return 3;
      }
    },
    getServerByName(server_id) {
      switch (server_id) {
        case 'Chernarus MOD US':
          return 1;
      }
    },
    async buy() {
      const toast = useToast();

      try {
        let amountToSend = this.selectedDuration;
        let server_id = this.selectedServer;
        if (amountToSend !== '') {
          amountToSend = this.getAmountByName(amountToSend);
        }
        if (server_id !== '') {
          server_id = this.getServerByName(server_id);
        }
        const formData = new FormData();
        formData.append('variant', amountToSend);
        formData.append('server_id', server_id);
        const response = await this.axios.post('https://api.panaceadayz.com/v2/services.buySubQueue', formData);
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
  },

}
</script>

<style lang="sass" scoped>
.priority
  &__modal
    border-radius: 17px
    border: 1px solid $pink
    transition: .4s
    position: relative
    background: linear-gradient(162deg, #541921, #17090b)
    max-width: 480px
    width: 100%
    padding: 35px

  &__title
    font-size: 32px
    font-weight: 700
    margin-bottom: 25px

  &__descript
    font-size: 14px
    font-weight: 300
    margin-bottom: 35px

.form__title
  margin-bottom: 21px
  font-size: 16px
  font-weight: 700

.modal__close
  position: absolute
  top: 16px
  right: 16px
  transition: .3s

  &:hover
    transform: scale(1.3)

    svg
      path
        fill-opacity: .5

.select
  +flexa
  justify-content: space-between
  margin-bottom: 30px

  &-item
    max-width: 200px

.buy
  width: 100%
  border-radius: 5px
  background: $pink
  text-align: center
  font-size: 14px
  font-weight: 500
  padding: 10px
  transition: .3s

  &:hover
    transform: scale(1.1)

@media screen and (max-width: 500px)
  .select
    flex-direction: column

    &-item
      max-width: 100%
      margin-bottom: 8px

      &:last-child
        margin-bottom: 0px
</style>