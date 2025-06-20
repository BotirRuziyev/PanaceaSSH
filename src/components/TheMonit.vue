<template>
  <section class="monit__block">
    <div class="container">
      <div class="monit">
        <div class="monit__info">
          <div class="info__title">
            <img class="min__logo" src="../assets/img/logo-2.png" alt="LogoMin">
            <h1 class="section__title">Server Monitoring</h1>
          </div>
          <p class="monit__descript">Total online: <span class="vue_odometer_span"><Vue3Odometer class="IOdometer" :value="Math.floor(totalOnline)" format="(ddd)"/></span>  survivors</p>
        </div>
        <MonitoringServerBlock :servers="MONITORING_ONLINE"/>
      </div>
    </div>
  </section>
</template>

<script>
import MonitoringServerBlock from "@/components/MonitoringServerBlock";
import Vue3Odometer from 'vue3-odometer'
import {mapGetters} from "vuex";
import 'odometer/themes/odometer-theme-default.css';
export default {
  name: "TheMonit",
  components: {MonitoringServerBlock,Vue3Odometer},

  computed: {
    ...mapGetters(["MONITORING_ONLINE"]),
    totalOnline() {
      if (this.MONITORING_ONLINE) {
        const onlineValues = Object.values(this.MONITORING_ONLINE);
        return onlineValues.reduce((sum, server) => sum + server.players_count, 0);
      }
      return 0;
    },
  },
  sockets:{
    "monitoring.online": function (data){
      this.$store.commit('SET_MONITORING_ONLINE', data);
    }
  },
  created() {
    this.$store.dispatch('GET_MONITORING_ONLINE');
  },
}
</script>
<style>
.odometer.odometer-auto-theme, .odometer.odometer-theme-default{
  font-family: "Inter",sans-serif;
}

.monit__descript span .odometer .odometer-digit-spacer{
  font-weight: 800;
  font-size: 21px;
  font-family: "Inter", sans-serif;
  letter-spacing: 0;
}

.monit__descript span .odometer .odometer-value{
  color: #d31027;
  font-weight: 800;
  font-size: 21px;
  font-family: "Inter", sans-serif;
  letter-spacing: 0;
}
.round .odometer .odometer-digit-spacer{
  font-weight: 600;
  font-size: 23px;
  font-family: "Inter", sans-serif;
  letter-spacing: 0;
}
.server__block .odometer .odometer-inside{
  display: flex;
}
.round .odometer .odometer-value{
  color: white;
  font-weight: 600;
  font-size: 23px;
  font-family: "Inter",sans-serif;
  letter-spacing: 0;
}
.server__descript .odometer .odometer-value{
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #FFFFFF;
  letter-spacing: 0;
}
.server__descript .odometer .odometer-digit-spacer{
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #FFFFFF;
  letter-spacing: 0;
}
</style>
<style scoped>
.monit__block {
  margin-top: 50px;
  margin-bottom: 88px;
}

.monit {
  border-radius: 21px;
  width: 100%;
  padding: 73px 59px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: url("~@/assets/img/servers_stat_bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.monit__descript {
  font-weight: 600;
  font-size: 21px;
}
.monit__info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>