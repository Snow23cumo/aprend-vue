<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="article">
          <div class="image-wrap">
            <img :src="ur + '/get-image/'+ article.image" :alt="article.title" v-if="article.image" />
            <img src="../assets/images/photo_default_4.png" :alt="article.title" v-else />
          </div>
          <h1 class="subheader">{{article.title}}</h1>
          <span class="date">{{ article.date | momnent("from","now")}}</span>
          <p>{{article.content}}</p>

          <div class="clearfix"></div>
        </article>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>

      <router-link :to="'/editar/'+article._id" class="btn btn-warning">Editar</router-link>
      <br />
      <a @click="deleteArticle(article._id)" class="btn btn-danger">Eliminar</a>
    </div>
  </div>
</template>
<script>
import Sidebar from "./Sidebar";
import { Global } from "../Global";
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "Article.vue",

  components: {
    Sidebar
  },
  data() {
    return {
      ur: Global.url,
      article: null
    };
  },
  mounted() {
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    getArticle(articleId) {
      axios.get(this.ur + "/article/" + articleId).then(res => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },
    deleteArticle(articleId) {
      swal({
        title: "¿Estás seguro de querer eliminar el artículo?",
        text: "Si lo eliminas no podrás recuperarlo!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios.delete(this.ur + "/article/" + articleId).then(res => {
            if (res) {
              swal(
                "Artículo eliminado",
                "Artículo eliminado correctamente",
                "success"
              );
            }

            this.$router.push("/blog");
          });
        } else {
          swal("Ufff casi !!! no has eliminado nada,tranqui");
        }
      });
    }
  }
};
</script>