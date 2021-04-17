export { default as ImgImagin } from '../../components/ImgImagin.vue'
export { default as TimeRex } from '../../components/TimeRex.vue'

export const LazyImgImagin = import('../../components/ImgImagin.vue' /* webpackChunkName: "components/img-imagin" */).then(c => wrapFunctional(c.default || c))
export const LazyTimeRex = import('../../components/TimeRex.vue' /* webpackChunkName: "components/time-rex" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
