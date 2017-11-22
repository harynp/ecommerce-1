<template lang="html">
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active">
      <h4 class="list-group-item-heading">History Transaction</h4>
      <div v-for="(transaksi,index) in transaction">
        <button type="button" name="button" @click="deleteTransaction(transaksi)">X</button>
        <p class="list-group-item-text" >{{ transaksi.date }}</p>
        <div class="" v-for="item in transaksi.itemList">
            <p class="list-group-item-text" >{{ item.nameItem }} | Harga: ${{ item.price }} |Jumlah: {{ item.qty }}</p>
        </div>
            <p>Total : {{
              transaksi.itemList.reduce((i, j) => {
                i.price = (i.price * i.qty) + (j.price * j.qty)
                return i
              }, { price: 0, qty: 1 }).price
          }} </p>
      </div>
    </a>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed : {
    ...mapState([
      'transaction',
      'cart'
    ])
  },
  methods: {
    ...mapActions([
      'getTransaction',
      'deleteTransaction'
    ])
  },
  created () {
    this.getTransaction()
  }
}
</script>

<style lang="css">
</style>
