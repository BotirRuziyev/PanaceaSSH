<template>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
      <div class="selected" :class="{ open: open }" @click="open = !open">
        {{ selected }}
      </div>
      <div class="items" :class="{ selectHide: !open }">
        <div
          v-for="(option, i) of options"
          :key="i"
          @click="selectOption(option)"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      options: {
        type: Array,
        required: true,
      },
      default: {
        type: String,
        required: false,
        default: null,
      },
      tabindex: {
        type: Number,
        required: false,
        default: 0,
      },
    },
    data() {
      return {
        selected: this.default || (this.options.length > 0 ? this.options[0] : null),
        open: false,
      };
    },
    watch: {
      options: {
        handler(newOptions) {
          if (this.selected === null && newOptions.length > 0) {
            this.selected = newOptions[0];
          }
        },
        deep: true,
      },
    },
    methods:{
      selectOption(option) {
        this.selected = option;
        this.open = false;
        this.$emit('change', option); // Отправляем выбранный сервер родительскому компоненту
      },
    },
    created() {
      this.$emit("input", this.selected);
    },
  };
  </script>

<style scoped lang="sass">
@import "@/assets/sass/_colors.sass"
.custom-select
    position: relative
    width: 209px
    text-align: left
    outline: none
    height: 47px
    line-height: 47px
    border-bottom: 1px solid transparent
    .selected
        background: linear-gradient(90deg, rgba(211,16,39,0.2) 0%, rgba(234,56,77,0.2) 100%)
        border-radius: 6px
        padding-left: 1em
        cursor: pointer
        user-select: none
        font-size: 12px
        font-weight: 400
        &.open
            border-radius: 6px 6px 0px 0px
            border: 1px solid $red
            border-bottom: 1px solid transparent
        &:after
            position: absolute
            content: ""
            top: 22px
            right: 1em
            width: 0
            height: 0
            border: 5px solid transparent
            border-color: #fff transparent transparent transparent
    .items
        color: #fff
        border-radius: 0px 0px 6px 6px
        overflow: hidden
        position: absolute
        background: #380f17
        left: 0
        right: 0
        z-index: 1
        border: 1px solid $red
        border-top: 1px solid transparent
        height: 96px
        transition: .5s
        div
            color: #fff
            padding-left: 1em
            cursor: pointer
            user-select: none
            font-size: 12px !important
            font-weight: 400 !important
            text-align: left
            &:hover
                background-color: #604246
.selectHide
  height: 0px !important
  border: 0px solid $red !important
</style>
  