import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000/'
})

const state = {
  barang : [],
  cart   : [],
  transaction : [],
  count: 0
}

const mutations = {
  setItem (state,payload) {
    state.barang = payload;
  },
  setNewItem (state,payload) {
    state.barang.push(payload);
  },
  setPushNewCart (state,payload) {
    console.log('INI PAYLOAD',payload)
    let newCart = state.cart.findIndex(function (YourCart) {
      return YourCart._id === payload._id
    })
    if (newCart === -1) {
      payload.qty = 1
      state.count++
      state.cart.push(payload)
    } else {
      state.count++
      state.cart[newCart].qty += 1
    }
  },
  setGetAllCart (state, payload) {
    state.cart = payload
  },
  removeItem (state,payload) {
    const idx = state.barang.findIndex((product) => product._id === payload)
    state.barang.splice(idx, 1)
  },
  postTransaction (state,payload) {
    let newTrans = state.cart.findIndex(function (YourCart) {
      return YourCart._id === payload._id
    })
    if (newTrans === -1) {
      payload.qty = 1
      // state.count++
      state.transaction.push(payload)
    } else {
      // state.count++
      state.transaction[newTrans].qty += 1
    }
    state.transaction.push(payload)
  },
  getAllTransactions (state,payload) {
    state.transaction = payload;
  },
  removeTransaction (state,payload) {
    const idx = state.transaction.findIndex((transaction) => transaction._id === payload)
    state.transaction.splice(idx, 1)
  }
}

const actions = {
  getItem ({ commit }) {
    http.get('/items')
    .then(({data}) => {
      commit('setItem', data)
    })
    .catch(err => console.error(err))
  },
  postItem ({commit}, newItem, newImg) {
    console.log('NEWITEM',newItem);
    http.post('/items', newItem, newImg)
    .then(({data})=> {
      console.log('INI DATA',data);
      swal('Successfully', 'You item be added', 'success')
      commit('setNewItem', data)
    })
    .catch(err => console.error(err))
  },
  deleteItem({commit}, itemId) {
    http.delete('/items/' + itemId)
    .then(({data}) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this cart",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            state.cart.splice(state.cart.indexOf(itemId),1)
            commit('removeItem', data._id)
            swal("Deleted! Your cart file has been deleted!", {
              icon: "success",
            })
        } else {
          swal("Your cart is safe!");
        }
      });
    })
    .catch(err => {
      console.log(err);
    })
  },
  addCart({commit}, newCart) {
    http.post('/carts', newCart)
    .then(({data}) => {
      console.log('Cart Masuk', data)
      swal('Successfully', 'Your cart be added', 'success')
    })
    commit('setPushNewCart', newCart)
  },
  getCart({ commit }) {
    http.get('/items/carts')
    .then(({data}) => {
      commit('setGetAllCart', data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  removeCart ({commit}, rmvBarang) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this cart",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          rmvBarang.qty-= 1
          if (rmvBarang.qty === 0) {
            state.cart.splice(state.cart.indexOf(rmvBarang),1)
          }
          swal("Deleted! Your cart file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your cart is safe!");
        }
      });
  },
  successTransaction({commit}, successCart) {
    // console.log('INI CLIENT POST',successCart);
    swal({
      title: "KONFIRMASI PEMBAYARAN",
      text: `Apakah kamu yakin membeli ? Press ESC for cancel`,
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: 'btn-danger',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: "No, cancel plx!",
      closeOnConfirm: false,
      closeOnCancel: false
    })
    .then(isConfirm => {

      if (isConfirm){
          console.log('ISI CART SUCCESS',successCart)
          http.post('/transactions',successCart)
          .then(({data}) => {
            commit('postTransaction', data)
            swal('Successfully', 'Your cart be added', 'success')
          })
      } else {
        swal("Cancelled", "Your Transaction Cancelled", "error");
      }
    })
    .catch(err => {
      console.log(err)
    })
  },
  getTransaction({commit}) {
    http.get('/transactions')
    .then(({data}) => {
      // console.log('DATA DI DATABASE', data);
      commit('getAllTransactions', data)
    })
    .catch(err => {
      console.error(err);
    })
  },
  deleteTransaction ({commit}, transactionsId) {
    http.delete('/transactions/'+ transactionsId._id)
    .then(({data}) => {
      commit('removeTransaction', data._id)
    })
    .catch(err => {
      console.log('ERROR TRANSACTIONS',err);
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
