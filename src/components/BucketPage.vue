<template>
    <div class="bucket-container">
      <h1>Your Bucket</h1>
      <table>
        <thead>
         
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

thead{
    display:flex;
}

h1 {
  text-align: center;
  font-size: 48px;
  margin-top: 3%;
}
</style>
<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    text-align: center;
  }

  td{
    vertical-align: middle;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }

  /* Додаткові стилі можна додати тут */
</style>
