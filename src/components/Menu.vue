<template>
  <div>
    <h2>{{menu.nom}}</h2>
        <div> <b>Entrée :</b> {{menu.entrée.nom}} : {{menu.entrée.description}}..... {{menu.entrée.prix}}€ </div>
        <div> <b>Plat :</b> {{menu.plat.nom}} : {{menu.plat.description}}..... {{menu.plat.prix}}€ </div>
        <div> <b>Dessert :</b> {{menu.dessert.nom}} : {{menu.dessert.description}}..... {{menu.dessert.prix}}€ </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menu: Object
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
