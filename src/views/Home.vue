<template>
  <div class="home">
    <h1>Products</h1>
    <ul>
      <li v-for="product in filteringSearch" :key="product.id"
      >
        <ProductCard
        @click.native="viewProduct(product.id)"
        :name="product.name"
        :desc="product.taste"
        :price="product.price"
        :img_src="product.img_src" />
      </li>
    </ul>
  </div>
</template>

<script>

import ProductCard from "@/components/ProductCard.vue";
export default {
  components: {
    ProductCard
  },
  data(){
  return{
    products: this.$root.data
  }
  },
  computed:{
    filteringSearch(){
      let products = this.$root.data
      let searchPhrase = this.$root.searchPhrase
      if (searchPhrase.length == 0 ) {
        return products
      } else {
        //--
        let filteredProducts = []
        products.map(prod => {
          for (let key in prod) {
            if (typeof prod[key] != 'number') {
              if (prod[key].toLowerCase().includes(searchPhrase)) { //hittar en match
                if (filteredProducts.length == 0) {
                  filteredProducts.push(prod)
                }
                let rep = true
                filteredProducts.map(filProd => {
                  if (filProd.id != prod.id) {
                    rep = false
                  }
                  if (filProd.id == prod.id) {
                    rep = true
                  }
                })
                if (rep == false) {
                  filteredProducts.push(prod)
                }
              }
            }
          }
        })
        //--
        return filteredProducts
      }
    }
  },
  methods:{
    viewProduct(userId){
      this.$router.push({ path: `/product/${userId}` })
    }
  }
}
</script>

<style lang="scss">
.home{
  ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    li{
      list-style: none;
      margin: auto;
      cursor: pointer;
    }
  }
}
</style>