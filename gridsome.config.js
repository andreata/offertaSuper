module.exports = {
  siteName: 'Offerta Super',
  siteDescription: '',
  icon: {
    favicon: './src/assets/images/icon/favicon-offerta-super.png',
    touchicon: './src/assets/images/icon/favicon-offerta-super.png'
  },
  siteUrl: 'https://andreata.github.io',
  pathPrefix: '/offertaSuper',
  plugins: [
    
    {
      use: 'gridsome-source-graphql',
      options: {
        url: 'http://localhost:8888/offertasuper_wordpress/graphql',
        fieldName: 'wp',
        typeName: 'WordPress',   
        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        },  
      }, 
    },

    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },

    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['title', 'excerpt'],
        collections: [
          {
            indexName: 'Product',
            query: `{ posts { edges { node { id, title, excerpt, slug, featuredImage { node { altText, mediaItemUrl } } } } } }`,
            path: 'posts.edges.node'
          }
        ],
      }
    }, 
    
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: '#',
        enabled: true,
        debug: true
      }
    }
  ],
}
