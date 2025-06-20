<template>
  <div class="subscriptions__item">
    <div class="item__info">
      <div class="info__name">{{ SubscriptionsItem.name }}</div>
      <div class="info__server">{{ SubscriptionsItem.server }}</div>
    </div>
    <div class="item__date">
      <div class="date">{{ SubscriptionsItem.date }}</div>
      <div class="date__time">{{ SubscriptionsItem.time }}</div>
    </div>
    <div class="item__ex" v-if="SubscriptionsItem.type === '2' || SubscriptionsItem.type === '3' || SubscriptionsItem.type === '1'">
      <div v-if="!SubscriptionsItem.isForever">
        <button
            v-for="(button, index) in SubscriptionsItem.Extension"
            :key="index"
            class="ex__item"
            @click="prolongSubs(button.id)"
        >{{ button.title }}
        </button>
      </div>
    </div>

    <div class="item__ex" v-else-if="SubscriptionsItem.type === '5'">
      <div>
        <button
            class="ex__item"
            @click="requestOpenModal(1, SubscriptionsItem.server, SubscriptionsItem.id)"
        >Change
        </button>
      </div>
    </div>
    <div class="item__ex" v-else-if="SubscriptionsItem.type === '4'">
      <div>
        <button
            class="ex__item"
            @click="requestOpenModal(2, SubscriptionsItem.server, SubscriptionsItem.id)"
        >Change
        </button>
      </div>
    </div>
  </div>
</template>

<script>

const {useToast} = require("vue-toastification");
import NotifyModal from "@/components/NotifyModal";
import {mapGetters} from "vuex";

export default {
  name: "VsubscriptionsItem",
  props: {
    SubscriptionsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    ...mapGetters([
      'JWT'
    ]),
  },
  data() {
    return {
      localSubscriptionsItem: {},
      selectedVariant: null,
    };
  },
  mounted() {
    this.localSubscriptionsItem = {...this.SubscriptionsItem};
  },
  sockets: {
    "user.subscriptions": function (data) {
      this.$store.commit('SET_NEW_BALANCE', data.balance);
      this.$store.commit('SET_SUBSCRIPTIONS_TO_STATE', data.subs);
    }
  },
  methods: {
    requestOpenModal(variant, serverid, id) {
      this.$emit("requestOpenModal", variant, serverid, id);
    },
    async prolongSubs(variant) {
      const toast = useToast();

      try {
        console.log(this.localSubscriptionsItem);
        const response = await this.axios.post('https://api.panaceadayz.com/v2/Player.subProlong', {
          id: this.localSubscriptionsItem.id,
          variant: variant
        }, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        // console.log(response.data);
        if (response.data.status === 'success') {
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
        } else {
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
.subscriptions__item
  border-radius: 21px
  background: #0D0D10 url("~@/assets/img/Filterbg.png")
  +bg
  margin-top: 11px
  padding: 25px 20px
  +flexa

.item__date, .item__info
  width: 25%
  color: #C7A1AB
  font-weight: 500

  div
    +inher

.item__info
  padding-left: 6px

  .info__server
    font-size: 13px

.item__date
  padding-left: 15px

  .date__time
    font-size: 13px

.item__ex
  width: 50%
  +flexa
  justify-content: flex-end

  .ex__item
    border-radius: 5px
    background: linear-gradient(90deg, $red 0%, $pink 100%)
    margin-right: 3px
    opacity: 0.7
    transition: .3s
    padding: 15px 24px
    font-size: 12px
    font-weight: 500

    &:last-child
      margin-right: 0px

    &:hover
      opacity: 1

.pending
  width: 50%
  text-align: right
  color: #C7A1AB

@media screen and (max-width: $smalltabletContainer)
  .pending
    text-align: center
    width: 100%
  .subscriptions__item
    flex-direction: column
    text-align: center
  .item__info, .item__date
    padding-left: 0
    margin-bottom: 20px
    width: auto
  .item__ex
    width: 100%
    justify-content: center
    flex-direction: column

    .ex__item
      width: 100%
      margin-bottom: 10px
</style>