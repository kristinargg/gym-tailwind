<template>
  <div>
    <Header/>
    <Class />
    <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/footer.vue'
import Header from '~/components/header.vue'
import Class from '~/components/user/class.vue'
export default {
  name: 'ClassPage',
  components: {
    Class,
    Header,
    Footer,
  },
}
</script>

<style>
</style>