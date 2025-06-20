<template>
  <div>
    <TheHeader></TheHeader>
    <main>
      <section class="products__block">
        <div class="container">
          <div class="products">
            <VProductsItem
            v-for="ProductsItem in PRODUCTS"
            :key="ProductsItem.id"
            :ProductsItem="ProductsItem"
            v-on:OpenModal="OpenModal"
            ></VProductsItem>
          </div>
        </div>
      </section>
    </main>

    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import VProductsItem from '@/components/VProductsItem.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "StorePage",
  components: {
    TheHeader,
    TheFooter,
    VProductsItem,
},
  mounted(){
    this.GET_PRODUCTS()
    this.GET_USER()
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS',
        'GET_USER'
    ]),
    },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  }
}
</script>

<style lang="sass" scoped>
header
  position: static !important
.products__block
  margin-top: 60px
.products
  display: grid
  grid-template-columns: repeat(4,1fr)
  gap: 27px
  max-width: 1105px
  margin: 0 auto
@media screen and (max-width:$tabletContainer)
  .products
    grid-template-columns: repeat(3,1fr)
@media screen and (max-width:$smalltabletContainer)
  .products
    grid-template-columns: repeat(2,1fr)
  
@media screen and (max-width: $mobileContainer)
  .products
    grid-template-columns: repeat(1,1fr)
</style>