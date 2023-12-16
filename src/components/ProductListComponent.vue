<template>
  <div class="product-list">
    <table>
      <thead>
      <tr>
        <th>
          <button @click="sortBy('name')">Product Name ⇵</button>
        </th>
        <th>
          <button @click="sortBy('description')">Product Description ⇵</button>
        </th>
        <th>
          <button @click="sortBy('category')">Category Name ⇵</button>
        </th>
        <th>
          <button @click="sortBy('price')">Price ⇵</button>
        </th>
        <th>
          <button @click="sortBy('quantity')">Quantity ⇵</button>
        </th>
        <th>
          <button>Add to Bucket</button>
        </th>
      </tr>
      </thead>
      <tbody>

      <ProductItem
          v-for="product in products"
          :key="product.productId"
          button-text="+"
          v-bind="product"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import productDAO from "@/services/productDAO";
import categoryDAO from "@/services/categoryDAO";

export default {
  name: "ProductListComponent",
  components: {
    ProductItem
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchCategory(product) {
      product.category = await categoryDAO.getCategoryById(product.productId);
    },

    async fetchAllProducts() {
      this.products = await productDAO.getAllProducts();
      await this.products.forEach(p => this.fetchCategory(p));
    },

    sortBy(criteria) {
      console.log("Sorting products by: " + criteria);

      this.products.sort((a, b) => {
        if (criteria === 'name') {
          return a.name.localeCompare(b.name);
        } else if (criteria === 'description') {
          return a.description.localeCompare(b.description);
        } else if (criteria === 'category') {
          return a.description.localeCompare(b.description);
        } else if (criteria === 'price') {
          return a.price - b.price;
        }else if (criteria === 'quantity') {
          return a.stockQuantity - b.stockQuantity;
        }
      });
    },
  },
  async created() {
    await this.fetchAllProducts();
  },
}
</script>

<style scoped>
.product-list {
  margin: 20px auto;
  width: 1250px;
}

table {
  width: 90%;
  margin: 0 auto;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  cursor: pointer;
}

th {
  background-color: #f2f2f2;
}
</style>
  