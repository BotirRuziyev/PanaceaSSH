<template>
  <div class="purchase">
    <div class="main_container">
      <section class="car_cards" :class="'bgblur' ? 'car_cards_blur' : ''">
        <div class="card_item" v-for="item of 8" :key="item">
          <div class="card_item_in">
            <div class="car_price">$91.69</div>
            <div class="card_img">
              <img src="@/assets/images/car_img.png" alt="" />
            </div>
            <h2 class="card_title">
              <span class="title_in"><span>RANGE ROVER SPORT</span></span>
            </h2>
            <p class="card_description">
              Краткое описание услуги тут в пару строк для примера бла-бла,
              рыба-текст для крутых ребят.
            </p>
            <div class="card_bottom">
              <button class="buy_btn">Purchase</button>
              <div class="card_bottom_icon">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.75618 0.0110091C7.21475 0.185993 6.13971 0.506672 4.96268 1.14249C3.57114 1.89424 2.2841 3.10336 1.43008 4.46127C0.713038 5.60138 0.286939 6.78304 0.0470561 8.29642C-0.0156854 8.69221 -0.0156854 10.3165 0.0470561 10.7123C0.39643 12.9166 1.20868 14.5992 2.63582 16.0752C3.78119 17.2598 5.00969 18.0377 6.52471 18.5376C7.57164 18.8831 8.32364 19 9.5 19C10.6764 19 11.4284 18.8831 12.4753 18.5376C13.9903 18.0377 15.2188 17.2598 16.3642 16.0752C17.7913 14.5992 18.6036 12.9166 18.9529 10.7123C19.0157 10.3165 19.0157 8.69221 18.9529 8.29642C18.6656 6.48351 18.0983 5.10661 17.0816 3.75491C16.749 3.31258 16.0314 2.56615 15.5632 2.17545C14.2447 1.07515 12.6499 0.366403 10.8509 0.081181C10.5039 0.0261734 9.05125 -0.0225158 8.75618 0.0110091ZM10.493 1.79344C11.8466 1.96935 13.1081 2.49122 14.2345 3.34131C14.6262 3.63686 15.3713 4.38147 15.667 4.77284C16.7328 6.18331 17.2729 7.77466 17.2729 9.50435C17.2729 11.234 16.7328 12.8254 15.667 14.2359C15.3713 14.6272 14.6262 15.3718 14.2345 15.6674C12.8232 16.7325 11.2308 17.2723 9.5 17.2723C7.7692 17.2723 6.17682 16.7325 4.76546 15.6674C4.37384 15.3718 3.62875 14.6272 3.333 14.2359C2.26718 12.8254 1.72705 11.234 1.72705 9.50435C1.72705 7.77466 2.26718 6.18331 3.333 4.77284C3.62875 4.38147 4.37384 3.63686 4.76546 3.34131C5.87811 2.50163 7.14 1.97575 8.47724 1.79448C8.99197 1.72468 9.9602 1.7242 10.493 1.79344ZM9.11686 4.09224C8.50666 4.31922 8.19801 4.97786 8.42175 5.57547C8.79612 6.57538 10.2039 6.57538 10.5782 5.57547C10.7806 5.03506 10.537 4.41756 10.0156 4.14873C9.81058 4.04307 9.33022 4.01285 9.11686 4.09224ZM9.22322 8.10805C9.02418 8.18194 8.9071 8.27411 8.77477 8.46107L8.6632 8.61869L8.65282 11.4495C8.64137 14.5781 8.63293 14.4555 8.87768 14.707C9.30125 15.1421 10.0327 15.017 10.2855 14.4662C10.3498 14.3262 10.3538 14.1538 10.3546 11.5195C10.3555 8.49218 10.363 8.61018 10.1518 8.35982C9.9409 8.10987 9.52336 7.99666 9.22322 8.10805Z"
                    fill="black"
                    fill-opacity="0.74"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "PurchasePage",
};
</script>

<style lang="sass" scoped>
.purchase
  overflow: hidden

.main_container
  max-width: 1920px
  margin: 0 auto
  position: relative
  .kub_top_bg
    position: absolute
    top: -370px
    left: -330px

  .kvadrat_left_bg
    position: absolute
    bottom: -411px
    left: -541px

  .kvadrat_right_bg
    position: absolute
    bottom: -272px
    right: -540px

  .klipartz
    position: absolute
    bottom: -122px
    right: -161px
    z-index: 1

  .kub_bottom_bg
    position: absolute
    right: -330px
    bottom: -370px


.car_cards
  max-width: 1150px
  margin: 0 auto
  padding: 213px 20px 118px
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: 27px
  position: relative
  z-index: 10
  transition: 0.4s
  .card_item
    border-radius: 17px
    position: relative
    padding: 1px
    background: #521016
    .card_item_in
      background: linear-gradient(0deg, #0d0d10, #0d0d10),
        radial-gradient(
          61.67% 58.01% at 50% 50%,
          #ea384d 0%,
          rgba(234, 56, 77, 0) 100%
        )

      border-radius: 17px
      padding: 13px
      overflow: hidden
      position: relative
      &::after
        content: ""
        background: #ea384d
        position: absolute
        right: 0
        top: -256px
        width: 316px
        height: 316px
        filter: blur(196.5px)
        z-index: 1

      &:hover
        .card_img
          background: radial-gradient(
            100% 100% at 50% 50%,
            #c8465a 0%,
            rgba(211, 63, 85, 0) 100%
          )




    .car_price
      position: absolute
      top: 0
      right: 21px
      background: linear-gradient(180deg, #ffb546 0%, #bb8636 100%)
      font-family: "Gilroy", sans-serif
      font-style: normal
      font-weight: 600
      font-size: 14px
      line-height: 145%
      text-align: center
      letter-spacing: 0.4px
      color: rgba(0, 0, 0, 0.66)
      padding: 7px 14px
      border-radius: 0 0 8px 8px
      z-index: 4

    .card_img
      background: radial-gradient(
        100% 100.1% at 50% 50%,
        rgba(200, 70, 90, 0.55) 0%,
        rgba(211, 63, 85, 0) 100%
      )
      border-radius: 9px
      position: relative
      z-index: 3
      border-radius: 9px
      padding: 31px
      text-align: center
      margin-bottom: 14px

    .card_title
      font-family: "Gilroy", sans-serif
      font-style: normal
      font-weight: 600
      font-size: 15px
      line-height: 18px
      text-align: center
      letter-spacing: 0.4px
      color: #ffffff
      margin-bottom: 1px
      display: flex
      justify-content: center
      align-items: center
      cursor: pointer
      z-index: 3
      svg
        cursor: pointer

      .title_in
        position: relative
        z-index: 2
        &::after
          content: ""
          width: 69px
          height: 3px
          background: #ea384d
          box-shadow: 0px 4px 12px rgba(234, 56, 77, 0.55)
          position: absolute
          bottom: 2px
          right: 0
          left: 0
          margin: 0 auto
          z-index: 1

        span
          position: relative
          z-index: 5



    .card_description
      font-family: "Gilroy", sans-serif
      font-style: normal
      font-weight: 400
      font-size: 12px
      line-height: 17px
      text-align: center
      letter-spacing: 0.4px
      color: rgba(255, 255, 255, 0.55)
      margin-bottom: 13px
      position: relative
      z-index: 3

    .card_bottom
      display: flex
      justify-content: space-between
      gap: 6px
      svg
        transition: 0.3s

      .card_bottom_icon
        display: flex
        align-items: center
        justify-content: center
        background: rgba(255, 255, 255, 0.15)
        border-radius: 5px
        height: 39px
        max-width: 39px
        width: 100%
        cursor: pointer
        transition: 0.3s
        &:hover
          background: #fff
          svg
            transform: scale(1.3)
            path
              fill: rgba(0, 0, 0, 0.74)



        svg
          transition: 0.3s
          path
            fill: rgba(255, 255, 255, 0.74)




    .buy_btn
      width: 100%
      padding: 10px
      background: rgba(255, 255, 255, 0.15)
      border-radius: 5px
      font-family: "Gilroy", sans-serif
      font-style: normal
      font-weight: 600
      font-size: 14px
      line-height: 145%
      letter-spacing: 0.4px
      color: rgba(255, 255, 255, 0.74)
      cursor: pointer
      position: relative
      z-index: 3
      border: 0
      transition: 0.3s
      &:hover
        background: #fff
        color: rgba(0, 0, 0, 0.74)




.car_cards_blur
  filter: blur(10px)

.purchase_modal_container
  max-width: 1011px
  width: 100%
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  visibility: hidden
  opacity: 0
  transition: all 0.4s

.purchase_modal
  padding: 35px 67px 60px
  border-radius: 17px
  background: linear-gradient(162deg, #541921 0%, #17090b 100%)
  margin: 0 auto

  .purchase_modal_in
    display: flex
    gap: 94px

  .swiper_container
    max-width: 420px
    display: flex
    justify-content: space-between
    align-content: center
    position: relative
    .swiper-button-next
      right: -45px
      transition: 0.3s
      &:hover
        transform: scale(1.3)

      svg
        width: 12.531px
        height: 20px
        opacity: 0.800000011920929

      &::after
        display: none


    .swiper-button-prev
      left: -45px
      transition: 0.3s
      &:hover
        transform: scale(1.3)

      svg
        width: 12.531px
        height: 20px
        opacity: 0.800000011920929

      &::after
        display: none


    .swiper-button-disabled
      opacity: 0

    .swiper_container_center
      position: relative

    .swiper-pagination
      bottom: -42px


  .purchaseSwiper
    max-width: 420px
    height: 100%
    border-radius: 17px
    background: radial-gradient(
      94.43% 74.15% at 50% 50%,
      rgba(239, 44, 74, 0.55) 0%,
      rgba(60, 18, 23, 0.55) 100%
    )

    .swiper-slide
      display: flex
      align-items: center
      justify-content: center
      img
        width: 100%



  .purchase_body
    .title
      max-width: 292px
      color: #fff
      font-family: Montserrat, sans-serif
      font-size: 32px
      font-style: normal
      font-weight: 700
      line-height: normal
      margin-bottom: 30px

    .description
      color: #fff
      font-family: Montserrat, sans-serif
      font-size: 14px
      font-style: normal
      font-weight: 400
      line-height: 150%
      letter-spacing: 0.4px
      margin-bottom: 30px

    .purchase_btn
      max-width: 213px
      width: 100%
      border-radius: 5px
      background: #e4354a
      color: #fff
      text-align: center
      font-family: Montserrat, sans-serif
      font-size: 14px
      font-style: normal
      font-weight: 500
      line-height: 145%
      padding: 10px
      border: 0
      cursor: pointer
      transition: 0.3s
      &:hover
        background: rgba(69, 49, 52, 1)
        transform: scale(1.05)



  .exit_btn
    border: 0
    background: transparent
    position: absolute
    top: 35px
    right: 51px
    cursor: pointer
    transition: 0.3s
    &:hover
      transform: scale(1.5)



.purchase_modal_active
  visibility: visible
  opacity: 1
  z-index: 10


@media (max-width: 1200px)
  .car_cards
    grid-template-columns: repeat(3, 1fr)

  .purchase_modal_container
    padding: 0 20px

  .purchase_modal
    padding: 23px 27px
    .purchase_modal_in
      gap: 50px
      .swiper_container
        max-width: 390px
        .purchaseSwiper
          max-width: 390px

        .swiper-pagination
          bottom: 10px

        .swiper-button-next
          right: -30px

        .swiper-button-prev
          left: -30px





@media (max-width: 850px)
  .car_cards
    grid-template-columns: repeat(2, 1fr)

  .purchase_modal_container
    max-width: 576px

  .purchase_modal
    .purchase_modal_in
      flex-direction: column
      gap: 12px
      .swiper_container
        max-width: 100%
        .swiper-button-next
          right: -28px
          svg
            width: 7.472px
            height: 11.926px


        .swiper-button-prev
          left: -28px
          svg
            width: 7.472px
            height: 11.926px


        .swiper_container_center
          width: 100%

        .purchaseSwiper
          max-width: 100%
          width: 100%
          .swiper-slide
            width: 100%
            padding: 50px 13px



      .purchase_body
        .title
          font-size: 12px
          line-height: normal
          margin-bottom: 10px

        .description
          font-size: 10px
          line-height: 150%
          overflow: hidden
          display: -webkit-box
          -webkit-line-clamp: 4  /* number of lines to show */
          line-clamp: 4
          -webkit-box-orient: vertical

        .purchase_btn
          width: 100%
          max-width: 100%



    .exit_btn
      top: 16px
      right: 48px


  #modalDonation
    .modalDonation_in
      max-width: 576px
      padding: 23px
      h2
        font-size: 20px
        line-height: 91.4%

      span
        font-size: 10px
        margin-bottom: 20px
        line-height: normal

      p
        font-size: 12px
        line-height: normal

      .donadte_form
        .buttons
          gap: 7px
          div
            flex: 1 1 0

          .btn_donate
            width: 100%
            padding: 14.979px 12.255px 14.979px 14.979px
            font-size: 21.787px
            border-radius: 11.574px
            span
              align-content: flex-end
              font-size: 8.17px
              line-height: normal
              margin-bottom: 4px



        .other_donate
          input
            padding: 14.979px 12.255px 14.979px 14.979px
            color: #fff
            font-family: Montserrat, sans-serif
            font-size: 21.787px
            font-style: normal
            font-weight: 700
            line-height: normal


        .last_button
          button
            font-size: 12px
            line-height: 145%
            width: 100%
            max-width: 100%






@media (max-width: 576px)
  .car_cards
    grid-template-columns: repeat(1, 1fr)
    padding: 150px 20px 100px
</style>
