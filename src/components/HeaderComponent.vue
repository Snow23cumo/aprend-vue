<template>
    <header id="header">
        
        <div class="center">
            <!--LOGO-->
            <div class="logo">
                <img src="../assets/logo.png" class="app-logo" alt="logotipo">
                <span id="brand">
                    <strong>Curso</strong>Vuejs
                </span>
            </div>
             <!--MENU-->
             <nav id="menu">
                <ul>
                    <li>
                        <router-link to="/home" active-class="active">Inicio</router-link>
                    </li>
                    <li>
                        <router-link to="/Blog" active-class="active">Blog</router-link>
                    </li>
                    <li>
                       <router-link to="/formulario" active-class="active">Formulario</router-link>
                    </li>
                    <li>
                       <!-- <router-link to="/pagina">Página 1</router-link>-->
                       <router-link :to="{name:'pagina',params:{id:'Soy el valor del parámetro'}}" active-class="active">Página 1</router-link>
                    </li>
                    <li>
                        <router-link to="/peliculas" active-class="active">Peliculas</router-link>
                    </li>
                </ul>
             </nav>
             <!--LIMPIAR LOS FLOTADOS-->
             <div class="clearfix"></div>
        </div>
    </header>

</template>

<script>
export default {
    name:'HeaderComponent.vue'
}
</script>