<template>
  <div class="modal__error" :class="{'modal__error-active': IsOpen === true}">
    <div class="error__header">
        <div class="error__img"><img src="../assets/img/svg/err.svg" alt="ErrorImg"></div>
        <h1 class="error__title">Something went wrong!</h1>

    </div>
    <span>{{message}}</span>
  </div>
</template>

<script>
import { watch } from 'vue';
export default {
    name: "VErrorModal",
    props: {
      message: {
        type: String
      },
        IsOpen: {
            type: Boolean,
            default(){
                return false
            }
        }
    },
    setup(props, {emit}){
        watch(() => props.IsOpen, (first) => {
            if(first == true) setTimeout(() => emit('CloseModalError'), 2500);
        });
    }
}
</script>

<style lang="sass" scoped>
.modal__error
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
.error__header
    display: flex
    .error__img
        width: 20px
        height: 20px
        margin-right: 10px
        margin-top: 7px
    .error__title
        color: $red
        text-edge: cap
        font-size: 21px
        font-weight: 700
        line-height: 31px
@media screen and (max-width: $mobileContainer)
    .modal__error
        padding: 35px
        width: 100%
        top: 0
        right: 0
    .error__header
        .error__title
            font-size: 25px
</style>