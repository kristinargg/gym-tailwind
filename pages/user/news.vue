<template>
  <div>
    <Header />
    <news />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/footer.vue'
import Header from '~/components/header.vue'
import news from '~/components/user/news.vue'
export default {
  name: 'NewsPage',
  components: { news, Header, Footer },
}
</script>

<style>
</style>