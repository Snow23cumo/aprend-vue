<template>
    <section id ="content">
        <h2 class="subheader">Últimos artículos</h2>
        <h1>{{ titulo }}</h1>
        <h2>{{subtitulo}}</h2>
        
        <hr/>
        <h2>REACTIVIDAD-<em>v-model</em></h2>
        
        <input type="text" v-model="nombre"/>
       Mi nombre es: <strong>{{nombre}}</strong>
        
      <h3>DIRECTIVAS DIRECCIONALES</h3>
      <h5><em>(v-if,v-else-if,v-else)</em></h5>

      <input type="number" v-model="edad">
      Mi edad es: <strong>{{edad}}</strong>

        <p class="alert-success-provisional" v-if="edad && edad >=18 && edad < 65">¡¡Eres mayor de edad!!</p>

         <p class="alert-purple-provisional" v-else-if="edad && edad >=65">¡¡Eres de avanzada edad!!</p>

        <p class="alert-danger-provisional" v-else>¡¡Eres menor de edad!!</p>
        
        <hr/>
        <h2>DIRECTIVA ITERATIVA</h2>
        <ol>
            <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
        </ol>
    </section>
    
</template>

<script>
export default {
    name:'MiComponente',
    data(){
        return {
            titulo:'Mi Componente',
            subtitulo:'Soy el subtitulo de mi componente',
            nombre: '',
            edad: 18,
            peliculas:['Batman vs Superman','El señor de los anillos','Spiderman']
        }
    }    
}
</script>