<template lang="html">
  <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
<div class="modal-dialog modal-xs" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <!-- ITEM MODAL -->
    <div class="modal-body">
        <table class="table table-responsive-sm">
          <thead>
            <th></th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Jumlah</th>
            <th>Action</th>
          </thead>
          <tbody>
            <tr v-for="(nilai,index) in cart">
              <td><img v-bind:src="nilai.gambar" alt="" style="width:50px"></td>
              <td>{{ nilai.nameItem }}</td>
              <td>{{ nilai.price }}</td>
              <td>{{ nilai.qty }}</td>
              <td>${{ nilai.price * nilai.qty }}</td>
              <td id="rmv"><button @click="removeCart(nilai)" class="glyphicon glyphicon-remove btn btn-danger" type="button" name="button"> REMOVE </button></td>
            </tr>
          </tbody>
          <tr class="total">
            <td colspan="5">Total: ${{totalHarga}}</td>
          </tr>
        </table>
        <button @click="successTransaction(cart)" class="glyphicon glyphicon-shopping-cart btn btn-success" type="button"> CHECKOUT</button>
      </div>
  </div>
</div>
</div>
</template>

<script>
import { mapActions, mapState} from 'vuex'

export default {
  computed: {
    ...mapState([
      'cart'
    ]),
    totalHarga () {
      return this.cart.reduce((total, value) => {
        return total + (value.price * value.qty)
      }, 0)
    }
  },
  methods: {
    ...mapActions([
      'removeCart',
      'addCart',
      'successTransaction'
    ])
  }
}
</script>

<style lang="css">
.total {
  text-align: right;
  align-items: center;
}
</style>
