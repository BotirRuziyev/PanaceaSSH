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
        selected: this.default
          ? this.default
          : this.options.length > 0
          ? this.options[0]
          : null,
        open: false,
      };
    },
    mounted() {
      this.$emit("input", this.selected);
    },
    methods:{
      selectOption(option) {
        this.selected = option;
        this.open = false;
        this.$emit("update:modelValue", option);
      },
    }
  };
  </script>

<style scoped lang="sass">
  .custom-select
    position: relative
    width: 100%
    text-align: left
    outline: none
    height: 47px
    line-height: 47px
    .selected
        background: #422529
        border-radius: 6px
        padding-left: 1em
        cursor: pointer
        user-select: none
        font-size: 16px
        font-weight: 600

        &.open
            border-radius: 6px 6px 0px 0px
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
        background: #422529
        left: 0
        right: 0
        z-index: 1

        div
            color: #fff
            padding-left: 1em
            cursor: pointer
            user-select: none
            font-size: 14px !important
            font-weight: 400 !important
            &:hover
                background-color: #604246
.selectHide
    display: none

</style>
  