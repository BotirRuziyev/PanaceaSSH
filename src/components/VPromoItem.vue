<template>
  <div class="promo__item">
    <div class="item__server">{{PromoItem.server}}</div>
    <div class="item__code">{{PromoItem.code }}</div>
    <div class="item__summ">{{PromoItem.summ }}</div>
    <div class="item__date">{{ PromoItem.date }}</div>
  </div>
</template>

<script>
export default {
    name: "VPromoItem",
    props: {
        PromoItem: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.promo__item
    border-radius: 21px
    background: #0D0D10 url("~@/assets/img/Filterbg.png")
    +bg
    margin-top: 23px
    padding: 25px 43px
    +flexa
    div
        width: 25%
        color: #C7A1AB
        font-size: 16px
        font-weight: 500
    .item__code
        border-radius: 10px
        background: linear-gradient(90deg, rgba(211, 16, 39, 0.12) 0%, rgba(234, 56, 77, 0.12) 100%)
        padding: 14px 50px
    .item__code, .item__summ
        text-align: center
    .item__date
        text-align: right
@media screen and (max-width: $tabletContainer)
    .promo__item
        flex-direction: column
        div
            width: 100%
            text-align: center !important
            margin-bottom: 10px
            &:last-child
                margin-bottom: 0px
@media screen and (max-width: $smalltabletContainer)
    .promo__item
        padding: 15px
</style>