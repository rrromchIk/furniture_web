<!-- src/components/HeaderComponent.vue -->

<template>
  <header class="header">
    <ul>
    <li><router-link to="/products">Furniture Land</router-link></li>
    <li><router-link to="/bucket">Bucket</router-link></li>
  </ul>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
};
</script>

<style scoped>
.header {
  text-align: center;
  background-color: #333; /* You can customize the background color */
  color: #fff; /* You can customize the text color */
  padding: 20px 0;
  margin: 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
}
.header ul {
display: flex;
flex-direction: row;
gap: 15px;
  
}

</style>
  