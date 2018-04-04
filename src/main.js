// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import routersAndComponnets from '@/components'
Vue.config.productionTip = false


Vue.use(ElementUI)
Vue.use(Router)

var modules = [
  routersAndComponnets
];

var allRoutes = [].concat.apply([], modules
  .map(m => {
    // use the module
    Vue.use(m);
    console.log('modules');
    console.log(JSON.stringify(modules));
    return m;
  })
  .map(m => m.routes !== undefined ? m.routes() : [])
);
console.info(allRoutes);
var router = new Router({
  routes: allRoutes
});


new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
