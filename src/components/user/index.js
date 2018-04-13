import UserList from './userList'
import UserAvatar from './userAvatar'

const components = [
  UserList,
  UserAvatar
]
const install = function (Vue, opt={}){
    components.map(c => { Vue.use(c.name, c)})
}
const routes = function (){
    return [
        {path: '/user/list', name:'UserList', component: UserList},
        {path: '/user/avatar', name:'UserAvatar', component: UserAvatar}
    ]
}
export default { install, routes };
