<template>
  <div class="single-view-container">
    <img :src="require(`@/assets/${product.img_src}`)" alt="">
    <div class="content-wrapper">
      <h2>{{product.name}}</h2>  
      <p><strong>Type:</strong> {{product.type}}</p>  
      <p><strong>Brewery:</strong> {{product.brewery}}kr</p>  
      <p><strong>Description:</strong> {{product.taste}}</p>  
      <p><strong>Size:</strong> {{product.size}}</p>  
      <p><strong>Taste:</strong> {{product.taste}}</p>  
      <p><strong>Enjoy:</strong> {{product.serving_suggestion}}</p>  
      <p><strong>Price:</strong> {{product.price}}kr</p>  

    </div>
  </div>
</template>


<script>
export default {
  computed:{
    product(){
      let data = this.$root.data
      return data.find(prod => prod.id == this.$route.params.id)
    }
  },

  methods:{

  }
}
</script>

<style lang="scss">
.single-view-container{
  width: 80%;
  margin: 0 auto;
  .content-wrapper{
    max-width: 420px;
    text-align: left;
    margin: 0 auto;
  }
  img{
    height: 260px;
  }
}
</style>