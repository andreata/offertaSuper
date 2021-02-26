<template>
  <div class="layout">
    
    <header class="header">   
        
        <div class="logo">
          <g-image src="~/assets/images/icon/app-di-incontri.png" alt=""  width="200"/>
          <g-link class="logo-link"  to="/">link</g-link>
        </div>
        
      
        <ToggleTheme />     
        <NavBar /> 

       <SearchWordPress />
      
    </header>

    <div class="content">
        <slot/>
    </div>

    <div class="sidebar" v-if="sidebar">
      <site-sidebar/> 
    </div>

    <div class="footer">
      <site-footer/>
    </div>

  </div>
</template>

<script>
  import SiteFooter from '~/components/SiteFooter.vue'
  import ToggleTheme from '~/components/ToggleTheme.vue'
  import SiteSidebar from '~/components/SiteSidebar.vue'
  import SearchWordPress from '~/components/SearchWordPress.vue'
  import NavBar from '~/components/NavBar.vue'

  export default {
    components: {
      SiteFooter,
      ToggleTheme,
      SiteSidebar,
      NavBar,
      SearchWordPress
    },
    props: ['sidebar']
  }
</script>

<style lang="scss">

.logo {
  position: relative;

  .logo-link {
    position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.0;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 11;
  }
}

/* .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    position: sticky;
    width: 100%;
  }
} */

.header__right {
    display: flex;
    align-items: center;
  }

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

header {

    border-bottom: 1px solid var(--border-color);
    flex-wrap: nowrap;
    position: -webkit-sticky;
    position: sticky;
    transition: background-color .3s,border-color,.3s;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>



