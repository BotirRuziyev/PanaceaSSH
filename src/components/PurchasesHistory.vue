<template>
  <section class="purch">
    <div class="purch__titles">
      <div class="titles__item">Balance</div>
      <div class="titles__item">Server</div>
      <div class="titles__item">Item</div>
      <div class="titles__item">Date</div>
    </div>
    <div class="purch__main">
      <VPurchitem v-for="item in PURCHASES_HISTORY" :key="item.id" :VPurchItem="item"/>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import VPurchitem from './VPurchitem.vue';

export default {
  name: "PurcharesHistory",
  components: {VPurchitem},
  mounted() {
    this.GET_PURCHASES_HISTORY();
  },
  computed: {
    ...mapGetters([
      'PURCHASES_HISTORY'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PURCHASES_HISTORY'
    ]),
  },
}
</script>

<style lang="sass" scoped>
.purch__header
  +flexa
.purch__titles
  margin-top: 30px
  +flexa
  justify-content: space-between
  padding: 0px 74px
  .titles__item
    width: 25%
    &:nth-child(2), &:nth-child(3)
      text-align: center
    &:nth-child(4)
      text-align: right
.purch__main
  max-height: 650px
  overflow-y: auto
  margin-top: 20px
@media screen and (max-width: $smalltabletContainer)
  .purch__titles
    display: none
@media screen and (max-width: $mobileContainer)
  .purch__header
    justify-content: center
</style>