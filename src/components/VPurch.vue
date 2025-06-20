<template>
  <section class="purch">
    <div class="purch__header">
        <form >
            <input 
            class="header__input" 
            v-model="cost"
            type="text" 
            placeholder="Deposit money">
            <button 
            @click="IsModalOpen = true"
            class="header__button" 
            type="button">Deposit</button>
        </form>
    </div>
    <div class="purch__titles">
        <div class="titles__item">Balance</div>
        <div class="titles__item">Server</div>
        <div class="titles__item">Item</div>
        <div class="titles__item">Date</div>
    </div>
    <div class="purch__main">
        <VPurchitem
        v-for="VPurchItem in PURCHHISTORY"
        :key="VPurchItem.id"
        :VPurchItem="VPurchItem"
        ></VPurchitem>
    </div>
    <VPaymentModal
    :IsOpen="IsModalOpen"
    :cost="cost"
    v-on:CLoseModal="CLoseModal"
    ></VPaymentModal>
  </section>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import VPaymentModal from './VPaymentModal.vue';
import VPurchitem from './VPurchitem.vue';
export default {
    name: "ThePurch",
    mounted() {
        this.GET_PURCHHISTORY();
    },
    methods: {
        ...mapActions([
            'GET_PURCHHISTORY'
        ]),
        CLoseModal(){
            this.IsModalOpen = false
        }
    },
    computed: {
        ...mapGetters([
            'PURCHHISTORY'
        ])
    },
    data: () => {
        return {
            cost: "",
            IsModalOpen: false
        }
    },
    components: { VPurchitem, VPaymentModal }
}
</script>

<style lang="sass" scoped>
.purch__header
    +flexa
.header__input
    margin-right: 15px
    text-align: center
    font-weight: 500
    font-size: 12px
    background: linear-gradient(90deg, rgba(211, 16, 39, 0.2) 0%, rgba(234, 56, 77, 0.2) 100%)
    border-radius: 10px
    border: 1px solid transparent
    padding: 15px 17px
    &:focus
        border: 1px solid $red
.header__button
    padding: 15px
    background: linear-gradient(90deg, #D31027 0%, #EA384D 100%)
    border-radius: 8px
    font-weight: 500
    font-size: 14px
    transition: 0.3s all
    &:hover
        transform: scale(1.05)
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
    .header__button
        width: 100%
        margin-top: 10px
    .header__input
        width: 100%
        margin-rigfht: 0px
    .purch__header
        justify-content: center
</style>