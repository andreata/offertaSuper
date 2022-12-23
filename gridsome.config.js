
module.exports = {
  siteName: 'Offerta Super',
  siteDescription: '',
  icon: {
    favicon: './src/assets/images/icon/favicon-offerta-super.png',
    touchicon: './src/assets/images/icon/favicon-offerta-super.png'
  },
  siteUrl: 'https://andreata.github.io',
  pathPrefix: '/offertaSuper',
  output: {
    hashFunction: "xxhash64"
  },
  transpileDependencies: ['@vue/reactivity'],
  
  chainWebpack: (config, { isProd, isClient }) => {
    // ...
    if (isProd && isClient) {
      config.optimization.splitChunks({
        chunks: "initial",
        maxInitialRequests: Infinity,
        cacheGroups: {
          vueVendor: {
            test: /[\\/]node_modules[\\/](vue|vuex|vue-router)[\\/]/,
            name: "vue-vendors",
          },
          gridsome: {
            test: /[\\/]node_modules[\\/](gridsome|vue-meta)[\\/]/,
            name: "gridsome-vendors",
          },
          polyfill: {
            test: /[\\/]node_modules[\\/]core-js[\\/]/,
            name: "core-js",
          },
        },
      });
    }
  }, 
  plugins: [
    
    {
      use: 'gridsome-source-graphql',
      options: {
        url: 'https://jovial-einstein.34-116-235-233.plesk.page/graphql',
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
    
    /* {
      use: 'gridsome-plugin-gtm',
      options: {
        id: '#',
        enabled: true,
        debug: true
      }
    }, */
    
  ],
}
