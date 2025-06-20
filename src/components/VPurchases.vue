<template>
  <div>
    <div class="pre__header">To receive prizes while in the game, press " ' ", and enter the promo code in the window, and click "Activate"! The Roulette spin has a three (3) day expiration date. If you have a promotional code for a car, when activating it, the car will spawn within a radius of 150 meters, and the car lock will spawn at your feet.  (Spawn the car / helicopter on a flat surface without obstacles so that the car / helicopter does not get stuck) If you have other items, they will spawn at your feet.</div>
    <div class="block__header">
        <div class="block__title">Item</div>
        <div class="block__title">Promocode</div>
    </div>
    <div class="block__main">
        <VPurchasesItem
        v-for="item in PURCHASES"
        :key="item.id"
        :VPromoItem="item"
        ></VPurchasesItem>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import VPurchasesItem from './VPurchasesItem.vue';
export default {
    name: "ThePromo",
    mounted() {
        this.GET_PURCHASES();

    },
    methods: {
        ...mapActions([
            'GET_PURCHASES'
        ])
    },
    computed: {
        ...mapGetters([
            'PURCHASES'
        ])
    },
    components: { VPurchasesItem }
}
</script>

<style lang="sass" scoped>
.pre__header 
    font-size: 14px
    text-align: center
    width: 100%
    padding: 10px 15px
    border-radius: 35px
    background-color: #401119
    margin-bottom: 20px
.block__header
    width: 100%
    display: flex
    .block__title
        width: 50%
        text-align: center
        font-size: 16px
        font-weight: 500
@media screen and (max-width: $mobileContainer)
    .block__header
        margin-top: 50px
</style>