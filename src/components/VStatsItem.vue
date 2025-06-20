<template>
  <div class="stat__block">
        <div class="stat__title">{{ StatsItem.title }}</div>
        <div class="stat__icon"><img :src="require(`@/assets/img/stats/${StatsItem.img}`)" alt="statIcon"></div>
        <div class="stat__date">{{ StatsItem.state }}</div>
    </div>
</template>

<script>
export default {
    name: "VStatsItem",
    props: {
        StatsItem: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.stat__block
    width: 100%
    border-radius: 24px
    background-image: url(~@/assets/img/stat_bgf.png)
    +bg
    +flexa
    justify-content: center
    position: relative
    height: 212px
.stat__title
    font-size: 15px
    font-weight: 600
    top: 18px
    left: 16px
    position: absolute
.stat__icon
    width: 75px
    height: 75px
    align-self: center
.stat__date
    bottom: 20px
    position: absolute
    right: 20px
    font-weight: 600
    font-size: 14px
    color: #E13B5F
</style>