<template>
  <TheHeader></TheHeader>
  <div class="leaderboard-page">
    <TheMonit></TheMonit>
    <TheTabs></TheTabs>
  </div>
  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheMonit from "@/components/TheMonit.vue";
import TheTabs from "@/components/TheTabs.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "LeaderBoard",
  components: { TheHeader, TheMonit, TheTabs, TheFooter },
};
</script>

<style lang="sass">
.leaderboard-page
  padding-top: 140px
  @media (max-width: $mobileContainer)
    padding-top: 100px
</style>
