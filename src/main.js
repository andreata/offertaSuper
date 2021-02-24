// Import main css
import '~/assets/style/index.scss'
import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue'
import VueDisqus from 'vue-disqus'

import "@fontsource/poppins"


export default function (Vue, { head, isClient }) {

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'it' }

  Vue.component('Layout', DefaultLayout)
  Vue.use(VueDisqus)
  
  if (process.isClient) {

   

    const VueProgressiveImage = require('vue-progressive-image').default;
    
    Vue.use(VueProgressiveImage, {
    blur: 30,
    delay: 2000
  })
}
  
}


