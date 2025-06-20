<template>
  <div>
    <TheHeader></TheHeader>
    <main>
        <div class="container">
            <div class="privacy">
                <h1 class="privacy__title">Privacy Policy</h1>
                <p class="privacy__text">Panaceadayz.us respects your privacy and we are determined to protect all of your personal information. This Privacy Policy will explain how we collect, use, and disclose and any all information about every individual when they visit and use our website (Panaceadayz.us).
				<br><br>What type of information we will collect?
				<br><br>We will collect specific information from and about the users of our website, including but not limited to:
Personal Information--This includes your name, email address, or other contact information when you contact us with a question or concern--or when you purchase an item.
Log Data: We automatically collect information when you visit the website, including but not limited to, your IP address, browser type and settings, device type and settings, operating system, mobile network information, and application version number.
Usage Data: We will collect information about how you use our website, including the pages you visit, the time and date of your visit, and the links you click on.
Cookies and Similar Technologies: We may use cookies and similar technologies to collect information about your interactions with Panaceadayz.us to help us personalize your experience.
				<br><br>How do we use this information?
				<br><br>With the information we collect we are able to improve our website, respond to your questions and concerns, communicate with you, personalize your experience within the website, prevent technical issues. We may also use information that does not personally identify you, i.e., aggregated or de-identified data, for any purpose.
				<br><br>How We Might Share Your Information:
				<br><br>We may share your information with certain third parties for the following circumstances:
				<br><br>Service Providers--We may share your information with third-party service providers that help us operate Panaceadayz.us and provide our products and services.
				<br><br>Business Transfers--If we sell, transfer, or otherwise dispose of our business or assets, we may transfer your information to the buyer.
				<br><br>Legal Requirements--We may disclose your information if required by law, court order, or other legal process.
				<br><br>
				<br><br>User Choices:
				<br>You have several choices with respect to your personal information:
				<br>You can disable cookies in your browser settings.
				<br>You can contact us to request access to or correction of your personal information.
				<br><br>Security:
				<br>We take reasonable measures to protect the information we collect from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
				<br>Changes to this Policy:
				<br><br>We may update this Privacy Policy from time to time. If we make material changes, we will provide notice by posting a notice on Panaceadayz.us or by other means.
				<br><br>Contact Us:
				<br>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us on our Discord at discord.gg/panacea.
Thank you for choosing Panacea! Have fun!</p>
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
    name: "PrivacyPolicy",
    components: {
        TheHeader, TheFooter
    },
}
</script>

<style lang="sass" scoped>
header
    position: static !important
.privacy
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