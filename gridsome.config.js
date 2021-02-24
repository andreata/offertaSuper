module.exports = {
  siteName: 'Gridsome',
  //siteDescription: 'A WordPress starter for Gridsome',
  icon: {
    favicon: './src/assets/images/icon/karatekalogo.png',
    touchicon: './src/assets/images/icon/karatekalogo.png'
  },

  //siteUrl: 'https://hardcore-mcnulty-21e60c.netlify.app/',
  pathPrefix: '/',


  plugins: [
    
    {
      use: 'gridsome-source-graphql',
      options: {
        url: 'https://www.karateka.it/graphql/',
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

    
  ],

}
