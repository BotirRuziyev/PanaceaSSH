<template>
  <section class="tabs">
    <div class="container">
        <aos-vue animation="fade-up" :offset="-250"><div class="tabs__header">
            <div class="info__title">
                <img class="min__logo" src="../assets/img/logo-2.png" alt="LogoMin">
                <h1 class="section__title">Statistics</h1>
            </div>
            <div class="tabs__buttons">
                <button 
                :class="{active: isTabsActive === true}"
                @click="this.isTabsActive = true"
                >
                Chernarus MOD US
                </button>
            </div>
        </div></aos-vue>
        <div class="scroll">
            <aos-vue animation="fade-up" :offset="-250"><div class="tables">
                <div class="tables__titles">
                    <div class="titles__item titles__item-1">Rank</div>
                    <div class="titles__item titles__item-2">Player Name</div>
                    <div class="titles__item titles__item-3">Kills</div>
                    <div class="titles__item titles__item-4">Deaths</div>
                    <div class="titles__item titles__item-5">Longest Kill</div>
                    <div class="titles__item titles__item-6">K/D</div>
                </div>
                <div class="tables__block">
                    <div class="block-1" v-if="isTabsActive">
                        <VTabsItem
                        v-for="items in PLAYERSUS"
                        :key="items.num"
                        :TabsItem = "items"
                        ></VTabsItem>
                    </div>
                    <div class="block-2" v-else>
                        <VTabsItem
                        v-for="items in PLAYERSEU"
                        :key="items.num"
                        :TabsItem = "items"
                        ></VTabsItem>
                    </div>
                </div>
            </div></aos-vue>
        </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import VTabsItem from "@/components/VTabsItem.vue"
export default {
    data: () =>{
        return{
            isTabsActive: true
        }
    },
    mounted(){
        this.GET_PLAYERS_US()
        this.GET_PLAYERS_EU()
    },
    sockets:{
      'monitoring.usersEu':function (data){
        this.$store.commit('SET_EUPLAYERS_TO_STATE', data);
      },
      'monitoring.usersUs':function (data){
        this.$store.commit('SET_USPLAYERS_TO_STATE', data);
      }
    },
    methods: {
        ...mapActions([
            'GET_PLAYERS_US',
            'GET_PLAYERS_EU'
        ])
    },
    computed: {
        ...mapGetters([
            'PLAYERSUS',
            'PLAYERSEU'
        ])
    },
    components: {VTabsItem}
}
</script>

<style lang="sass">
.tabs
    &__header
        +flexa
        justify-content: space-between
    &__buttons
        font-weight: 500
        font-size: 16px
        button
            margin-right: 11px
            background: $gray url(~@/assets/img/bg_tab.png)
            padding: 24px 51px
            border-radius: 10px
            color: rgba(255,255,255,0.48)
            transition: .3s
            &:last-child
                margin-right: 0px
            &:hover
                background: linear-gradient(90deg, $red 0%, $pink 100%)
                color: rgba(255,255,255,1)
        .active
            background: linear-gradient(90deg, $red 0%, $pink 100%)
            color: rgba(255,255,255,1)
            
.scroll
    max-width: 100%
    
.tables
    min-width: 1316px
    margin-top: 66px
    &__titles
        font-weight: 500
        font-size: 16px
        padding: 0px 27px
        +flexa
        margin-bottom: 74px
    .titles__item
        color: rgba(255,255,255,0.4)
.titles__item-1
    width: 115px
.titles__item-2
    width: 677px
.titles__item-3
    width: 100px
.titles__item-4
    width: 124px
.titles__item-5
    width: 146px
.titles__item-6
    width: 74px
.tables__block
    max-height: 612px
    overflow-y: scroll
@media screen and (max-width: $smalltabletContainer)
    .scroll
        overflow-x: auto
    .tabs__header
        flex-direction: column
        justify-content: center
    .tables
        min-width: 900px
    .titles__item-2
        width: 350px
    .tabs__buttons
        display: flex
        flex-direction: column
        justify-content: center
        button
            margin-right: 0px
            &:last-child
                margin-top: 15px
</style>