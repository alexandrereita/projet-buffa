<template>
 <div>
   <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="resto in liste" v-bind:key="resto.id">
          <td><restaurant-item :item="resto"/></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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