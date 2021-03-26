import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  TimeRex: () => import('../../components/TimeRex.vue' /* webpackChunkName: "components/time-rex" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
