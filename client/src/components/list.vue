<template lang="html">
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active">
      <h4 class="list-group-item-heading">History Transaction</h4>
      <div v-for="(transaksi,index) in transaction">
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
    ]),
    totalHargaTrans () {
      // const itemList = this.transaction.map((t) => {
      //   return t.itemList;
      // });
      //
      // let total = 0;
      //
      // itemList.forEach((i) => {
      //   i.forEach((j, index) => {
      //     total += j.qty * j.price;
      //   });
      // });
      //
      // return total;

      // const geblek = itemList.reduce((i) => {
      //   return i.qty * i.price;
      // }, 1);

      // console.log(geblek);

      // console.log(itemsCapekWa);
      // console.log('GEBLEK', this.transaction[0].itemList[0].price);
      // const geblek = this.transaction.map((t) => {
      //   return t.itemList.reduce((x, y) => {
      //     return (x.price * x.qty) + (y.price * y.qty)
      //   }, 1);
      // });

      // console.log(geblek);

      // return geblek;
      // return this.transaction.reduce((total, value) => {
      //   // console.log('HASIL', (value.price * value.qty));
      //   return total + (value.price * value.qty)
      // }, 0)
    }
  },
  methods: {
    ...mapActions([
      'getTransaction'
    ])
  },
  created () {
    this.getTransaction()
  }
}
</script>

<style lang="css">
</style>
