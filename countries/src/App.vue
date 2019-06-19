<template>
  <div id="app">
    <countries-list :countries='countries'></countries-list>
  </div>
</template>

<script>

import CountriesList from './components/CountriesList.vue'

export default {
  name: 'app',
  data(){
    return{
      countries: []
    }
  },
  mounted(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(countries => this.countries = countries)
  },
  components: {
    "countries-list": CountriesList

  }
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
