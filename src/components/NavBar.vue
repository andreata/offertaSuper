<template>
    <div class="nav-right"> 
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
        </label>
        <ul class="nav itemnav menu">
            
            <li @mouseover="hover = true" @mouseleave="hover = false" v-for="edge in getNavItems(null)" >
              
                <g-link :to="edge.node.path" class="link">{{ edge.node.title }}</g-link> 

                   
                    <!-- <div @click="toggle" @mouseover="hover = true" @mouseleave="hover = false" class="plus-li">+</div> -->
                    <ul class="sub-menu" v-bind:class="{ active: active || hover }">
                        
                        <li v-for="edge in getNavItems(edge.node.key)">
                            <g-link :to="edge.node.path" class="link">{{ edge.node.title }}</g-link> 
                        </li>

                    </ul>
            </li>
            
        </ul>  
    </div>
</template>

<static-query>
query  {
  menuItems(where: {location: PRIMARY}, first: 200) {
      edges {
        node {
            key: id
            parentId
            title: label
            url
            path
        }
    }
  }
}
</static-query>

<script>


export default {
    data () {
        return {
            active: false,
            hover: false
        }
    },
   
    methods: {
        getNavItems(parentId) {
            return this.$static.menuItems.edges.filter(edge => {
                return edge.node.parentId === parentId
            })
        },
        toggle() {
            this.active = !this.active
        }, 
    },
}

</script>

<style scoped>
/* .nav {
    display: flex;
}
ul.itemnav {
    margin: 0;
}
.nav li {
    letter-spacing: .5px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 15px 5px;
    text-decoration: none;
    position: relative;
    font-size: .95rem;
}
.nav li a {
    font-size: .75rem;
    text-decoration: none;
}

.nav li a:after {
    content: "";
    position: absolute;
    top: 100%;
    height: 1px;
    left: 50%;
    width: 0;
    transform: translateX(-50%);
    background-color: transparent;
    opacity: .5;
    transition: all .6s;
}

.nav li a.active:after {
    background-color: var(--title-color);
    width: 100%;
} */

</style>

