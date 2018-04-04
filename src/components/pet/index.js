import PetList from './petList'
const components = [
    PetList
]
const install = function (Vue, opt={}){
    components.map(c => { Vue.use(c.name, c)})
}
const routes = function (){
    return [
        {path: '/pet/list', name:'PetList', component: PetList}
    ]
}
export default { install, routes };
