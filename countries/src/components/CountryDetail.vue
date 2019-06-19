<template lang="html">
<div v-if="selectedCountry">
<p>Name: {{selectedCountry.name}}</p>
<p>Capital: {{selectedCountry.capital}}</p>
<p>Population: {{selectedCountry.population}}</p>

</div>


</template>

<script>
export default {
  name: "country-detail",
  props: ["selectedCountry"]
}
</script>

<style lang="css" scoped>
</style>
