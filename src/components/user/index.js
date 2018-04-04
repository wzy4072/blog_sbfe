import UserInfo from './userInfo'
import UserList from './userList'

const components = [
  UserInfo,
  UserList
]
const install = function (Vue, opt={}){
    components.map(c => { Vue.use(c.name, c)})
}
const routes = function (){
    return [
        {path: '/user/list', name:'UserList', component: UserList},
        {path: '/user/:id', name:'UserInfo', component: UserInfo}
    ]
}
export default { install, routes };
