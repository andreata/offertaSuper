import plugin_gridsome_plugin_flexsearch_7 from "/Applications/MAMP/htdocs/apipwasbam/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_flexsearch_7,
    options: {"pathPrefix":"","siteUrl":"https://www.appdiincontri.it/","searchFields":["title","excerpt"],"collections":[{"indexName":"Product","query":"{ posts { edges { node { id, title, excerpt, slug, featuredImage { node { altText, mediaItemUrl } } } } } }","path":"posts.edges.node"}],"chunk":false,"compress":false,"autoFetch":true,"autoSetup":true,"flexsearch":{"profile":"default"}}
  }
]
