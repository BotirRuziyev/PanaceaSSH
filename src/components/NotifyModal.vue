<template>
  <!--    <div class="modal__error" v-if="type === 'error'" :class="{'modal__error-active': IsOpen === true}">-->
  <!--      <div class="error__header">-->
  <!--        <div class="error__img"><img src="../assets/img/svg/err.svg" alt="ErrorImg"></div>-->
  <!--        <h1 class="error__title">Error!</h1>-->

  <!--      </div>-->
  <!--      <span>{{message}}</span>-->
  <!--    </div>-->

  <!--    <div class="modal__sucsesful" v-if="type === 'success'" :class="{'modal__sucsesful-active': IsOpen === true}">-->
  <!--      <div class="suc__header">-->
  <!--        <div class="header__img"><img src="../assets/img/svg/suc.svg" alt="suc"></div>-->
  <!--        <h1 class="suc__title">Successful!</h1>-->
  <!--      </div>-->
  <!--      <div class="suc__main" v-if="message">-->
  <!--        <p class="suc__descript">{{message}}</p>-->
  <!--      </div>-->
  <!--      <div class="suc__main" v-else>-->
  <!--        <p class="suc__descript">Thank you for your support.</p>-->
  <!--        <p class="suc__descript">This helps us to develop the server</p>-->
  <!--      </div>-->
  <!--    </div>-->
  <div>
    <h1>{{ type }}</h1>
    <span>{{ message }}</span>
  </div>
</template>

<script>
// import { watch } from "vue";

export default {
  name: "NotifyModal",
  props: {
    message: {
      type: String
    },
    type: {
      type: String
    }
  }
  // props: {
  //   message: {
  //     type: String
  //   },
  //   type: {
  //     type: String
  //   },
  //   IsOpen: {
  //     type: Boolean,
  //     default(){
  //       return false
  //     }
  //   }
  // },
  // setup(props, {emit}){
  //   watch(() => props.IsOpen, (first) => {
  //     if(first == true) setTimeout(() => emit('CloseNotifyModal'), 2500);
  //   });
  // }
}
</script>

<style lang="sass" scoped>
.modal__error
  border-radius: 17px
  background: linear-gradient(207deg, #541921 0%, #17090b 100%)
  position: fixed
  top: 110px
  right: 10px
  z-index: $absIndex
  padding: 51px 50px 51px 50px
  border: 1px solid $pink
  transform: scale(0)
  transition: .4s
  max-width: 450px
  width: 100%

  span
    color: $red
    font-size: 16px
    font-weight: 700
    line-height: 20px

  &-active
    transform: scale(1)

.error__header
  display: flex
  margin-bottom: 19px

  .error__img
    width: 20px
    height: 20px
    margin-right: 10px
    margin-top: 7px

  .error__title
    color: $red
    text-edge: cap
    font-size: 32px
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