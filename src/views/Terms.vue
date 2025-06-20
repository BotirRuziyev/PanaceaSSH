<template>
  <div>
    <TheHeader></TheHeader>
    <main>
        <div class="container">
            <div class="terms">
                <h1 class="terms__title">Terms of Service</h1>
                <p class="terms__text">Site Terms of Use:
				<br><br>
				<br><br>You may use Panacea only for lawful purposes and in accordance with these Terms. 
				You agree not to use Panacea for the following:
				<br><br>In any way that violates any applicable federal, state, local, or international law or regulation.
				<br><br>To impersonate or attempt to impersonate Panacea, a Panacea staff member, another user, or any other person or entity.
				<br><br>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of Panacea , or which, as determined by us, may harm Panacea or users of Panacea or expose them to liability.
				<br><br>
				<br><br>Intellectual Property:
				<br><br>
				<br><br>Panacea and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by Panacea, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as follows:
				<br><br>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.
				<br><br>You may store files that are automatically cached by your Web browser for display enhancement purposes.
				<br><br>If we provide desktop, mobile, or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use, provided you agree to be bound by our end user license agreement for such applications.</p>
            </div>
        </div>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
export default {
    name: "TheTerms",
    components: {
        TheHeader, TheFooter
    },
}
</script>

<style lang="sass" scoped>
header
    position: static !important
.terms
    padding: 37px 30px
    border-radius: 35px
    background: url("~@/assets/img/news_bg.png")
    +bg
    &__title
        font-size: 32px
        margin: 21px 0px
    &__text
        color: #C7A1AB
</style>