<template>
  <div id="app">
    <RestaurantsListe :liste="this.restaurants" v-if="show"/>
    <router-view></router-view>
  </div>
</template>

<script>
import RestaurantsListe from './components/RestaurantsListe.vue'

export default {
  name: 'app',
  components: {
    RestaurantsListe
  },
   data:() => {return {
     show: true,
            page: 0,
            count: 0,
            nbResto:50,
            restaurants: [
                {
                    name: 'café de Paris',
                    cuisine: 'Française'
                },
                {
                    name: 'Sun City Café',
                    cuisine: 'Américaine'
                }
            ],
            nomRecherche: '',
            nbPageResultat: 0,
            name: '',
            cuisine: '',
        }},
  watch: {
      $route (to){
          console.log('watch route', to)
          console.log('if path exact', to.path === '/')
          if(to.path === '/') return this.show = true
          else return this.show = false
      }
  },
  mounted(){
    console.log("BEFORE HTML");
    this.getRestaurantsFromServer();
  },
  created: () => {
    console.log('heyy')
  },
  methods: {
            getRestaurantsFromServer() {
                let url = "http://localhost:8080/api/restaurants?page=" + this.page + "&pagesize="+ this.nbResto + "&name=" + this.nomRecherche;

                fetch(url)
                    .then(responseJSON => {
                        return responseJSON.json()
                        .then(res => {
                            // Maintenant res est un vrai objet JavaScript
                            this.restaurants = res.data;
                            this.count = res.count;
                            this.nbPageResultat = Math.floor(this.count / this.nbResto);
                            console.log(this.restaurants);
                        });
                    })
                    .catch(function (err) {
                        console.log(err.msg);
                });
            },
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
}
</style>
