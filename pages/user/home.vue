<template>
  <div class="font-roboto">
    <headerPage />
    <home />
    <section class="pb-24"></section>
    <footerPage />
  </div>
</template>

<script>
import footerPage from '~/components/footer.vue'
import headerPage from '~/components/header.vue'
import Home from '~/components/user/home.vue'
export default {
  name: 'HomePage',
  components: { headerPage, footerPage, Home },
}
</script>

<style>
.card-member {
  background-image: url('../../assets/img/place.jpg');
}
.card-member1 {
  background: url('../../assets/img/class.jpg');
}
.card-member2 {
  background: url('../../assets/img/jadwal.jpg');
}
</style>