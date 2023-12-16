<template>
    <div class="bucket-container">
      <h1>Your Bucket</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <ProductItem
            v-for="(product, index) in addedProducts"
            :key="index"
            v-bind="product"
            :id="product.id"
            buttonText="-"
            @edit-bucket="editBucketEventHandler"
          />
        </tbody>
      </table>
    </div>
  </template>
<script>
import ProductItem from "@/components/ProductItem.vue";
import store from "@/services/store";

export default {
  name: "BucketPage",
  components: {ProductItem},

  data() {
    return {
      addedProducts: []
    }
  },
  methods: {
    deleteFromBucket(productId) {
      let productsInBucket = store.state.bucketItems;
      productsInBucket = productsInBucket.filter(p => p.productId !== productId);
      this.addedProducts = productsInBucket;
      store.dispatch('setBucketItemsAction', productsInBucket);
    },

    editBucketEventHandler(param) {
      console.log("edit bucket");
      console.log(param);

      if(param.operation === '-') {
        this.deleteFromBucket(param.productId);
      }
    }
  },
  created() {
    this.addedProducts = store.state.bucketItems;
  }
}
</script>
<style scoped>
table{
    display: flex;
    flex-direction: row;
}
thead{
    display:flex;
}

h1 {
  text-align: center;
  font-size: 48px;
  margin-top: 3%;
}
</style>