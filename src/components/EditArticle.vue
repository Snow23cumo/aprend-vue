<template src="../views/CreateArticle.html"></template>

<script>
import Sidebar from "./Sidebar";
import { Global } from "../Global";
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import Article from "../models/Article";
import swal from "sweetalert";
export default {
  name: "EditArticle",

  components: {
    Sidebar
  },

  data() {
    return {
      ur: Global.url,
      article: new Article("", "", null, ""),
      submited: false,
      file: "",
      isEdit: true
    };
  },
  validations: {
    article: {
      title: {
        required
      },
      content: {
        required
      }
    }
  },
  mounted() {
    //console.log(this.article);
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    save() {
      this.submited = true;
      var articleId = this.$route.params.id;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(this.ur + "/article/" + articleId, this.article)
          .then(res => {
            if (res.data.status == "success") {
              const formData = new FormData();
              // Subida de archivo
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                formData.append("file0", this.file, this.file.name);
                var articleId = res.data.article._id;
                axios
                  .post(this.ur + "/upload-image/" + articleId, formData)
                  .then(res => {
                    if (res.data.article) {
                      swal(
                        "Artículo editado",
                        "El artículo ha sido editado correctamente :) ",
                        "success"
                      );
                      this.article = res.data.article;
                      this.$router.push("/articulo/" + this.article._id);
                    } else {
                      //mostrar alerta de error
                      swal(
                        "Edición fallida",
                        "El artículo no se ha editado bien !!! ",
                        "error"
                      );
                    }
                  })
                  .catch(error => {
                    console.log(error);
                  });
              } else {
                swal(
                  "Artículo editado",
                  "El artículo ha sido editado correctamente :) ",
                  "success"
                );
                this.article = res.data.article;
                this.$router.push("/articulo/" + this.article._id);
              }
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    getArticle(articleId) {
      axios.get(this.ur + "/article/" + articleId).then(res => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    }
  }
};
</script>