export default function ({app: {router}}, inject) {
  if(true){
    // inject empty gtag function for disabled mode
    inject('gtag', () => {})
    return
  }

  window.dataLayer = window.dataLayer || []
  function gtag () {
    dataLayer.push(arguments)
    if(false){
      console.debug('gtag tracking called with following arguments:', arguments)
    }
  }
  inject('gtag', gtag)
  gtag('js', new Date())
  gtag('config','G-BWQVKNN17X',)

  if(!false){
    router.afterEach((to) => {
      gtag('config', 'G-BWQVKNN17X', {'page_path': to.fullPath})
    })
  }

  // additional accounts
}
