<template lang="html">
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2017-08/bicycle-2029531_960_720.png?itok=THTk5ayk" style="width:50px">
    <a class="navbar-brand" href="#">Go Bike</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home<span class="sr-only"></span></a>
        </li>
      </ul>
      <span><i class="shopping-cart" data-toggle="modal" data-target="#exampleModal"></i></span>{{ count }}
    </div>
  </nav>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
computed: {
  ...mapState([
    'count'
  ])
}
}
</script>

<style lang="css">
#nafbar {
  position: fixed;
}
</style>
