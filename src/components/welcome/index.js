import Welcome from './Root';

/* istanbul ignore next */
Welcome.install = function (Vue, opts) {
  Vue.component(Welcome.name, Welcome);
};

Welcome.routes = function () {
  return [{ path: '/', name: 'Welcome', component: Welcome }]
}

export default Welcome;

