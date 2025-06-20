<template>
  <router-view/>
</template>
<style lang="sass">
@import "@/assets/sass/main.sass"
@import "@/assets/sass/_vars.sass"
@import "@/assets/sass/_colors.sass"

</style>
<style>
@media only screen and (min-width: 600px) {
  .Vue-Toastification__container.top-center, .Vue-Toastification__container.top-left, .Vue-Toastification__container.top-right{
    top: 7em!important;
  }
}

</style>
<script>
export default {
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('jwt');

    if (token) {
      this.$store.commit('SET_JWT', token);
      this.axios.post('https://api.panaceadayz.com/v2/Player.GetAuth', {
      }).then((response) => {
        // console.log(response)
        if (response.data && response.data.user && response.data.user.auth === true) {
          this.$store.commit('SET_NEW_USER_DATE', response.data.user);
          window.location = '/';
        } else {
          console.error('Ошибка: Неверный формат данных пользователя');
        }
      }).catch((error) => {
        console.error('Ошибка при запросе данных пользователя:', error);
      });
    }
  }
}
</script>