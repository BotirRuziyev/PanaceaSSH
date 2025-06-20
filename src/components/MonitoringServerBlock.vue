<template>
  <div class="server">
    <div
        v-for="(server, serverName) in servers"
        :key="serverName">
      <aos-vue animation="flip-left" :delay="100" :offset="-250">
        <div class="server__block" :id="'server__block-' + Object.keys(servers).indexOf(serverName)">
          <div class="server__info">
            <h2 class="server__title">{{ server.name }}</h2>
            <div v-if="!server.is_queue">
              <p class="server__descript">
              <span>
                <Vue3Odometer class="IOdometer" :value="Math.floor(server.players_count)" format="(ddd)"/>
                /
                <Vue3Odometer class="IOdometer" :value="Math.floor(server.slots)" format="(ddd)"/>
              </span>
              </p>
            </div>
            <div v-else>
              <p class="server__descript">
              <span style="display: flex; align-items: flex-end; flex-direction: row;">
                <span style="margin-right: 5px;">In queue:</span>
                <Vue3Odometer class="IOdometer" :value="Math.floor(server.queue_size)" format="(ddd)"/>
              </span>
              </p>
            </div>
          </div>
          <div class="round">
            <div class="server__round" :style="{ '--pie-p': (server.players_count / server.slots) * 100 + '%' }"></div>
            <span><Vue3Odometer class="IOdometer" :value="server.players_count" format="d"/></span>
          </div>
        </div>
      </aos-vue>
    </div>
  </div>
</template>

<script>
import Vue3Odometer from 'vue3-odometer'

export default {
  name: "MonitoringServerBlock",
  components: {Vue3Odometer},
  props: {
    servers: Object, // Принимаем объект с данными о серверах
  },

}
</script>
<style>
[data-aos=flip-left] {;
  transform: rotateY(90deg);
}
</style>

<style lang="sass" scoped>
.server
  +flexa

  &__block
    +flexa
    +bg
    padding: 40px 26px
    border-radius: 22px

  &__title
    font-weight: 600
    font-size: 18px
    line-height: 28px
    color: $pink

  &__descript
    font-weight: 600
    font-size: 16px
    line-height: 28px
    color: $white

.round
  position: relative
  width: 76px
  font-weight: 600
  font-size: 23px
  margin-left: 20px

  span:first-of-type
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

.server__round
  aspect-ratio: 1
  border-radius: 50%
  background: conic-gradient($red, $red var(--pie-p, 0%), #2c0f14 0)
  transition: background 0.5s
  --pie-b: 5px
  mask: radial-gradient(farthest-side, #0000 calc(99% - var(--pie-b)), #000 calc(100% - var(--pie-b)))

#server__block-0
  background-image: url("~@/assets/img/server_bg_1.png")

#server__block-1
  background-image: url("~@/assets/img/server_bg_2.png")
  margin-left: 22px
#server__block-2
  background-image: url("~@/assets/img/server_bg_2.png")
  margin-left: 22px

@media screen and (max-width: $tabletContainer)
  .server
    flex-direction: column
  #server__block-1
    margin-left: 0px
    margin-top: 15px

@media screen and (max-width: 750px)
  .monit
    justify-content: center
    padding: 73px 0px
    flex-direction: column
  .server
    margin-top: 20px
</style>