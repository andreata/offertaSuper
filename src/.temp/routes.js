const c1 = () => import(/* webpackChunkName: "page--src--templates--word-press-category-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/templates/WordPressCategory.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--word-press-post-tag-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/templates/WordPressPostTag.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--word-press-post-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/templates/WordPressPost.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--word-press-page-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/templates/WordPressPage.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--selezionatore-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/pages/Selezionatore.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--speed-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/pages/speed.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--home-landing-one-step-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/pages/homeLandingOneStep.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--home-old-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/pages/HomeOld.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--chi-siamo-old-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/pages/ChiSiamoOld.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--chi-siamo-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/pages/ChiSiamo.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--contatti-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/pages/Contatti.vue")
const c12 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Applications/MAMP/htdocs/offertasuper/node_modules/gridsome/app/pages/404.vue")
const c13 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Applications/MAMP/htdocs/offertasuper/src/pages/Index.vue")

export default [
  {
    path: "/category/blog/consigli-per-risparmiare/",
    component: c1
  },
  {
    path: "/tag/telefonia/",
    component: c2
  },
  {
    path: "/tag/mondo/",
    component: c2
  },
  {
    path: "/tag/fibra/",
    component: c2
  },
  {
    path: "/category/senza-categoria/",
    component: c1
  },
  {
    path: "/tag/adsl/",
    component: c2
  },
  {
    path: "/category/blog/",
    component: c1
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
    path: "/le-migliori-offerte-per-la-fibra-ottica-tim/",
    component: c4
  },
  {
    path: "/selezionatore/",
    component: c5
  },
  {
    path: "/speed/",
    component: c6
  },
  {
    path: "/offerte-luce-e-gas/",
    component: c4
  },
  {
    path: "/pagina-landing-dinamica/",
    component: c4
  },
  {
    path: "/fibra-la-migliore-offerta-per-il-mercato-italiano/",
    component: c4
  },
  {
    path: "/home-landing-one-step/",
    component: c7
  },
  {
    path: "/home-old/",
    component: c8
  },
  {
    path: "/chi-siamo-old/",
    component: c9
  },
  {
    path: "/chi-siamo/",
    component: c10
  },
  {
    path: "/ciao-mondo/",
    component: c3
  },
  {
    path: "/accesso-landing-privata/",
    component: c4
  },
  {
    path: "/contatti/",
    component: c11
  },
  {
    path: "/articolo-test/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c12
  },
  {
    name: "home",
    path: "/",
    component: c13
  },
  {
    name: "*",
    path: "*",
    component: c12
  }
]
