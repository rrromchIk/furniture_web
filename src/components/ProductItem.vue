<script>
export default {
  name: "ProductItem",
  props: ["name", "description", "category", "price", "stockQuantity", "productId", "buttonText"],
  emits: ["editBucket"],
  methods: {
    editBucket(productId, operation) {
      this.$emit('editBucket', {productId, operation});
    }
  }
}
</script>

<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ description }}</td>
    <td>{{ category }}</td>
    <td>${{ price }}</td>
    <td>{{ stockQuantity }}</td>
    <td>
      <button @click="editBucket(productId, buttonText)">{{ buttonText }}</button>
    </td>
  </tr>
</template>

<style scoped>
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  cursor: pointer;
}

th {
  background-color: #f2f2f2;
}

button {
  width: 100%;
  height: 100%;
}

button:hover {
  background-color: #dddddd;
}
</style>