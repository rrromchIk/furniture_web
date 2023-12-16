<script>
export default {
  name: "ProductItem",
  props: ["name", "description", "category", "price", "stockQuantity", "id", "buttonText"],

  methods: {

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
    <td><button>{{ buttonText }}</button></td>
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
</style>