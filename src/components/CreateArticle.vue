<template src="../views/CreateArticle.html"></template>

<script>
import Sidebar from "./Sidebar";
import { Global } from "../Global";
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import Article from "../models/Article";
import swal from "sweetalert";
export default {
  name: "CreateArticle.vue",

  components: {
    Sidebar
  },

  data() {
    return {
      ur: Global.url,
      article: new Article("", "", null, ""),
      submited: false,
      file: ""
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
  },
  methods: {
    save() {
      this.submited = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.ur + "/save", this.article)
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
                        "Artículo creado",
                        "El artículo ha sido creado correctamente :) ",
                        "success"
                      );
                      this.article = res.data.article;
                      this.$router.push("/blog");
                    } else {
                      //mostrar alerta de error
                      swal(
                        "Creación fallida",
                        "El artículo no se ha guardado bien !!! ",
                        "error"
                      );
                    }
                  })
                  .catch(error => {
                    console.log(error);
                  });
              } else {
                swal(
                  "Artículo creado",
                  "El artículo ha sido creado correctamente :) ",
                  "success"
                );
                this.article = res.data.article;
                this.$router.push("/blog");
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
    }
  }
};
</script>