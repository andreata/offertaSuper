const c1 = () => import(/* webpackChunkName: "page--src--templates--word-press-post-tag-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/templates/WordPressPostTag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--word-press-category-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/templates/WordPressCategory.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--word-press-post-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/templates/WordPressPost.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--home-landing-one-step-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/pages/homeLandingOneStep.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--home-landing-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/pages/homeLanding.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--chi-siamo-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/pages/ChiSiamo.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Applications/MAMP/htdocs/offertasuper/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/pages/Index.vue")

export default [
  {
    path: "/offertasuper_wordpress/tag/telefonia/",
    component: c1
  },
  {
    path: "/offertasuper_wordpress/tag/mondo/",
    component: c1
  },
  {
    path: "/offertasuper_wordpress/tag/fibra/",
    component: c1
  },
  {
    path: "/offertasuper_wordpress/category/senza-categoria/",
    component: c2
  },
  {
    path: "/offertasuper_wordpress/tag/adsl/",
    component: c1
  },
  {
    path: "/offertasuper_wordpress/category/consigli-per-risparmiare/",
    component: c2
  },
  {
    path: "/offertasuper_wordpress/category/blog/",
    component: c2
  },
  {
    path: "/ridurre-i-consumi-e-possibile-se-sai-come-fare-2/",
    component: c3
  },
  {
    path: "/ridurre-i-consumi-e-possibile-se-sai-come-fare-3/",
    component: c3
  },
  {
    path: "/ridurre-i-consumi-e-possibile-se-sai-come-fare/",
    component: c3
  },
  {
    path: "/home-landing-one-step/",
    component: c4
  },
  {
    path: "/home-landing/",
    component: c5
  },
  {
    path: "/chi-siamo/",
    component: c6
  },
  {
    path: "/ciao-mondo/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
