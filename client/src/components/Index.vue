<template lang="html">
  <div>
    <div class="row">
      <div class="col-md-12">
        <navbar></navbar>
      </div>
      <div class="col-md-3">
        <sidebar></sidebar>
          <list></list>
      </div>
      <div class="col-md-9">
        <product></product>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import product from '@/components/product'
import sidebar from '@/components/sidebar'
import list from '@/components/list'
export default {
  components: {
    navbar,
    sidebar,
    list,
    product,

    // footer
  }
}
</script>

<style lang="css">

</style>
