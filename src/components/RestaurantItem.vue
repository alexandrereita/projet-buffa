<template>
<router-link :to="'/restaurant/'+item._id">
  <div>
    {{item.name}} - {{item.cuisine}}
  </div>
</router-link>
</template>

<script>
export default {
  name: 'RestaurantItem',
  props: {
    item: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
