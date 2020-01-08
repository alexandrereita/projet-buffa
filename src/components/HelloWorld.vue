<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins HEYYYYYYAAAAA</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   data:() => {return {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
