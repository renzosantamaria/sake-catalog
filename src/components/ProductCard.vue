<template>
<div class="product-container">

  <img :src="require(`@/assets/${img_src}`)" alt="">
  <h2>{{name}}</h2>
  <p>{{desc}}</p>
  <p>{{price}}kr</p>
</div>
</template>

<script>

export default {
  props:[
    'name', 'desc', 'price', 'img_src'
  ]

}
</script>

<style lang="scss">
.product-container{
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  width: 300px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.8rem;
  img{
    height: 100px;
  }
}
</style>