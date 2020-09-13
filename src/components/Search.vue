<template>
  <div class="general">
    <Slider :texto="'Búsqueda: ' + searchString"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader" v-if="articles">Artículos encontrados</h1>
        <h1 class="subheader" v-else>Sin resultados</h1>
        <div id="articles" v-if="articles">
          <Articles :articles="articles"></Articles>
          <!--AÑADIR ARTÍCULOS-->
        </div>
        <div v-else>No hay artículos que coincidan con tu busqueda</div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
/**importacion de axios */
import axios from "axios";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";
/**clase */
import {Global} from '../Global';

export default {
  name: "Search",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
     this.searchString = this.$route.params.searchString; 
    this.getArticlesBySearch(this.searchString);
  },
  data() {
    return {
      ur:Global.url,
      articles: null,
      searchString:null
    };
  },
  methods: {
    getArticlesBySearch(searchString) {
      axios.get(this.ur+"/search/"+searchString).then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    }
  }
};
</script>