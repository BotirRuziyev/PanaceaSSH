<template>
  <div class="purch__item">
    <div class="item__balace">${{ VPurchItem.balance }}</div>
    <div class="item__server">{{VPurchItem.server}}</div>
    <div class="item__item">{{VPurchItem.item}}</div>
    <div class="item__date">{{VPurchItem.date}}</div>
  </div>
</template>

<script>
export default {
    name: "VPurchItem",
    props: {
        VPurchItem: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.purch__item
    border-radius: 21px
    background: #0D0D10 url("~@/assets/img/Filterbg.png")
    +bg
    margin-top: 20px
    padding: 35px 74px
    +flexa
    justify-content: space-between
    div
        max-width: 25%
        width: 100%
        color: #C7A1AB
        font-weight: 500
    .item__server, .item__item
        text-align: center
    .item__date
        text-align: right
@media screen and (max-width: $smalltabletContainer)
    .purch__item
        flex-direction: column
        padding: 25px
        div
            max-width: 100%
            margin-bottom: 10px
            text-align: center !important
            &:last-child
                margin-bottom: 0px

</style>