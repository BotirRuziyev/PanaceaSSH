<template>
  <div class="modal__sucsesful" :class="{'modal__sucsesful-active': IsOpen === true}">
    <div class="suc__header">
        <div class="header__img"><img src="../assets/img/svg/suc.svg" alt="suc"></div>
        <h1 class="suc__title">Successful!</h1>
    </div>
    <div class="suc__main">
        <p class="suc__descript">Thank you for your support.</p>
        <p class="suc__descript">This helps us to develop the server</p>
    </div>
  </div>
</template>

<script>
import { watch } from 'vue';
export default {
    name: "VModalSucsesful",
    props: {
        IsOpen: {
            type: Boolean,
            default(){
                return false
            }
        },
      errorMessage: String,
    },
    setup(props, {emit}){
        watch(() => props.IsOpen, (first) => {
            if(first == true) setTimeout(() => emit('CloseModalSucses'), 2500);
        });
    }
}
</script>

<style lang="sass" scoped>
.modal__sucsesful
    border-radius: 17px
    background: linear-gradient(162deg, #541921 0%, #17090B 100%)
    position: fixed
    top: 10px
    right: 10px
    z-index: $absIndex
    padding: 15px 20px
    border: 1px solid $pink
    transform: scale(0)
    transition: .4s
    max-width: 400px
    width: 100%
    &-active
        transform: scale(1)
.suc__header
    +flexa
    .header__img
        margin-right: 10px
        width: 20px
        height: 20px
    .suc__title
        font-size: 21px
        font-weight: 700
.suc__main
    margin-top: 15px
    .suc__descript
        font-size: 12px
        font-weight: 700
@media screen and (max-width: $mobileContainer)
    .modal__sucsesful
        padding: 20px
        width: 100%
        top: 0
        right: 0
    .suc__header 
        .suc__title
            font-size: 25px
    
</style>