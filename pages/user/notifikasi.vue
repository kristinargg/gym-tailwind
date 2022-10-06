<template>
  <div>
    <Header />
    <Notif />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/footer.vue'
import Header from '~/components/header.vue'
import Notif from '~/components/user/notif.vue'
export default {
  name: 'NotifikasiPage',
  components: { Header, Notif, Footer },
}
</script>

<style>
</style>