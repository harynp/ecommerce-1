<template lang="html">
  <div class="group">
    <form enctype="multipart/form-data">
      <fieldset>
        <h2>FORM ADDED ITEM</h2>
        <div class="form-group">
          <label>Item</label>
          <input type="text" class="form-control" placeholder="Enter New Item" v-model="add.nameItem">
        </div>
        <div class="form-group">
          <label>Price</label>
          <input type="text" class="form-control" placeholder="Enter Price" v-model="add.price">
        </div>
        <div class="form-group">
          <label for="exampleInputFile">Gambar</label>
          <input type="text" class="form-control" placeholder="With URL" v-model="add.gambar">
          <small>Upload With Gallery</small>
            <img v-bind:src="add.gambar">
            <input type="file" name="file" @change="onFileChange">
        </div>
      </fieldset>
    </form>
    <button type="submit" class="btn btn-primary" @click.submit="postItem(add)">Submit</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      add: {
        nameItem: '',
        price: '',
        gambar: '',
        qty: 0
      }
    }
  },
  methods: {
    ...mapActions([
      'postItem'
    ]),
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      console.log('ini file', file);
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.add.gambar = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
</script>

<style lang="css">
  .group {
    margin: 40px
  }
  label {
    text-align: left;
  }
</style>
