<template>
  <div class="general">
    <Slider texto="Bienvenido al curso de Vue"
    home="true"
    ></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">ÚLTIMOS ARTÍCULOS</h2>
        <!--LISTADO ARTÍCULOS-->
        <div id="articles">
         <Articles :articles="articles"></Articles>
          <!--AÑADIR ARTÍCULOS-->
        </div>
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
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
    this.getLastArticles();
  },
  data() {
    return {
      ur:Global.url,
      articles: null
    };
  },
  methods: {
    getLastArticles() {
      axios.get(this.ur+"/articles/true").then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    }
  }
};
</script>