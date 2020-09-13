<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Peliculas</h1>
        <div class="mis-datos" v-if="misDatos">
          <p v-html="misDatos"></p>
          <br>
          {{ web | mayusculas | concatenaYear('ESTE ES EL MEJOR AÑO')}}
        </div>
          <div class="favorita" v-if="favorita">
            La pelicula marcada es:
            <h2>{{favorita.title}}</h2>
            </div>
        <!--LISTADO ARTÍCULOS-->
        <div id="articles">
          <div v-for="pelicula in peliculasMayuscula" v-bind:key="pelicula.title">
            <Pelicula :pelicula="pelicula"
            v-on:favorita="haLlegadoLaPeliculaFavorita"
            ></Pelicula>
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Pelicula from "./Pelicula";

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar
  },
  methods:{
    haLlegadoLaPeliculaFavorita(favorita){
      this.favorita = favorita;
    }
  },
  filters:{
    mayusculas(value){
      return value.toUpperCase();
    },
    concatenaYear(value,mensaje){
      
      var date = new Date();

      return value + ' ' + date.getFullYear() + ' ' + mensaje ; 
    }

  },
  computed:{
    peliculasMayuscula(){
      var peliclasMod = this.peliculas;
      for(var i = 0; i < this.peliculas.length; i++){
        peliclasMod[i].title = peliclasMod[i].title.toUpperCase();
      }
      
      return peliclasMod;
    },
    misDatos(){
      return this.nombre + ' ' + this.apellido + ' <br/> ' + ' <strong>Sitio web:</strong> ' + this.web;
    }
  },
  data() {
    return {
      nombre:'Yonny',
      apellido:'Cuesta',
      web:'victorrobles.es/academy',
      favorita: null,
      peliculas: [
        {
          title: "Batman vs Superman",
          year: 2017,
          image:
            "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/08/batman-vs-superman.jpg"
        },
        {
          title: "Gran Torino",
          year: 2015,
          image:
            "https://lh3.googleusercontent.com/proxy/bqMbE2_BQW_85C-D4ZZTD9Yc8NolXzQaDhJwHM7TW_w0JzXzGv8-C4kX43WriBkpblSkNNazBkFidXY1bCXSSo1EXrigDaNKq_hmLWwUlyxBFzEEw5kFnnmCxGspuKWT81Zy"
        },
        {
          title: "El señor de los anillos",
          year: 2003,
          image:
            "https://as01.epimg.net/epik/imagenes/2020/03/28/portada/1585384112_802989_1585386362_noticia_normal_recorte1.jpg"
        },
        {
          title: "Spiderman",
          year: 2019,
          image:
            "https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg"
        }
      ]
    };
  }
};
</script>