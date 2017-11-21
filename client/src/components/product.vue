<template lang="html">
<div class="row">
  <div class="wrapper">
       <h1>Go Bike Store</h1>
      <div class="clear"></div>
    <!-- BARANG DAGANGAN -->
	<div class="row">
        <div class="col-sm-6 col-sm-offset-3">
            <div id="imaginary_container">
                <div class="input-group stylish-input-group">
                    <input type="text" class="form-control" v-model="findText" placeholder="Search" >
                     <button class="glyphicon glyphicon-search" type="submit"> </button>
                </div>
            </div>
        </div>
	</div>
<!-- </div> -->
  <div class="items" v-for="(val,index) in filterBarang">
      <div class="item" >
        <img v-bind:src="val.gambar" alt="item">
        <h2>{{ val.nameItem}}</h2>
        <p>Price: <em>${{ val.price }}</em></p>
        <button type="button" v-on:click.prevent="deleteItem(val._id)">Delete</button>
        <button class="add-to-cart" type="button" v-on:click="addCart(barang[index])">Add to cart</button>
      </div>
  </div>
      <cart></cart>
  </div>
</div>
</template>
<script>
import { mapActions, mapState} from 'vuex'
import cart from '@/components/cart'
export default {
  data () {
    return {
      findText: ''
    }
  },
  computed: {
    ...mapState([
      'barang',
      'cart'
    ]),
    filterBarang () {
      return this.barang.filter((val) => {
        return val.nameItem.match(this.findText);
      })
    }
  },
  components: {
    cart
  },
  methods: {
    ...mapActions([
      'getItem',
      'postItem',
      'deleteItem',
      'addCart'
    ])
  },
  created() {
    this.getItem()
  }
}
</script>

<style lang="css">
* {
    margin: 0;
    padding: 0;
}
body {
    background-color: #F2EEE9;
    font: normal 13px/1.5 Georgia, Serif;
    color: #333;
}
.wrapper {
    width: 1000px;
    margin-left: -500px auto;
    padding: 0px;
}
h1 {
    display: inline-block;
    background-color: #333;
    color: #fff;
    font-size: 20px;
    font-weight: normal;
    text-transform: uppercase;
    padding: 4px 20px;
    float: left;
}
.clear {
    clear: both;
}
.items {
    /*display: block;*/
    margin: 30px 0;
}
.item {
    background-color: #fff;
    float: left;
    margin: 0 30px 40px 0;
    width: 205px;
    height: 290px;
}
.item img {
    display: block;
    margin: auto;
}
h2 {
    font-size: 16px;
    display: block;
    border-bottom: 1px solid #ccc;
    margin: 0 0 10px 0;
    padding: 0 0 5px 0;
}
button {
    border: 1px solid #722A1B;
    padding: 4px 14px;
    background-color: #fff;
    color: #722A1B;
    text-transform: uppercase;
    float: right;
    margin: 5px 0;
    font-weight: bold;
    cursor: pointer;
}
span {
    float: right;
}

.shopping-cart {
    display: inline-block;
    background: url('http://cdn1.iconfinder.com/data/icons/jigsoar-icons/24/_cart.png') no-repeat 0 0;
    width: 24px;
    height: 24px;
    margin: 0 10px 0 0;
}

#imaginary_container{
    margin-top:20%; /* Don't copy this */
}
.stylish-input-group .input-group-addon{
    background: white !important;
}
.stylish-input-group button{
    border:0;
    background:transparent;
}

</style>
