(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/7wh":function(t,e,a){},"33+B":function(t,e,a){},"41sv":function(t,e,a){"use strict";var s=a("n6yM"),i=a("PpWc"),r=a("vjHv"),n={components:{PostMeta:s.a,PostTags:i.a,FormatedDate:r.a},props:{post:{type:Object,required:!0}}},o=(a("KJN3"),a("KHd+")),l=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-card"},[e("div",{staticClass:"post-card__header"},[t.post.featuredImage?e("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.featuredImage.node.mediaItemUrl}}):t._e()],1),e("div",{staticClass:"post-card__content"},[e("div",{staticClass:"box-cate"},t._l(t.post.categories.nodes,(function(a){return e("div",{key:a.slug},[e("p",[t._v(t._s(a.name))])])})),0),e("div",{staticClass:"flex-meta"}),e("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.excerpt.substring(0,100)+"...")}}),e("g-link",{staticClass:"post-card__link button-pieno",attrs:{to:t.post.uri}},[t._v("Leggi tutto")])],1)])}),[],!1,null,"b3e833cc",null);e.a=l.exports},"8ODb":function(t,e,a){},A65B:function(t,e,a){"use strict";a("33+B")},KJN3:function(t,e,a){"use strict";a("8ODb")},SAOo:function(t,e,a){},VH17:function(t,e,a){"use strict";a("/7wh")},Wsvf:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("Kw5r");var s=a("DOVJ"),i=(a("Y6W1"),a("FNk8"),a("fVfk")),r={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:(t,{props:e,data:a,parent:r})=>{const{info:o,showLinks:l,showNavigation:c,ariaLabel:p}=e,{current:d,total:g,pages:u,start:v,end:f}=function({currentPage:t=1,totalPages:e=1},a){const s=Math.ceil(a/2);let i=Math.floor(t-s),r=Math.floor(t+s);e<=a?(i=0,r=e):t<=s?(i=0,r=a):t+s>=e&&(i=e-a,r=e);const n=[];for(let t=i+1;t<=r;t++)n.push(t);return{current:t,total:e,start:i,end:r,pages:n}}(o,e.range),m=Object(i.d)(r.$route),_=(a,i=a,r=i,o="")=>{a===d&&(r=e.ariaCurrentLabel);const l={to:n(m,a),exact:!0};return e.activeLinkClass&&(l.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(l.exactActiveClass=e.exactActiveLinkClass),t(s.a,{class:[e.linkClass,o],attrs:{...l,"aria-label":r.replace("%n",a),"aria-current":d===a}},[i])},b=l?u.map(t=>_(t,t,e.ariaLinkLabel)):[];if(c){const{firstLabel:t,prevLabel:a,nextLabel:s,lastLabel:i}=e,{ariaFirstLabel:r,ariaPrevLabel:n,ariaNextLabel:o,ariaLastLabel:l}=e,{firstClass:c,prevClass:p,nextClass:u,lastClass:m,navClass:C}=e;d>1&&b.unshift(_(d-1,a,n,[p,C])),v>0&&b.unshift(_(1,t,r,[c,C])),d<g&&b.push(_(d+1,s,o,[u,C])),f<g&&b.push(_(g,i,l,[m,C]))}return b.length<2?null:t("nav",{...a,attrs:{role:"navigation","aria-label":p}},b)}};function n(t,e){const a=/\/$/.test(t)?"/":"";return e>1?Object(i.g)(t)+`/${e}${a}`:t}a("6NbQ")},YcTe:function(t,e,a){"use strict";a("hpgz")},hpgz:function(t,e,a){},nJNL:function(t,e,a){"use strict";var s={props:{post:{type:Object,required:!0}}},i=(a("A65B"),a("KHd+")),r=Object(i.a)(s,(function(){var t=this._self._c;return t("div",{staticClass:"box-image",style:{backgroundImage:`linear-gradient(to bottom, rgba(55, 66, 69, 0.52), rgba(0, 0, 0, 0.73)), url(${this.post.featuredMedia.sourceUrl})`}},[t("g-link",{attrs:{to:this.post.path}},[t("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.title)}})]),t("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"excerpt",domProps:{innerHTML:this._s(this.post.excerpt)}}),t("g-link",{staticClass:"read-more",attrs:{to:this.post.path}},[this._v("\n    Leggi altro\n  ")])],1)}),[],!1,null,"ee21d672",null);e.a=r.exports},"xPq+":function(t,e,a){"use strict";a("SAOo")},xgR8:function(t,e,a){"use strict";a.r(e);var s=a("Wsvf"),i=a("nJNL"),r=a("zC6R"),n=a("41sv"),o=a("n6yM"),l=a("PpWc"),c={components:{PostMeta:o.a,PostTags:l.a},props:{post:{type:Object,required:!0}}},p=(a("YcTe"),a("KHd+")),d=Object(p.a)(c,(function(){var t=this._self._c;return t("div",{staticClass:"post-card"},[t("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.title)}}),t("g-link",{staticClass:"post-card__link",attrs:{to:this.post.uri}},[this._v("Link")])],1)}),[],!1,null,"c2b474ba",null).exports,g=a("vjHv"),u={components:{PostMeta:o.a,PostTags:l.a,FormatedDate:g.a},props:{post:{type:Object,required:!0}}},v=(a("VH17"),Object(p.a)(u,(function(){var t=this,e=t._self._c;return e("g-link",{staticClass:"post-card",attrs:{to:t.post.uri}},[e("div",{staticClass:"post-card__content",style:`background-image: url( ${t.post.featuredImage.node.mediaItemUrl} )`},[e("div",{staticClass:"box-cate"},t._l(t.post.categories.nodes,(function(a){return e("div",{key:a.slug},[e("p",[t._v(t._s(a.name))])])})),0),e("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.excerpt.substring(0,100)+"...")}}),e("g-link",{staticClass:"post-card__link button-pieno",attrs:{to:t.post.uri}},[t._v("Leggi tutto")])],1)])}),[],!1,null,"8e23be04",null).exports),f={components:{Pager:s.a,Post:i.a,SiteSidebar:r.a,PostCardCategory:n.a,PostCardCarouselCategory:d,FormatedDate:g.a,FirstBlogPost:v},metaInfo:()=>({}),data:()=>({limitationList:15})},m=(a("xPq+"),null),_=Object(p.a)(f,(function(){var t=this,e=t._self._c;return e("Layout",{staticClass:"side",attrs:{sidebar:!0}},[e("div",[e("div",{staticClass:"post-title"},[e("h1",[t._v(t._s(t.$page.category.name)+" ")])]),e("div",{staticClass:"breadcrumbs"},[e("ul",t._l(t.$page.category.seo.breadcrumbs,(function(a){return e("li",{key:a.text},[e("g-link",{attrs:{to:a.url}},[t._v(t._s(a.text))])],1)})),0)]),t._l(t.$page.category.posts.edges,(function(a,s){return s<=0?e("FirstBlogPost",{key:a.node.id,attrs:{post:a.node}}):t._e()})),e("div",{staticClass:"content-category"},t._l(t.$page.category.posts.edges,(function(a,s){return s>=1?e("PostCardCategory",{key:a.node.id,attrs:{post:a.node}}):t._e()})),1),t.$page.category.posts.edges.length>5?e("div",{staticClass:"max-width"},[e("h3",{staticClass:"recent-half"},[t._v("Post meno recenti")]),e("ul",{staticClass:"block-ul"},t._l(t.$page.category.posts.edges,(function(a,s){return s>5?e("li",{key:a.node.id},[e("g-link",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{to:a.node.uri},domProps:{innerHTML:t._s(a.node.title)}}),t._v(" \n          "),e("formated-date",{staticClass:"post-date date post-card__date",attrs:{date:a.node.date}})],1):t._e()})),0)]):t._e(),e("script",{staticClass:"yoast-schema-graph",attrs:{type:"application/ld+json"}},[t._v("\n      "+t._s(t.$page.category.seo.schema.raw)+"\n    ")])],2)])}),[],!1,null,"49a86bbb",null);"function"==typeof m&&m(_);e.default=_.exports}}]);