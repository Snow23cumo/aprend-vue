<template>
  <div class="general">
    <Slider texto="Blog"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>
        <div id="articles" v-if="articles">
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
import { Global } from "../Global";

export default {
  name: "Blog",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      ur: Global.url,
      articles: null
    };
  },
  methods: {
    getArticles() {
      axios.get(this.ur + "/articles").then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    }
  }
};
</script>