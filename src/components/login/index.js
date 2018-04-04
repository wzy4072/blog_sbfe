import Login from './login.vue'

const components = [
  Login
]
const install = function (Vue, opt={}){
    components.map(c => { Vue.use(c.name, c)})
}
const routes = function (){
    return [
        {path: '/login', name:'Login', component: Login},
    ]
}
export default { install, routes };