<template>
    <div class="bucket-container">
      <h1>Your Backet</h1>
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
            :name="product.name"
            :description="product.description"
            :category="product.category"
            :price="product.price"
            :stockQuantity="product.stockQuantity"
            :id="product.id"
            :buttonText="product.buttonText"
          />
        </tbody>
      </table>
    </div>
  </template>
<script>
export default {
    name: "BucketPage",
    props: {
    addedProducts: {
      type: Array,
      default: () => [],
    }
}
}
</script>
<style>
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