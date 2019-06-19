<template>
  <div class="main-container" id="app">
    <countries-list :countries='countries'></countries-list>
    <country-detail :selectedCountry='selectedCountry'></country-detail>
  </div>
</template>

<script>

import CountriesList from './components/CountriesList.vue'
import {partyBus} from './main.js'
import CountryDetail from './components/CountryDetail.vue'

export default {
  name: 'app',
  data(){
    return{
      selectedCountry: null,
      countries: []
    }
  },
  mounted(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(countries => this.countries = countries)

    partyBus.$on('country-selected', (country) => {
    this.selectedCountry = country


    })
  },
  components: {
    "countries-list": CountriesList,
    "country-detail": CountryDetail

  }
}
</script>



<style>

.main-container {
  display: flex;
  justify-content: space-between;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
