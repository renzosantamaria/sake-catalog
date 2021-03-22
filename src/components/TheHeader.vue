<template>
  <header>
      <h1>SAKE</h1>
      <div class="search">
          <input @input="search" v-model="phrase" id="search" type="text" placeholder="Search...">
      </div>
  </header>
</template>

<script>
export default {
    data(){
        return{
            phrase: ""
        }
    },
    methods:{
        search(){
            // console.log(this.phrase)
            this.$root.searchPhrase = this.phrase.toLowerCase()
        }
    }
}
</script>

<style lang="scss">
header{
    height: 80px;
    background: rgb(26, 26, 26);
    color: wheat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}
</style>