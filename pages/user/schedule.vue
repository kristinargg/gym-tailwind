<template>
  <div>
    <Header />
    <schedule />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/footer.vue'
import Header from '~/components/header.vue'
import schedule from '~/components/user/schedule.vue'
export default {
  name: 'SchedulePage',
  components: { schedule, Header, Footer },
}
</script>

<style>
</style>