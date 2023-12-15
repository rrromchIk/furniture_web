<template>
  <div class="product-list">
    <table>
      <thead>
      <tr>
        <th>
          <button @click="sortColumn('name')">Product Name</button>
        </th>
        <th>
          <button @click="sortColumn('description')">Product Description</button>
        </th>
        <th>
          <button @click="sortColumn('category')">Category Name</button>
        </th>
        <th>
          <button @click="sortColumn('price')">Price</button>
        </th>
        <th>
          <button @click="sortColumn('quantity')">Quantity</button>
        </th>
        <th>
          <button @click="sortColumn('quantity')">Add to Bucket</button>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.category }}</td>
        <td>${{ product.price }}</td>
        <td>{{ product.stockQuantity }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import productDAO from "@/services/productDAO";
import categoryDAO from "@/services/categoryDAO";

export default {
  components: {

  },
  data() {
    return {
      products: [],
      sortKey: '',
      sortOrder: 1,
    };
  },
  computed: {
    sortedProducts() {
      const key = this.sortKey;
      const order = this.sortOrder;

      return this.products.slice().sort((a, b) => {
        const valA = a[key];
        const valB = b[key];

        if (valA < valB) return -order;
        if (valA > valB) return order;
        return 0;
      });
    },
  },
  methods: {
    async fetchCategory(product) {
      product.category = await categoryDAO.getCategoryById(product.productId);
    },

    async fetchAllProducts() {
      this.products = await productDAO.getAllProducts();
      await this.products.forEach(p => this.fetchCategory(p));
    },

    sortColumn(key) {
      if (this.sortKey === key) {
        this.sortOrder *= -1; // Toggle between ascending and descending
      } else {
        this.sortKey = key;
        this.sortOrder = 1; // Default to ascending order
      }
    },
    handleSearch(searchTerm) {
      // Filter products based on the search term
      this.filteredProducts = this.products.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
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
  