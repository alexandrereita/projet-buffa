<template>
 <div>
    <div>
        <ul>
            <restaurant-item v-for="resto in liste" v-bind:key="resto.id" :item="resto"/>
        </ul>
    </div>
  </div>
</template>

<script>
import RestaurantItem from './RestaurantItem.vue'

export default {
  name: 'RestaurantsListe',
  props: {
    liste: Array
  },
  components: {
    RestaurantItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>