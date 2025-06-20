<template>
  <div class="modalBg" :class="{'modalBg-active': IsModalOpen === true}">
    <div class="modal__main" :class="{'modal__main-active': ModalAnimate === true}">
      <button
          @click="close"
          class="clode__btn"
      ><img src="../assets/img/svg/krest.svg" alt="krest"></button>
      <div class="main__info">
        <div class="main__info-title">
          <p v-if="selectedVariant === 2">Changing clan Tag Color</p>
          <p v-if="selectedVariant === 1">Changing Prefix Color</p>
        </div>
        <div class="color-picker__container">
          <color-picker is-widget
                        v-model:pureColor="pureColor"
                        format="rgb"
                        shape="square"
                        picker-type="chrome"
                        disable-history
                        disable-alpha/>
          <input v-if="selectedVariant === 1" class="prefix__input" :style="{color: pureColor}" maxlength="15" placeholder="Prefix name" ref="prefixInput">

        </div>
        <div class="buttons">
          <div class="btn get" @click="buy">Change</div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import {ColorPicker} from "vue3-colorpicker";
const {useToast} = require("vue-toastification");
import NotifyModal from "@/components/NotifyModal";

import "vue3-colorpicker/style.css";
import {ref} from 'vue'
export default {

  name: "ChangeColorModal",
  props: {
    IsModalOpen: {
      type: Boolean
    },
      selectedVariant: Number,
      serverid: Number,
      id: Number
  },
  data: () => {
    return {
      ModalAnimate: false,
      pureColor: 'rgb(255, 255, 255)',
      gradientColor: '',
    }
  },
  watch: {
    IsModalOpen() {
      setTimeout(() => {
        this.ModalAnimate = !this.ModalAnimate
      }, 100)

    }
  },
  setup() {
    const prefixInput = ref(null);
    return {
      prefixInput,
    };
  },
  methods: {
    async buy(){
      const toast = useToast();
      let server_id = this.getServerByName(this.serverid)
      switch (this.selectedVariant) {
          case 1:
            try {
              const response = await this.axios.post('https://api.panaceadayz.com/v2/Player.setCustomPrefix', {
                subid: this.id,
                serverid: server_id,
                prefix: this.prefixInput.value,
                rgb: this.pureColor
              }, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
              console.log(response)
              if(response.data.success === false) {
                toast.error({
                  component: NotifyModal,
                  props: {
                    message: response.data.message,
                    type: 'Error!'
                  },
                }, {
                  position: "top-right",
                  timeout: 2000,
                  closeOnClick: true,
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  draggable: true,
                  draggablePercent: 0.6,
                  showCloseButtonOnHover: false,
                  hideProgressBar: false,
                  closeButton: "button",
                  icon: true,
                  rtl: false,

                });
                return;
              }
              toast.success({
                component: NotifyModal,
                props: {
                  message: response.data.message,
                  type: 'Success!'
                },
              }, {
                position: "top-right",
                timeout: 2000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: false,
                closeButton: "button",
                icon: true,
                rtl: false,

              });
              this.$emit("closeModal");
            }catch (error) {
              toast.error({
                component: NotifyModal,
                props: {
                  message: error.message,
                  type: 'Error!'
                },
              }, {
                position: "top-right",
                timeout: 2000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: false,
                closeButton: "button",
                icon: true,
                rtl: false,
              });
            }
            break
          case 2:
            try {
              const response = await this.axios.post('https://api.panaceadayz.com/v2/Player.setCustomColor', {
                subid: this.id,
                serverid: server_id,
                rgb: this.pureColor
              }, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
              if(response.data.success === false) {
                toast.error({
                  component: NotifyModal,
                  props: {
                    message: response.data.message,
                    type: 'Error!'
                  },
                }, {
                  position: "top-right",
                  timeout: 2000,
                  closeOnClick: true,
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  draggable: true,
                  draggablePercent: 0.6,
                  showCloseButtonOnHover: false,
                  hideProgressBar: false,
                  closeButton: "button",
                  icon: true,
                  rtl: false,

                });
                return;
              }
              toast.success({
                component: NotifyModal,
                props: {
                  message: response.data.message,
                  type: 'Success!'
                },
              }, {
                position: "top-right",
                timeout: 2000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: false,
                closeButton: "button",
                icon: true,
                rtl: false,

              });
              this.$emit("closeModal");

            }catch (error) {
              toast.error({
                component: NotifyModal,
                props: {
                  message: error.message,
                  type: 'Error!'
                },
              }, {
                position: "top-right",
                timeout: 2000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: false,
                closeButton: "button",
                icon: true,
                rtl: false,
              });
            }
            break
      }
    },
    getServerByName(server_id) {
      switch (server_id) {
        case 'Chernarus MOD US':
          return 1;
      }
    },
    close() {
      this.$emit("closeModal");
    },
  },
  components: {ColorPicker},
}
</script>

<style>
.vc-colorpicker--container {
  padding: 0px!important;
}
.vc-saturation__chrome{
  border-radius: 14px!important;
}
.vc-saturation{
  margin-bottom: 35px!important;
  height: 170px!important;
}
.chrome-sliders{
  margin-left: 0!important;
}
.vc-display{
  display: none!important;
}
.vc-colorpicker.white{
  background-color: unset!important;
}
.vc-saturation__white{
  border-radius: 12px!important;
}
.vc-saturation__black{
  border-radius: 12px!important;
}
</style>
<style lang="css" scoped>
.modal__main {
  max-width: 600px;
}
.modal__main{
  padding: 30px 45px!important;
}

.clode__btn {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #ea384d;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}
.clode__btn:hover{
  transform: scale(1.05);
  transition: all 0.3s;
}
.clode__btn:hover img{
  width: 40px;
  height: 20px;
  transition: all 0.3s;

}
.clode__btn img {
  width: 20px;
  height: 13px;
  transition: all 0.3s;
}

.modal__title {
  font-size: 21px;
  font-weight: 600;
}

.promo__descript {
  color: #C7A1AB;
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
}

.promo__descript span {
  color: yellow;
  font-weight: 600;
}

.vers {
  background: rgba(64, 17, 25, 0.4);
  padding: 10px 15px;
  margin-top: 15px;
  width: 100%;
  border-radius: 10px;
  text-align: left;
  transition: .3s;
}

.vers:hover {
  background-color: #ea384d;
  color: #ffffff;
}

.vers__title {
  font-size: 21px;
  margin-bottom: 10px;
}

.vers__descript {
  color: #C7A1AB;
  font-size: 14px;
}

.color-picker__container {
  padding: 20px 20px 0 20px;
}
.buttons .btn:hover {
  -webkit-transition: 0.3s all;
  transition: 0.3s all;
  -webkit-transform: scale(1.05);
  transform: scale(1.05)
}
.buttons {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: -40px;
}

.buttons .btn {
  -webkit-transition: 0.3s all;
  transition: 0.3s all;
  width: 260px;
  height: 56px;
  margin: 0 6.5px;
  background: -webkit-gradient(linear, left top, right top, from(#D31027), to(#EA384D));
  background: linear-gradient(90deg, #D31027 0%, #EA384D 100%);
  border-radius: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #FFFFFF
}
.buttons .btn:hover,
.buttons .btn.active {
  transition: all 0.3s;
  color: #fff;
  background: linear-gradient(90deg, #D31027 0%, #EA384D 100%);
}
.main__info-title{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.main__info-title p{
  color: #FFE6EA;
  font-size: 15px;
}
.main__info-title span{
  color: #D11737;
  font-size: 15px;
}
.prefix__input{
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  background: linear-gradient(90deg, rgba(211, 16, 39, 0.2) 0%, rgba(234, 56, 77, 0.2) 100%);
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 15px 17px;
  width: 100%;
}
.prefix__input:focus{
  border: 1px solid #FF0000FF
}

</style>