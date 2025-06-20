<template>
  <div class="roulette__item"
  :class="RouletteItems.rarityClass"
  >
    <div class="item__img"><img :src="getImageSource(RouletteItems)" alt="RouletteItem"></div>
    <div>
      <div class="item__title">{{ RouletteItems.title }}</div>
      <div class="item__chance"><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
    name: "VRoletteItem",
    props: {
        RouletteItems: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods: {
      getImageSource(item) {
        if (item.img) {
          if (item.img.startsWith('//') || item.img.startsWith('http') || item.img.startsWith('https')) {
            return item.img;
          } else {
            return 'https://api.panaceadayz.com'+item.img;
          }
        }
      },
    }
}
</script>

<style lang="sass" scoped>
.rare-4.border
    border: 1px solid $pink
.rare-3.border
    border: 1px solid #2f0b30
.rare-2.border
    border: 1px solid #006EFF
.rare-1.border
    border: 1px solid #2f2f32
.roulette__item
    padding:10px
    border-radius: 10px
    margin-bottom: 10px
    +bg
    +flexa
    flex-direction: column
    justify-content: space-between
    .item__img img
        max-height: 130px
        max-width: 100%
        width: auto
    .item__title
        font-weight: 500
        font-size: 12px
        color: rgba(255,255,255,0.7)
        margin-top: 20px
.silver
    background-image: url('~@/assets/img/item_bg_silver.png')
.blue
    background-image: url('~@/assets/img/item_bg_blue.png')
.purple
    background-image: url('~@/assets/img/item_bg_purple.png')
.red
    background-image: url('~@/assets/img/item_bg_red.png')
.item__chance
    margin-top: 10px
    font-size: 12px
    font-weight: 500
    text-align: center
</style>