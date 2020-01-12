<template>
  <div>
    <router-link to="/" class="back">BACK</router-link>
    <h1 id="logo">{{ restaurant.name }}</h1>
    <div>
        <Menu :menu="menu[0]" />
        <Menu :menu="menu[1]" />
        <Menu :menu="menu[2]" />
    </div>
    <GmapMap 
        ref="mapRef"
        :center="{lat:10,lng:10}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
    />
  </div>
</template>

<script>
import Menu from './Menu.vue'
import foods from '../assets/data.json'

export default {
  name: 'RestaurantDetail',
  components: {
      Menu
  },
  props: {
    msg: String
  },
  data:() => {
    return {
        restaurant: {name: 'café de Paris', address: { coord: [10,10]}},
        food: foods,
        menu : [
            {
                nom: 'Menu #1',
                entrée: foods.entrée[Math.floor(Math.random() * Math.floor(10))],
                plat: foods.plat[Math.floor(Math.random() * Math.floor(10))],
                dessert: foods.dessert[Math.floor(Math.random() * Math.floor(10))],
            },
            {
                nom: 'Menu #2',
                entrée: foods.entrée[Math.floor(Math.random() * Math.floor(10))],
                plat: foods.plat[Math.floor(Math.random() * Math.floor(10))],
                dessert: foods.dessert[Math.floor(Math.random() * Math.floor(10))],
            },
            {
                nom: 'Menu #3',
                entrée: foods.entrée[Math.floor(Math.random() * Math.floor(10))],
                plat: foods.plat[Math.floor(Math.random() * Math.floor(10))],
                dessert: foods.dessert[Math.floor(Math.random() * Math.floor(10))],
            }
        ]
    }
  },
  watch: {
      $route (to,from){
          console.log('watch route', to, from)
          this.getRestaurantsFromServer();
          this.makeNewMenu()
      }
  },
  mounted(){
    this.getRestaurantsFromServer();
  },
   methods: {
       makeNewMenu() {
           this.menu = [{
                nom: 'Menu #1',
                entrée: foods.entrée[Math.floor(Math.random() * Math.floor(10))],
                plat: foods.plat[Math.floor(Math.random() * Math.floor(10))],
                dessert: foods.dessert[Math.floor(Math.random() * Math.floor(10))],
           },
           {
                nom: 'Menu #2',
                entrée: foods.entrée[Math.floor(Math.random() * Math.floor(10))],
                plat: foods.plat[Math.floor(Math.random() * Math.floor(10))],
                dessert: foods.dessert[Math.floor(Math.random() * Math.floor(10))],
           },
           {
                nom: 'Menu #3',
                entrée: foods.entrée[Math.floor(Math.random() * Math.floor(10))],
                plat: foods.plat[Math.floor(Math.random() * Math.floor(10))],
                dessert: foods.dessert[Math.floor(Math.random() * Math.floor(10))],
           }]
       },
       getRandomInt(max) {
           return Math.floor(Math.random() * Math.floor(max));
       },
            getRestaurantsFromServer() {
                let url = "http://localhost:8080/api/restaurant?id=" + this.$route.params.id

                fetch(url)
                    .then(responseJSON => {
                        return responseJSON.json()
                        .then(res => {
                            // Maintenant res est un vrai objet JavaScript
                            console.log('DETAIL', res.restaurant)
                            this.restaurant = res.restaurant
                            var logo = document.querySelector('#logo')
                            logo.setAttribute("data-before",res.restaurant.name)

                            this.$refs.mapRef.panTo({lat: this.restaurant.address.coord[0],lng:this.restaurant.address.coord[1]})
                        });
                    })
                    .catch(function (err) {
                        console.log(err.msg);
                });
            },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back {
    display: flex;
    position: absolute;
    top: 50px;
    max-width: 50px;
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
	background-color:#f9f9f9;
	border-radius:6px;
	border:1px solid #dcdcdc;
	cursor:pointer;
	color:#807780;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
}
.back:hover {
	background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
	background-color:#e9e9e9;
}

#logo {
  font-family: 'Open Sans', sans-serif;
  color: #555;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 100px;
  font-weight: 800;
  letter-spacing: -3px;
  line-height: 1;
  text-shadow: #EDEDED 3px 2px 0;
  position: relative;
  display: flex;
  justify-content: center;
}
#logo:after {
    position: absolute;
  margin-top: 5px;
  margin-left: 4px;
  /*background: url(https://subtlepatterns.com/patterns/crossed_stripes.png) repeat;*/
  background-image: -webkit-linear-gradient(left top, transparent 0%, transparent 25%, #555 25%, #555 50%, transparent 50%, transparent 75%, #555 75%);
  background-size: 4px 4px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: -5;
  content: attr(data-before);
  justify-content: center;
  text-shadow: none;
}
</style>
