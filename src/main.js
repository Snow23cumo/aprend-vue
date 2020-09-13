import Vue from 'vue'
import App from './App.vue'
/**inportar el vue-router */
import VueRouter from 'vue-router';
/**vuelidate */
import Vuelidate from 'vuelidate';
/**moment */
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/es';
/**importar los componentes */
import LastArticles from './components/LastArticles.vue';
import MiComponente from './components/MiComponente.vue';
import HelloWorld from './components/HelloWorld.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import Peliculas from './components/Peliculas.vue';
import Search from './components/Search.vue';
import Redirect from './components/Redirect.vue';
import Article from './components/Article.vue';
import CreateArticle from './components/CreateArticle.vue';
import EditArticle from './components/EditArticle.vue';
/**componentes para el menu de navegacion */
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Pagina from './components/Pagina';



Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);
/**fecha */
Vue.use(VueMoment,{
  moment
});
/**Definir las rutas */

const routes = [
  {path:'/home', component: LastArticles},
  {path:'/blog', component: Blog},
  {path:'/formulario', component: Formulario},
  {path:'/pagina/:id?',name:'pagina', component: Pagina},
  {path:'/peliculas',name:'peliculas',component: Peliculas},
  {path:'/ultimos-articulos', component: LastArticles},
  {path:'/buscador/:searchString',component:Search},
  {path:'/redirect/:searchString',component:Redirect},
  {path:'/articulo/:id',name:'article',component:Article},
  {path:'/crear-articulo',name:'create',component:CreateArticle},
  {path:'/editar/:id',name:'edit', component: EditArticle},
  {path:'/mi-componente', component: MiComponente},
  {path:'/hola-mundo', component: HelloWorld},
  {path:'/', component: LastArticles},
  {path:'/*',component: ErrorComponent}
];
/**objeto router */
const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
