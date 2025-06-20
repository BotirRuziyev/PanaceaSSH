<template>
  <section class="subscriptions">
    <div class="subscriptions__header">
        <div class="header__item item-1">Name</div>
        <div class="header__item item-2">Duration</div>
        <div class="header__item item-3">Extension</div>
    </div>
    <div class="subscriptions__main">
        <VSubscriptionsItem
        v-for="SubscriptionsItem in SUBSCRIPTIONS"
        :key="SubscriptionsItem.id"
        :SubscriptionsItem="SubscriptionsItem"
        @requestOpenModal="openModalChange"
        ></VSubscriptionsItem>
    </div>
    <ChangeColorModal
        :selectedVariant="selectedVariant"
        :serverid="serverid"
        :id="id"
        :IsModalOpen="isModalOpen"
        @closeModal="CloseModal"
    />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import VSubscriptionsItem from './VSubscriptionsItem.vue';
import ChangeColorModal from "@/components/ChangeColorModal";

export default {
    name: "VSubscriptions",
    mounted() {
        this.GET_SUBSCRIPTIONS();
    },
    methods: {
        ...mapActions([
            'GET_SUBSCRIPTIONS'
        ]),
      openModalChange(variant, serverid,id) {
        this.selectedVariant = variant;
        this.serverid = serverid;
        this.id = id
        this.isModalOpen = true;
      },
      CloseModal() {
        this.isModalOpen = false;
      },
    },
    computed: {
        ...mapGetters([
            'SUBSCRIPTIONS','JWT'
        ])
    },
  data() {
    return {
      isModalOpen: false,
      selectedVariant: null,
      serverid: null,
      id: null,
    };
  },
    components: { VSubscriptionsItem,ChangeColorModal }
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
.subscriptions__header
    +flexa
    margin-bottom: 19px
.item-1, .item-2
    width: 25%
    padding-left: 26px
.item-3
    width: 50%
    text-align: right
@media screen and (max-width: $smalltabletContainer)
    .subscriptions__header
        display: none
</style>