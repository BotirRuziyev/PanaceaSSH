<template>
  <div>
    <TheHeader></TheHeader>
    <main>
      <div class="container">
        <div class="privacy">
          <h1 class="privacy__title">Fulfilment Policy</h1>
          <p class="privacy__text">Thank you for purchasing from Panacea DayZ (Makoni LLC). We strive to provide the best possible experience for our users. This Refund Policy applies to all digital products and services provided by Panacea DayZ (Makoni LLC).</p>
            <br><h2>Digital Products and Services</h2><br><p class="privacy__text">All sales of digital products and services, including in-game items and online subscriptions, are final. Once a purchase is completed, no refunds or exchanges will be issued.</p>
            <br><h2>Order Processing and Refund Policy:</h2>
            <br><h4>Subscriptions</h4>
            <br><p class="privacy__text">Our products are virtual and become accessible within 10 minutes of purchase. Due to the nature of our virtual products and their instant availability, we do not accept order cancellations or provide refunds. However, users can transfer their subscriptions to a different server within 24 hours of purchase.</p>
            <br><h4>Cosmetic Items</h4>
            <br><p class="privacy__text">Cosmetic items purchased through the site are typically delivered to your account within approximately 3 days upon successful completion of the transaction. </p>
            <p class="privacy__text"><br>Non-Transferability: Cosmetic items are bound to the account to which they are delivered and cannot be transferred, traded, or sold to other accounts.</p>
            <p class="privacy__text"><br>Final Sale: All purchases of cosmetic items are final. We do not offer refunds or exchanges for cosmetic items once they have been delivered, except as required by applicable law.</p>
<p class="privacy__text"><br>Customer Support: For any inquiries or issues regarding cosmetic items, contact our customer support team through our Discord server or our official website.</p>
<p class="privacy__text"><br>Design Confirmation: Once a design is confirmed, any further changes will incur additional charges.</p>
			<br><h2>Donation Terms:</h2>
			<br><p class="privacy__text">All donations are final and exclusively used to enhance the server. Donations are not used for personal gain and are non-refundable. By supporting the server through donations, you acknowledge and accept our donation terms, forfeiting any disputes. By donating, you agree that all payments are final at the time of purchase, with no refunds available for priority queue purchases or cosmetic items.</p>
            <br><h2>Terms of Service Compliance:</h2>
            <br><p class="privacy__text">Customers agree that violating our Terms of Service (TOS) and server rules results in forfeiture of their product rights. This includes banned players, who will not receive reimbursements for donations made to the server.</p>
            <br><br><h2>Server Modifications:</h2>
            <br><p class="privacy__text">Server mods and/or mods used by the server may change unexpectedly and are beyond our control. Updates to server mods, the mods themselves, or the game may lead to items being re-textured or no longer supported or available.</p>
            <br><h2>Exceptions:</h2>
            <br><p class="privacy__text">In exceptional circumstances, such as major defects or issues preventing the use of the purchased product or service, we may consider a refund on a case-by-case basis. Such exceptions will be at the sole discretion of Panacea DayZ and must meet the following criteria:</p>
<br><p class="privacy__text">1) The designer was unable to meet your expectations and preferences.</p>
  <br><p class="privacy__text">2) Your cosmetic item was deleted within 90 days of being added.</p>
           <br><br><strong>By making a payment, the buyer agrees to these terms.</strong>
        </div>
      </div>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
/* eslint-disable */
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: "Fulfilment",
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