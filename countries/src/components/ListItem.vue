<template lang="html">
  <li v-on:click="handleClick">{{country.name}}</li>

</template>

<script>
import {partyBus} from '../main.js'
  export default {
  name: 'list-item',
  props: ['country'],
  methods: {
    handleClick(){
      partyBus.$emit('country-selected', this.country)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
