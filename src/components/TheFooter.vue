<template>
  <footer>
    <div class="container">
      <div class="main__footer">
        <div class="footer__logo">
          <img src="../assets/img/logo3.png" alt="FooterLogo" />
        </div>
        <div class="other">
          <ul class="menu">
            <li>
              <a @click="scrollToTop" v-if="$route.path === '/'">Main</a>
              <router-link to="/" @click="scrollToTop" v-else>Main</router-link>
              <a @click="scrollToTop" v-if="$route.path === '/Contact'"
                >Contact</a
              >
              <router-link to="/Contacts" @click="scrollToTop" v-else
                >Contact</router-link
              >
            </li>
            <li>
              <a @click="scrollToTop" v-if="$route.path === '/Privacy'"
                >Privacy policy</a
              >
              <router-link to="/Privacy" @click="scrollToTop" v-else
                >Privacy policy</router-link
              >
              <a @click="scrollToTop" v-if="$route.path === '/Terms'"
                >Terms of use</a
              >
              <router-link to="/Terms" @click="scrollToTop" v-else
                >Terms of use</router-link
              >
            </li>
            <li>
              <a @click="scrollToTop" v-if="$route.path === '/Fulfilment'"
                >Fulfilment</a
              >
              <router-link to="/Fulfilment" @click="scrollToTop" v-else
                >Fulfilment</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <p class="footer__descript">
        Panacea - An international gaming platform offering it's players only
        the best quality. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Добавляет плавный скролл
      });
    },
  },
};
</script>
<style>
.other {
  margin-left: 100px;
  width: calc(90% - 447px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.other .menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.other .menu li {
  margin-right: 95px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.other .menu li a {
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 15px;
  line-height: 120%;
  letter-spacing: 0.03em;
  color: #fff;
  opacity: 0.4;
  -webkit-transition: 0.3s all;
  transition: 0.3s all;
}

.other .menu li a:nth-last-child(1) {
  margin-bottom: 0;
}

.other .menu li a:hover {
  -webkit-transition: 0.3s all;
  transition: 0.3s all;
  opacity: 1;
}

@media (max-width: 768px) {
  .other {
    margin-top: 30px;
    width: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-left: 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .other .menu {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
  }
  .other .menu li {
    margin-right: 0;
  }
  .other .menu li a {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 1180px) {
  .other {
    width: 100%;
  }
}
</style>
<style lang="sass" scoped>
footer
  margin-top: 115px
  padding-bottom: 121px
  @media (max-width: $mobileContainer)
    margin-top: 48px
    padding-bottom: 60px
.footer__logo
  max-width: 347px
  width: 100%

.main__footer
  display: flex
  align-items: center
  margin-bottom: 83px

.footer__descript
  font-family: "Inter", sans-serif
  font-weight: 500
  font-size: 17px
  letter-spacing: 0.02em
  text-align: center
  color: #fff
  opacity: 0.5

@media screen and (max-width: $tabletContainer)
  .main__footer
    justify-content: space-between

@media screen and (max-width: 750px)
  .main__footer
    flex-direction: column
    justify-content: center
</style>