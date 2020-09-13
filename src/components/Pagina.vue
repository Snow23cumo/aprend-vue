<template>
 <div class="general">
    <Slider texto="Página de pruebas"></Slider>
    <div class="center">
  <section id="content">
    <h2 class="subheader">Página de pruebas</h2>
    <h3>{{id_desde_url}}</h3>
    <button @click="actualizarNombre()">Actualizar nombre</button>
    <h3>{{ nombre }}</h3>
    <button @click="redirigirBlog()">Redirigir al blog</button>
  </section>
  <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";
import Sidebar from "./Sidebar";

export default {
  name: "Pagina",
  components:{
    Slider,
    Sidebar
  },

  created(){
    console.log('Componente creado !!');
  },
  /**recoger parámetro desde la url */
  mounted(){
    this.id_desde_url = this.$route.params.id;
    console.log('Componente montado !!');
  },
  updated(){
    console.log('Componente actualizado');
  },
  destroyed(){
    console.log('Componente eliminado');
  },
  data(){
    return {
     id_desde_url:null,
     nombre:'Yonny cuesta'
    };
  },
  methods:{
    actualizarNombre(){
    this.nombre = 'Yonny moreno';
    console.log(this.nombre);
  },
  redirigirBlog(){
    this.$router.push('/blog');
  }
  }
};
</script>