<template>
<Layout >
  <div class="full-container">
    <div class="container">

    <!-- <div class="breadcrumbs">
      <ul>
          <li v-for="breadcrumb in $page.page.seo.breadcrumbs" :key="breadcrumb.text" >
              <g-link :to="breadcrumb.url">{{ breadcrumb.text }}</g-link>
          </li>
        </ul>
    </div> -->

    <div>
      <div class="post__header">
        <img
              v-if="$page.page.featuredImage"
              :src="$page.page.featuredImage.node.mediaItemUrl"
              :width="$page.page.featuredImage.node.mediaDetails.width"
              :alt="$page.page.featuredImage.altText"
            />
      </div>

      <div class="post-title">
        <h1 class="post-title__text" v-html="$page.page.title" />
      </div>

      <p v-html="$page.page.pagina.primoParagrafoLanding"/>


      <!-- Loghi -->
      <div class="">
        <p class="partner-fibra-font">I nostri partner per la fibra ottica</p>
        <div class="loghi-partner">
          <g-image class="image-fibra" src="~/assets/images/icon/partner/tim.png" alt="" width="440" />
          <g-image class="image-fibra" src="~/assets/images/icon/partner/fastweb.png" alt="" width="440" />
          <g-image class="image-fibra" src="~/assets/images/icon/partner/wind.png" alt="" width="440" />
          <g-image class="image-fibra" src="~/assets/images/icon/partner/eolo.png" alt="" width="440" />
          <g-image class="image-fibra" src="~/assets/images/icon/partner/linkem.png" alt="" width="440" />
          
         <!--  <g-image class="mobile-image" src="~/assets/images/icon/loghi-mobile.jpg" alt="" width="1440" /> -->
        </div>
      </div>

      <div class="page-layout-grid">
        <div class="grid-p-1">

          <h2 v-html="$page.page.pagina.titoloPrimaCta" />
          <p v-html="$page.page.pagina.paragrafoPrimaCta" />

          <form-landing-dinamica />


          <div v-html="$page.page.content"/>
        </div>

        <div class="grid-p-2">
          <div class="stiky">
           
            <form-landing-dinamica />
          </div>
        </div>

      </div>

    
    </div> 
    </div>
    <!--<script type="application/ld+json" class="yoast-schema-graph">{{$page.page.seo.schema.raw}}</script>-->

    </div>
  </Layout>
</template>

<page-query>

query Page ($slug: String) {
  page: pageBy(uri: $slug) {
    title
    slug
    link
    featuredImage {
      node {
        altText
        link
        sourceUrl
        mediaDetails {
            width
          }
      }
    }
    pagina {
      primoParagrafoLanding
      paragrafoPrimaCta
      titoloPrimaCta
    }
    
    date
    
    content
    
    seo {
      breadcrumbs {
        text
        url
      }
      schema {
        raw
      }
      canonical
      metaDesc
      metaKeywords
      title
      twitterDescription
      cornerstone
      focuskw
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphDescription
      opengraphImage {
        mediaItemUrl
      }
    }
    
  }
}

</page-query>

<script>
import FormLandingDinamica from '~/components/FormLandingDinamica.vue'

export default {
  components: {
    FormLandingDinamica,
  },
  metaInfo () {
   /*  return {
      title: this.$page.page.seo.title,
      meta: [
        {
          description: this.$page.page.seo.metaDesc,
          key: this.$page.page.seo.metaKeywords,
        }
      ],
    } */
  }
  
}


</script>

<style lang="scss">
.page-layout-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 15px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .grid-p-2 {
    .stiky {
      position: sticky;
      top: 60px;
    }
  }
}

.post-title {
    padding: calc(var(--space) / 2) 0 0 0;
    //max-width: var(--content-width);
    margin: 0 auto;
    padding-left: 0 !important;
}

.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    img {
      width: 100%;
    }
    &:empty {
      display: none;
    }
  }
  &__content {
    h2:first-child {
      margin-top: 0;
    }
    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);
  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
@media screen and (max-width: 768px) {
  .post-title {
    margin-top: var(--space);
  }
  .post-title, .breadcrumbs {
      padding: 0 var(--space);
  }
}

.loghi-partner {
  .image-fibra {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 6px;
    padding: 8px;
    &:first-child {
      margin-left: 0px;
    }
  }
  
}
.partner-fibra-font {
  font-family: "Lexend";
  font-weight: 600;
  line-height: 1.15;
  font-size: 1.6em;
}
</style>



