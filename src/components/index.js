import Welcome from './welcome'
import User from './user'
import Login from './login'
import Pet from './pet'

let components = [
  Welcome,
  User,
  Login,
  Pet
];

const install = function (Vue, opts = {}) {
  // components.map(component => Vue.use(component));
}

const routes = function () {
  return [].concat.apply([], components.map(component => component.routes !== undefined ? component.routes() : []));
}

export default {
  install,
  routes
};
