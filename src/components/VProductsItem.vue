<template>
  <div>
    <div class="products__item">
      <div class="products__price">{{ ProductsItem.price }}</div>
      <div class="products__img"><img :src="'https://api.panaceadayz.com'+ProductsItem.mainImg" alt="ProductsImg"></div>
      <div class="title__block">
        <h1 class="products__title">{{ ProductsItem.title }}</h1>
        <button
            type="button"
            @click="CheckProductModal()"
            class="products__info">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path data-v-99b80dba="" fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.75618 0.0110091C7.21475 0.185993 6.13971 0.506672 4.96268 1.14249C3.57114 1.89424 2.2841 3.10336 1.43008 4.46127C0.713038 5.60138 0.286939 6.78304 0.0470561 8.29642C-0.0156854 8.69221 -0.0156854 10.3165 0.0470561 10.7123C0.39643 12.9166 1.20868 14.5992 2.63582 16.0752C3.78119 17.2598 5.00969 18.0377 6.52471 18.5376C7.57164 18.8831 8.32364 19 9.5 19C10.6764 19 11.4284 18.8831 12.4753 18.5376C13.9903 18.0377 15.2188 17.2598 16.3642 16.0752C17.7913 14.5992 18.6036 12.9166 18.9529 10.7123C19.0157 10.3165 19.0157 8.69221 18.9529 8.29642C18.6656 6.48351 18.0983 5.10661 17.0816 3.75491C16.749 3.31258 16.0314 2.56615 15.5632 2.17545C14.2447 1.07515 12.6499 0.366403 10.8509 0.081181C10.5039 0.0261734 9.05125 -0.0225158 8.75618 0.0110091ZM10.493 1.79344C11.8466 1.96935 13.1081 2.49122 14.2345 3.34131C14.6262 3.63686 15.3713 4.38147 15.667 4.77284C16.7328 6.18331 17.2729 7.77466 17.2729 9.50435C17.2729 11.234 16.7328 12.8254 15.667 14.2359C15.3713 14.6272 14.6262 15.3718 14.2345 15.6674C12.8232 16.7325 11.2308 17.2723 9.5 17.2723C7.7692 17.2723 6.17682 16.7325 4.76546 15.6674C4.37384 15.3718 3.62875 14.6272 3.333 14.2359C2.26718 12.8254 1.72705 11.234 1.72705 9.50435C1.72705 7.77466 2.26718 6.18331 3.333 4.77284C3.62875 4.38147 4.37384 3.63686 4.76546 3.34131C5.87811 2.50163 7.14 1.97575 8.47724 1.79448C8.99197 1.72468 9.9602 1.7242 10.493 1.79344ZM9.11686 4.09224C8.50666 4.31922 8.19801 4.97786 8.42175 5.57547C8.79612 6.57538 10.2039 6.57538 10.5782 5.57547C10.7806 5.03506 10.537 4.41756 10.0156 4.14873C9.81058 4.04307 9.33022 4.01285 9.11686 4.09224ZM9.22322 8.10805C9.02418 8.18194 8.9071 8.27411 8.77477 8.46107L8.6632 8.61869L8.65282 11.4495C8.64137 14.5781 8.63293 14.4555 8.87768 14.707C9.30125 15.1421 10.0327 15.017 10.2855 14.4662C10.3498 14.3262 10.3538 14.1538 10.3546 11.5195C10.3555 8.49218 10.363 8.61018 10.1518 8.35982C9.9409 8.10987 9.52336 7.99666 9.22322 8.10805Z"
                  fill="white" fill-opacity="0.74"></path>
          </svg>
        </button>
      </div>
      <p class="products__descript" v-html="ProductsItem.shortDescription"></p>
      <button
          type="button"
          @click="CheckProductModal"
          class="products__button"
      >Purchase
      </button>
    </div>
    <VProductItemModal
        v-if="ProductsItem.type === 'tovar'"
        :IsActive="IsFullInfo"
        :ProductsItem="ProductsItem"
        v-on:CloseProductModal="CloseProductModal"
    ></VProductItemModal>
    <CustomTagModal
        v-if="ProductsItem.type === 'tag'"
        :IsActive="IsTagOpen"
        :ProductsItem="ProductsItem"
        v-on:CloseProductModal="CloseProductModal"
    ></CustomTagModal>
    <VDonatModal
        v-if="ProductsItem.type === 'donat'"
        :IsOpen="IsDonateOpen"
        v-on:CloseProductModal="CloseProductModal"
    ></VDonatModal>
    <VPriorityModal
        v-if="ProductsItem.type === 'usluga'"
        v-on:CloseProductModal="CloseProductModal"
        :IsOpen="IsUslugaOpen"
    ></VPriorityModal>
    <VSetsModal
        v-if="ProductsItem.type === 'sets'"
        v-on:CloseProductModal="CloseProductModal"
        :IsOpen="IsSetsOpen"
    ></VSetsModal>
    <CustomPrefixModal
        v-if="ProductsItem.type === 'prefix'"
        v-on:CloseProductModal="CloseProductModal"
        :ProductsItem="ProductsItem"
        :IsActive="IsPrefixOpen"
    ></CustomPrefixModal>
  </div>
</template>

<script>
import VDonatModal from '@/components/VDonatModal.vue';
import VPriorityModal from '@/components/VPriorityModal.vue';
import VProductItemModal from '@/components/VProductItemModal.vue';
import CustomPrefixModal from '@/components/CustomPrefixModal.vue';
import CustomTagModal from '@/components/CustomTagModal.vue';
import VSetsModal from "@/components/VSetsModal";

export default {
  name: "VProductsItem",
  props: {
    ProductsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data: () => {
    return {
      IsFullInfo: false,
      IsDonateOpen: false,
      IsUslugaOpen: false,
      IsSetsOpen: false,
      IsTagOpen: false,
      IsPrefixOpen: false
    };
  },
  components: {VSetsModal, VProductItemModal, VDonatModal, VPriorityModal, CustomTagModal, CustomPrefixModal},
  methods: {
    CheckProductModal() {
      document.body.classList.add('openBody')
      console.log(this.ProductsItem.type)
      switch (this.ProductsItem.type) {
        case "tovar":
          this.IsFullInfo = true
          break
        case "donat":
          this.IsDonateOpen = true
          break
        case "usluga":
          this.IsUslugaOpen = true
          break
        case "sets":
          this.IsSetsOpen = true
          break
        case "tag":
          this.IsTagOpen = true
          break
        case "prefix":
          this.IsPrefixOpen = true
          break
        default:
          console.log("Wrong Type")
      }
    },
    CloseProductModal(type) {
      document.body.classList.remove('openBody')
      switch (type) {
        case "tovar":
          this.IsFullInfo = false
          this.$emit('OpenModal', 'success')
          break
        case "donat":
          this.IsDonateOpen = false
          this.$emit('OpenModal', 'success')
          break
        case "usluga":
          this.IsUslugaOpen = false
          this.$emit('OpenModal', 'success')
          break
        case "sets":
          this.IsSetsOpen = false
          this.$emit('OpenModal', 'success')
          break
        case "tag":
          this.IsTagOpen = false
          this.$emit('OpenModal', 'success')
          break
        case "prefix":
          this.IsPrefixOpen = false
          this.$emit('OpenModal', 'success')
          break
        default:
          this.IsDonateOpen = false
          this.IsFullInfo = false
          this.IsUslugaOpen = false
          this.IsSetsOpen = false
          this.IsTagOpen = false
          this.IsPrefixOpen = false
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.title__block
  +flexa
  justify-content: space-between

.products
  &__item
    background: linear-gradient(0deg, #0d0d10, #0d0d10), radial-gradient(61.67% 58.01% at 50% 50%, #ea384d 0, rgba(234, 56, 77, 0) 100%)
    border-radius: 17px
    padding: 13px
    overflow: hidden
    position: relative
    border: 1px solid #521016
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
    z-index: 2

    &::after
      content: ""
      background: $red
      position: absolute
      right: 0
      top: -256px
      width: 316px
      height: 316px
      filter: blur(196.5px)
      z-index: 1

    &:hover
      background: radial-gradient(98.17% 98.17% at 50% 50%, rgba(234, 56, 77, .55) 0, rgba(234, 56, 77, 0) 100%)

      .products__img
        background: radial-gradient(100% 100%, #c8465a 0, rgba(211, 63, 85, 0) 100%)

  &__img
    background: radial-gradient(100% 100.1% at 50% 50%, rgba(200, 70, 90, .55) 0, rgba(211, 63, 85, 0) 100%)
    border-radius: 9px
    padding: 31px
    margin-bottom: 14px
    width: 100%
    height: 195px
    +flexa
    justify-content: center
    position: relative
    z-index: 2

    img
      max-width: 216px
      max-height: 160px

  &__info
    transition: .3s

    &:hover
      transform: scale(1.3)

  &__title
    font-family: Gilroy-SemiBold
    font-size: 15px
    font-weight: 600
    margin-bottom: 3px
    position: relative
    z-index: 2

    &::after
      content: ""
      width: 69px
      height: 3px
      background: $red
      box-shadow: 0 4px 12px rgba(234, 56, 77, .55)
      position: absolute
      bottom: 4px
      right: -13px
      z-index: -1

  &__descript
    font-family: Gilroy-Regular
    font-size: 12px
    color: hsla(0, 0%, 100%, .55)
    margin-bottom: 13px
    max-width: 100%
    font-weight: 400
    line-height: 17px
    display: -webkit-box
    -webkit-line-clamp: 4
    -webkit-box-orient: vertical
    overflow: hidden
    text-overflow: ellipsis

  &__button
    font-family: Gilroy-Regular
    width: 100%
    font-size: 12px
    padding: 15px
    background: radial-gradient(50% 1207.81% at 50% 50%, rgba(234, 56, 77, .25) 0, rgba(128, 16, 30, .25) 100%)
    border: 1px solid #ea384d
    border-radius: 7px
    color: #fff
    border: 1px solid transperent
    transition: .3s

    &:hover
      background: radial-gradient(50% 1207.81% at 50% 50%, #ea384d 0, #80101e 100%)
      border: 1px solid #ea384d

  &__price
    font-family: Gilroy-SemiBold
    position: absolute
    top: 0
    right: 21px
    background: linear-gradient(180deg, #ffb546, #bb8636)
    font-weight: 600
    font-size: 14px
    color: rgba(0, 0, 0, .66)
    padding: 7px 14px
    border-radius: 0 0 8px 8px
    z-index: 3
</style>