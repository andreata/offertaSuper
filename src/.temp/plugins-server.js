import plugin_gridsome_plugin_flexsearch_7 from "/Applications/MAMP/htdocs/offertasuper/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"
import plugin_gridsome_plugin_service_worker_8 from "/Applications/MAMP/htdocs/offertasuper/node_modules/gridsome-plugin-service-worker/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_flexsearch_7,
    options: {"pathPrefix":"/offertaSuper","siteUrl":"https://andreata.github.io","searchFields":["title","excerpt"],"collections":[{"indexName":"Product","query":"{ posts { edges { node { id, title, excerpt, slug, featuredImage { node { altText, mediaItemUrl } } } } } }","path":"posts.edges.node"}],"chunk":false,"compress":false,"autoFetch":true,"autoSetup":true,"flexsearch":{"profile":"default"}}
  },
  {
    run: plugin_gridsome_plugin_service_worker_8,
    options: {"networkFirst":{"routes":["/","/chi-siamo"],"fileTypes":["document","script","style","image"],"cacheName":"nf-v1"},"cacheFirst":{"cacheName":"cf-v1","routes":[],"fileTypes":[]},"cacheOnly":{"cacheName":"co-v1","routes":[],"fileTypes":[]},"networkOnly":{"cacheName":"no-v1","routes":[],"fileTypes":[]},"precachedRoutes":[],"staleWhileRevalidate":{"cacheName":"swr-v1","routes":[],"fileTypes":[]}}
  }
]
