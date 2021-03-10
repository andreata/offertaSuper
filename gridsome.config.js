module.exports = {
  siteName: 'App di Incontri',
  siteDescription: 'Raggiungi il successo con le App di Incontri',
  icon: {
    favicon: './src/assets/images/icon/appdiincontrilogo.png',
    touchicon: './src/assets/images/icon/appdiincontrilogo.png'
  },
  siteUrl: 'https://www.appdiincontri.it/',
  pathPrefix: '/',
  plugins: [
    
    {
      use: 'gridsome-source-graphql',
      options: {
        url: 'https://cdn.appdiincontri.it/graphql/',
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
        id: 'GTM-W6W3VJB',
        enabled: true,
        debug: true
      }
    }
  ],
}
