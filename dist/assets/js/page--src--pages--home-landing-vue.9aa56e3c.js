(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+UMp":function(t,a,i){"use strict";i("81Df")},"4CaU":function(t,a,i){"use strict";var e={data:()=>({activeStep:0,animation:"animate-in",formSteps:[{title:"Verifica Copertura",fields:[{label:"Inserisci il tuo Comune per conoscere la miglior offerta Internet Casa",name:"comune",value:"",valid:!0,pattern:/.+/}]},{title:"Tipo di Servizio",fields:[{label:"Il tuo nome",name:"nome",value:"",valid:!0,pattern:/.+/},{label:"Il tuo cognome",name:"cognome",value:"",valid:!0,pattern:/.+/},{label:"La tua mail?",name:"email",value:"",valid:!0,pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/}]},{title:"Scopri l'offerta"}]}),methods:{nextStep(){this.animation="animate-out",setTimeout(()=>{this.animation="animate-in",this.activeStep+=1},550)},checkFields(){let t=!0;this.formSteps[this.activeStep].fields.forEach(a=>{a.pattern.test(a.value)?(a.valid=!0,sessionStorage.setItem(a.name,a.value)):(t=!1,a.valid=!1)}),t?this.nextStep():(this.animation="animate-wrong",setTimeout(()=>{this.animation=""},400))},subMit(){let t=!0;this.formSteps[this.activeStep].fields.forEach(a=>{a.pattern.test(a.value)?(a.valid=!0,sessionStorage.setItem(a.name,a.value)):(t=!1,a.valid=!1)});let a=sessionStorage.getItem("comune"),i=sessionStorage.getItem("nome"),e=sessionStorage.getItem("cognome"),s=sessionStorage.getItem("email");var o=new XMLHttpRequest;o.open("POST","https://b7e6-79-22-201-16.ngrok.io/offertasuper_backend/php/offertasuper.php",!0),o.setRequestHeader("Content-Type","application/json"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&console.log(this.responseText)};var l=JSON.stringify({comune:a,nome:i,cognome:e,email:s});o.send(l),console.log(o),sessionStorage.clear()}}},s=(i("+UMp"),i("KHd+")),o=Object(s.a)(e,(function(){var t=this,a=t._self._c;return a("div",{},[a("div",[a("article",[a("header",[a("div",{staticClass:"progress"},t._l(t.formSteps,(function(i,e){return a("div",{key:"step"+e,staticClass:"progress-step",class:{active:e===t.activeStep}},[t._v("\n                        "+t._s(e+1)+"\n                        "),a("p",{staticClass:"title-step"},[t._v(t._s(t.formSteps[e].title))])])})),0)]),a("section",{class:t.animation},[a("h3",[t._v(t._s(t.formSteps[t.activeStep].title))]),a("div",{staticClass:"input-fields"},t._l(t.formSteps[t.activeStep].fields,(function(i,e){return a("div",{key:"field"+e,staticClass:"input-container"},[a("label",{staticClass:"input-label mobl"},[t._v(t._s(i.label))]),a("input",{directives:[{name:"model",rawName:"v-model",value:i.value,expression:"field.value"}],class:{"wrong-input":!i.valid},attrs:{type:"text",required:""},domProps:{value:i.value},on:{input:function(a){a.target.composing||t.$set(i,"value",a.target.value)}}}),a("label",{staticClass:"input-label desk"},[t._v(t._s(i.label))])])})),0),a("div",{staticClass:"actions"},[t.activeStep+1<t.formSteps.length-1?a("button",{on:{click:t.checkFields}},[t._v("Prosegui")]):t._e(),t.activeStep+1===t.formSteps.length-1?a("button",{attrs:{type:"submit"},on:{click:t.subMit}},[t._v("Fatto")]):t._e()])])])])])}),[],!1,null,"76c301c2",null);a.a=o.exports},"81Df":function(t,a,i){},FFQA:function(t,a,i){"use strict";i.r(a);var e=i("Wsvf"),s=i("4CaU"),o={components:{Pager:e.a,FormLanding:s.a,Carousel:()=>i.e(0).then(i.t.bind(null,"CmN8",7)).then(t=>t.Carousel).catch(),Slide:()=>i.e(0).then(i.t.bind(null,"CmN8",7)).then(t=>t.Slide).catch()},metaInfo:()=>({title:"Offerta Super | Selezioniamo le migliori offerte per te",meta:[{description:"Offerta Super è un selezionatore online, in grado di selezionare le migliori offerte per te",key:"Offerta Super"},{key:"og:title",name:"og:title",content:"Offerta Super"},{key:"twitter:title",name:"twitter:title",content:"Offerta Super"},{key:"og:description",name:"og:description",content:"Offerta Super"},{key:"twitter:description",name:"twitter:description",content:"Offerta Super"},{key:"og:image",name:"og:image",content:""}]})},l=(i("U2Tn"),i("KHd+")),r=null,n=Object(l.a)(o,(function(){var t=this,a=t._self._c;return a("Layout",[a("div",[a("div",{staticClass:"full-container bg-home-2"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title-home desk"},[t._v("Abbiamo selezionato per te"),a("br"),t._v(" la migliore offerta Internet Casa")]),a("p",{staticClass:"p-home desk"},[t._v("I nostri parametri sono:")]),a("p",{staticClass:"orange-home font-bold desk"},[t._v("miglior prezzo, miglior servizio, miglior assistenza")]),a("div",{staticClass:"mobl"},[a("div",{staticClass:"home-layout-mobile"},[a("div",[a("h1",{staticClass:"title-home-mobile mobl"},[t._v("Abbiamo selezionato per te")]),a("p",{staticClass:"p-home-mobile mobl"},[t._v("La migliore offerta Internet Casa ")])]),a("g-image",{staticClass:"img-hero",attrs:{src:i("Pi8j"),alt:"",width:"300"}})],1),a("div",{staticClass:"bullet-landing"},[a("g-image",{attrs:{src:i("ccLb"),alt:"",width:"50"}}),a("p",[t._v("Miglior Prezzo")])],1),a("div",{staticClass:"bullet-landing"},[a("g-image",{attrs:{src:i("ccLb"),alt:"",width:"50"}}),a("p",[t._v("Miglior servizio")])],1),a("div",{staticClass:"bullet-landing"},[a("g-image",{attrs:{src:i("ccLb"),alt:"",width:"50"}}),a("p",[t._v("Miglior assistenza")])],1)]),a("form-landing")],1)]),a("div",{staticClass:"full-container desk"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title-home"},[t._v("Noi selezioniamo, tu risparmi")]),a("div",{staticClass:"container-box"},[a("div",{staticClass:"item-box"},[a("p",{staticClass:"promo"},[t._v("Promo del mese")]),a("g-image",{staticClass:"img-promo",attrs:{src:i("pkyX"),alt:"",width:"66"}}),a("h2",{staticClass:"h2-promo"},[t._v("Internet Casa")]),a("h3",{staticClass:"h3-promo"},[t._v("Risparmia 200€ l'anno")]),a("p",{staticClass:"li-promo"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.001",height:"16.999",viewBox:"0 0 17.001 16.999"}},[a("path",{attrs:{id:"Tracciato_760","data-name":"Tracciato 760",d:"M8.5,17c-.087,0-.175,0-.262,0A8.5,8.5,0,0,1,7.716.034C7.967.012,8.223,0,8.475,0a8.524,8.524,0,0,1,8.491,9.283A8.5,8.5,0,0,1,8.5,17ZM4.49,7.343a.806.806,0,0,0-.225.032A.811.811,0,0,0,3.929,8.74L6.9,11.575a.81.81,0,0,0,1.129,0L13.066,6.59h.005a.809.809,0,0,0-1.138-1.151L7.449,9.869l-2.4-2.3A.808.808,0,0,0,4.49,7.343Z",transform:"translate(0 0)",fill:"#f9b666"}})]),a("span",[t._v("Modem")])]),a("p",{staticClass:"li-promo"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.001",height:"16.999",viewBox:"0 0 17.001 16.999"}},[a("path",{attrs:{id:"Tracciato_760","data-name":"Tracciato 760",d:"M8.5,17c-.087,0-.175,0-.262,0A8.5,8.5,0,0,1,7.716.034C7.967.012,8.223,0,8.475,0a8.524,8.524,0,0,1,8.491,9.283A8.5,8.5,0,0,1,8.5,17ZM4.49,7.343a.806.806,0,0,0-.225.032A.811.811,0,0,0,3.929,8.74L6.9,11.575a.81.81,0,0,0,1.129,0L13.066,6.59h.005a.809.809,0,0,0-1.138-1.151L7.449,9.869l-2.4-2.3A.808.808,0,0,0,4.49,7.343Z",transform:"translate(0 0)",fill:"#f9b666"}})]),a("span",[t._v("Internet")])]),a("p",{staticClass:"li-promo"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.001",height:"16.999",viewBox:"0 0 17.001 16.999"}},[a("path",{attrs:{id:"Tracciato_760","data-name":"Tracciato 760",d:"M8.5,17c-.087,0-.175,0-.262,0A8.5,8.5,0,0,1,7.716.034C7.967.012,8.223,0,8.475,0a8.524,8.524,0,0,1,8.491,9.283A8.5,8.5,0,0,1,8.5,17ZM4.49,7.343a.806.806,0,0,0-.225.032A.811.811,0,0,0,3.929,8.74L6.9,11.575a.81.81,0,0,0,1.129,0L13.066,6.59h.005a.809.809,0,0,0-1.138-1.151L7.449,9.869l-2.4-2.3A.808.808,0,0,0,4.49,7.343Z",transform:"translate(0 0)",fill:"#f9b666"}})]),a("span",[t._v("Telefono")])]),a("p",{staticClass:"li-promo"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.001",height:"16.999",viewBox:"0 0 17.001 16.999"}},[a("path",{attrs:{id:"Tracciato_760","data-name":"Tracciato 760",d:"M8.5,17c-.087,0-.175,0-.262,0A8.5,8.5,0,0,1,7.716.034C7.967.012,8.223,0,8.475,0a8.524,8.524,0,0,1,8.491,9.283A8.5,8.5,0,0,1,8.5,17ZM4.49,7.343a.806.806,0,0,0-.225.032A.811.811,0,0,0,3.929,8.74L6.9,11.575a.81.81,0,0,0,1.129,0L13.066,6.59h.005a.809.809,0,0,0-1.138-1.151L7.449,9.869l-2.4-2.3A.808.808,0,0,0,4.49,7.343Z",transform:"translate(0 0)",fill:"#f9b666"}})]),a("span",[t._v("Attivazione")])]),a("g-link",{staticClass:"button-pieno",attrs:{to:"/home-landing/"}},[t._v("Clicca e scopri subito")])],1),a("div",{staticClass:"item-box"},[a("p",{staticClass:"promo"},[t._v("Promo del mese")]),a("g-image",{staticClass:"img-promo",attrs:{src:i("djiu"),alt:"",width:"66"}}),a("h2",{staticClass:"h2-promo"},[t._v("Luce e gas")]),a("h3",{staticClass:"h3-promo"},[t._v("Risparmia 240€ l'anno")]),a("p",{staticClass:"li-promo"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.001",height:"16.999",viewBox:"0 0 17.001 16.999"}},[a("path",{attrs:{id:"Tracciato_760","data-name":"Tracciato 760",d:"M8.5,17c-.087,0-.175,0-.262,0A8.5,8.5,0,0,1,7.716.034C7.967.012,8.223,0,8.475,0a8.524,8.524,0,0,1,8.491,9.283A8.5,8.5,0,0,1,8.5,17ZM4.49,7.343a.806.806,0,0,0-.225.032A.811.811,0,0,0,3.929,8.74L6.9,11.575a.81.81,0,0,0,1.129,0L13.066,6.59h.005a.809.809,0,0,0-1.138-1.151L7.449,9.869l-2.4-2.3A.808.808,0,0,0,4.49,7.343Z",transform:"translate(0 0)",fill:"#f9b666"}})]),a("span",[t._v("Bullet")])]),a("p",{staticClass:"li-promo"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.001",height:"16.999",viewBox:"0 0 17.001 16.999"}},[a("path",{attrs:{id:"Tracciato_760","data-name":"Tracciato 760",d:"M8.5,17c-.087,0-.175,0-.262,0A8.5,8.5,0,0,1,7.716.034C7.967.012,8.223,0,8.475,0a8.524,8.524,0,0,1,8.491,9.283A8.5,8.5,0,0,1,8.5,17ZM4.49,7.343a.806.806,0,0,0-.225.032A.811.811,0,0,0,3.929,8.74L6.9,11.575a.81.81,0,0,0,1.129,0L13.066,6.59h.005a.809.809,0,0,0-1.138-1.151L7.449,9.869l-2.4-2.3A.808.808,0,0,0,4.49,7.343Z",transform:"translate(0 0)",fill:"#f9b666"}})]),a("span",[t._v("Bullet")])]),a("p",{staticClass:"li-promo"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.001",height:"16.999",viewBox:"0 0 17.001 16.999"}},[a("path",{attrs:{id:"Tracciato_760","data-name":"Tracciato 760",d:"M8.5,17c-.087,0-.175,0-.262,0A8.5,8.5,0,0,1,7.716.034C7.967.012,8.223,0,8.475,0a8.524,8.524,0,0,1,8.491,9.283A8.5,8.5,0,0,1,8.5,17ZM4.49,7.343a.806.806,0,0,0-.225.032A.811.811,0,0,0,3.929,8.74L6.9,11.575a.81.81,0,0,0,1.129,0L13.066,6.59h.005a.809.809,0,0,0-1.138-1.151L7.449,9.869l-2.4-2.3A.808.808,0,0,0,4.49,7.343Z",transform:"translate(0 0)",fill:"#f9b666"}})]),a("span",[t._v("Bullet")])]),a("p",{staticClass:"li-promo"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.001",height:"16.999",viewBox:"0 0 17.001 16.999"}},[a("path",{attrs:{id:"Tracciato_760","data-name":"Tracciato 760",d:"M8.5,17c-.087,0-.175,0-.262,0A8.5,8.5,0,0,1,7.716.034C7.967.012,8.223,0,8.475,0a8.524,8.524,0,0,1,8.491,9.283A8.5,8.5,0,0,1,8.5,17ZM4.49,7.343a.806.806,0,0,0-.225.032A.811.811,0,0,0,3.929,8.74L6.9,11.575a.81.81,0,0,0,1.129,0L13.066,6.59h.005a.809.809,0,0,0-1.138-1.151L7.449,9.869l-2.4-2.3A.808.808,0,0,0,4.49,7.343Z",transform:"translate(0 0)",fill:"#f9b666"}})]),a("span",[t._v("Bullet")])]),a("g-link",{staticClass:"button-pieno",attrs:{to:"/home-landing/"}},[t._v("Clicca e scopri subito")])],1),a("div",{staticClass:"item-box"},[a("p",{staticClass:"promo"},[t._v("Promo del mese")]),a("g-image",{staticClass:"img-promo",attrs:{src:i("ItAb"),alt:"",width:"66"}}),a("h2",{staticClass:"h2-promo"},[t._v("Scopri tutte le offerte")]),a("h3",{staticClass:"h3-promo"},[t._v("Qui trovi tutte le migliori offerte telefonia fissa")]),a("p",{staticClass:"p-promo-standard"},[a("span",[t._v("Selezionate da Offerta Super in esclusiva per te!")])]),a("g-link",{staticClass:"button-pieno",attrs:{to:"/home-landing/"}},[t._v("Clicca e scopri subito")])],1),a("div",{staticClass:"item-box"},[a("p",{staticClass:"promo"},[t._v("Consulenza")]),a("g-image",{staticClass:"img-promo",attrs:{src:i("9NDH"),alt:"",width:"66"}}),a("h2",{staticClass:"h2-promo"},[t._v("Richiedi un'analisi delle tue spese")]),a("h3",{staticClass:"h3-promo"},[t._v("Risparmia 500€ l'anno")]),a("p",{staticClass:"li-promo"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.001",height:"16.999",viewBox:"0 0 17.001 16.999"}},[a("path",{attrs:{id:"Tracciato_760","data-name":"Tracciato 760",d:"M8.5,17c-.087,0-.175,0-.262,0A8.5,8.5,0,0,1,7.716.034C7.967.012,8.223,0,8.475,0a8.524,8.524,0,0,1,8.491,9.283A8.5,8.5,0,0,1,8.5,17ZM4.49,7.343a.806.806,0,0,0-.225.032A.811.811,0,0,0,3.929,8.74L6.9,11.575a.81.81,0,0,0,1.129,0L13.066,6.59h.005a.809.809,0,0,0-1.138-1.151L7.449,9.869l-2.4-2.3A.808.808,0,0,0,4.49,7.343Z",transform:"translate(0 0)",fill:"#f9b666"}})]),a("span",[t._v("Bullet")])]),a("p",{staticClass:"li-promo"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.001",height:"16.999",viewBox:"0 0 17.001 16.999"}},[a("path",{attrs:{id:"Tracciato_760","data-name":"Tracciato 760",d:"M8.5,17c-.087,0-.175,0-.262,0A8.5,8.5,0,0,1,7.716.034C7.967.012,8.223,0,8.475,0a8.524,8.524,0,0,1,8.491,9.283A8.5,8.5,0,0,1,8.5,17ZM4.49,7.343a.806.806,0,0,0-.225.032A.811.811,0,0,0,3.929,8.74L6.9,11.575a.81.81,0,0,0,1.129,0L13.066,6.59h.005a.809.809,0,0,0-1.138-1.151L7.449,9.869l-2.4-2.3A.808.808,0,0,0,4.49,7.343Z",transform:"translate(0 0)",fill:"#f9b666"}})]),a("span",[t._v("Bullet")])]),a("p",{staticClass:"li-promo"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.001",height:"16.999",viewBox:"0 0 17.001 16.999"}},[a("path",{attrs:{id:"Tracciato_760","data-name":"Tracciato 760",d:"M8.5,17c-.087,0-.175,0-.262,0A8.5,8.5,0,0,1,7.716.034C7.967.012,8.223,0,8.475,0a8.524,8.524,0,0,1,8.491,9.283A8.5,8.5,0,0,1,8.5,17ZM4.49,7.343a.806.806,0,0,0-.225.032A.811.811,0,0,0,3.929,8.74L6.9,11.575a.81.81,0,0,0,1.129,0L13.066,6.59h.005a.809.809,0,0,0-1.138-1.151L7.449,9.869l-2.4-2.3A.808.808,0,0,0,4.49,7.343Z",transform:"translate(0 0)",fill:"#f9b666"}})]),a("span",[t._v("Bullet")])]),a("g-link",{staticClass:"button-pieno",attrs:{to:"/home-landing/"}},[t._v("Clicca e scopri subito")])],1)])])]),a("div",{staticClass:"full-container copy-area"},[a("div",{staticClass:"container"},[a("div",{staticClass:"grid-two-column"},[a("div",{staticClass:"block-content-img"},[a("g-image",{staticClass:"img-promo",attrs:{src:i("nXVj"),alt:"",width:"400"}})],1),a("div",{staticClass:"flex-content-copy"},[a("div",[a("h2",[t._v("Abbiamo analizzato per te più di 50 offerte internet, luce e gas")]),a("p",[t._v("Il nostro selezionatore è in grado di trovare con estrema precisione la migliore\n                                offerta per TE.")]),a("p",{staticClass:"content-2"},[t._v("Che abbia il miglio prezzo, chiaro e trasparente.Che possa\n                                fornirti\n                                un servizio di\n                                qualità e senza\n                                vincoli.")]),a("g-link",{staticClass:"button-vuoto",attrs:{to:"/home-landing/"}},[t._v("Scopri tutte le offerte")])],1)])])])]),a("div",{staticClass:"full-container container-salmone"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"text-center mb-80"},[t._v("\n                    Perché affidarsi al primo selezionatore di offerte in Italia\n                ")]),a("div",{staticClass:"grid-five-column"},[a("div",[a("g-image",{staticClass:"img-salmone",attrs:{src:i("Xt0I"),alt:"",width:"60"}}),a("div",[a("h3",{staticClass:"orange-font"},[t._v("Analisi")]),a("p",{staticClass:"grey-font"},[t._v("Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam.\n                                Nulla\n                                vitae elit\n                                libero, a pharetra augue. ")])])],1),a("div",[a("g-image",{staticClass:"img-salmone",attrs:{src:i("p1Ef"),alt:"",width:"60"}}),a("div",[a("h3",{staticClass:"orange-font"},[t._v("Confronto")]),a("p",{staticClass:"grey-font"},[t._v("Abbiamo selezionato le migliori soluzioni per la tua casa e ti\n                                garantiamo l’offerta\n                                al miglior prezzo ")])])],1),a("div",[a("g-image",{staticClass:"img-salmone",attrs:{src:i("xSgc"),alt:"",width:"60"}}),a("div",[a("h3",{staticClass:"orange-font"},[t._v("Risparmio")]),a("p",{staticClass:"grey-font"},[t._v("Con la nostra soluzione risparmierai fino a240€/anno ")])])],1),a("div",[a("g-image",{staticClass:"img-salmone",attrs:{src:i("mgwx"),alt:"",width:"60"}}),a("div",[a("h3",{staticClass:"orange-font"},[t._v("Sicurezza")]),a("p",{staticClass:"grey-font"},[t._v("Ti garantiamo la miglior assistenza sulla tua offerta e potrai\n                                sempre\n                                contattarci per\n                                qualsiasi esigenza ")])])],1),a("div",[a("g-image",{staticClass:"img-salmone",attrs:{src:i("7vDA"),alt:"",width:"60"}}),a("div",[a("h3",{staticClass:"orange-font"},[t._v("Affidabilità")]),a("p",{staticClass:"grey-font"},[t._v("Il nostro servizio è affidabile e gratis, siamo l’unico servizio ad\n                                affidarti un\n                                consulente dedicato che potrai contattare SEMPRE! ")])])],1),a("div")])])]),a("div",{staticClass:"full-container"},[a("div",{staticClass:"container recensioni"},[a("h2",{staticClass:"text-center mb-80"},[t._v("Le recensioni dei clienti che si sono affidati al selezionatore\n                ")]),a("ClientOnly",[a("carousel",{staticClass:"carousel",attrs:{perPageCustom:[[768,2],[1024,5]],paginationEnabled:!0}},[a("slide",{staticClass:"carousel-cell carousel-item-recensioni"},[a("div",{staticClass:"salmone-bg"},[a("p",{staticClass:"orange-font"},[t._v("Ottimo servizio")]),a("p",{staticClass:"grey-font"},[t._v("Buongiorno, trovo assolutamente positivo il servizio che\n                                    Offertasuper.it fornisce\n                                    ai\n                                    clienti: risposte\n                                    veloci")])])]),a("slide",{staticClass:"carousel-cell carousel-item-recensioni"},[a("div",{staticClass:"salmone-bg"},[a("p",{staticClass:"orange-font"},[t._v("Ottimo servizio")]),a("p",{staticClass:"grey-font"},[t._v("Buongiorno, trovo assolutamente positivo il servizio che\n                                    Offertasuper.it fornisce\n                                    ai\n                                    clienti: risposte\n                                    veloci")])])]),a("slide",{staticClass:"carousel-cell carousel-item-recensioni"},[a("div",{staticClass:"salmone-bg"},[a("p",{staticClass:"orange-font"},[t._v("Ottimo servizio")]),a("p",{staticClass:"grey-font"},[t._v("Buongiorno, trovo assolutamente positivo il servizio che\n                                    Offertasuper.it fornisce\n                                    ai\n                                    clienti: risposte\n                                    veloci")])])]),a("slide",{staticClass:"carousel-cell carousel-item-recensioni"},[a("div",{staticClass:"salmone-bg"},[a("p",{staticClass:"orange-font"},[t._v("Ottimo servizio")]),a("p",{staticClass:"grey-font"},[t._v("Buongiorno, trovo assolutamente positivo il servizio che\n                                    Offertasuper.it fornisce\n                                    ai\n                                    clienti: risposte\n                                    veloci")])])]),a("slide",{staticClass:"carousel-cell carousel-item-recensioni"},[a("div",{staticClass:"salmone-bg"},[a("p",{staticClass:"orange-font"},[t._v("Ottimo servizio")]),a("p",{staticClass:"grey-font"},[t._v("Buongiorno, trovo assolutamente positivo il servizio che\n                                    Offertasuper.it fornisce\n                                    ai\n                                    clienti: risposte\n                                    veloci")])])]),a("slide",{staticClass:"carousel-cell carousel-item-recensioni"},[a("div",{staticClass:"salmone-bg"},[a("p",{staticClass:"orange-font"},[t._v("Ottimo servizio")]),a("p",{staticClass:"grey-font"},[t._v("Buongiorno, trovo assolutamente positivo il servizio che\n                                    Offertasuper.it fornisce\n                                    ai\n                                    clienti: risposte\n                                    veloci")])])])],1)],1)],1)]),a("div",{staticClass:"full-container loghi-area"},[a("div",{staticClass:"container"},[a("g-image",{staticClass:"desktop-image",attrs:{src:i("5+lN"),alt:"",width:"1440"}}),a("g-image",{staticClass:"mobile-image",attrs:{src:i("LrmJ"),alt:"",width:"1440"}})],1)])])])}),[],!1,null,null,null);"function"==typeof r&&r(n);a.default=n.exports},Pi8j:function(t,a){t.exports={type:"image",mimeType:"image/svg+xml",src:"/offertaSuper/assets/static/hero-landing.6b65613.f7cd7cd413944de6674a4f7294b5ecef.svg",size:{width:300,height:328},sizes:"(max-width: 300px) 100vw, 300px",srcset:["/offertaSuper/assets/static/hero-landing.6b65613.f7cd7cd413944de6674a4f7294b5ecef.svg 300w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 300 328' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-c3d974d92eb341b73f36388900940cf9'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-c3d974d92eb341b73f36388900940cf9)' width='300' height='328' xlink:href='data:image/svg%2bxml%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAABGCAYAAAB8MJLDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAZMUlEQVR42s1aB3hUxdqe3Q1FpEOoAdL7ppFNASlKVaQjFvCiIAgCAgLSCYE0QEBEQJSLoldUEETx/iq9hZpks%2bmFdLKbhNTd1C3n%2b7%2bZc85m48P/C5JEzvPMM6efed95vzJzhpCHbJD4kHNJpNm2ft06S2g9qHf3cQN7df8FdzvQY4cBfWU2PbpIbXp2YfcNsO5GWnWjIEWgSIIrlhlYZmLxFIl5GDmPszn07y2ltX1f6%2bEONn3AZVB/kLs6HfZ0dnAV70FSpCL4Ab26IRFdW40A1jNcEumDQNdyiWQpLbi/DmtbgQTJk3zDV%2b4uo7W3u8veAF8v8PP2rPNxdwG7vtYwoGfXXxH8UPFeCp6ve7QOAVwCFqWEJ0EpdcT9DVhCcN9DOCeh9zzJ5uZoywhwd7JbIHdxBOdB/Q12fXoY7Pv2BFps%2b/QA7P39A3p1lVqS0OJb7ogp5v2CMcNZIwFQCUD60/17dhNk4vW8EZOfwP47MYLR6Ds421gnWXfpDF06PGvq%2bmxHrsuzHQ09O3cy2vXpSUnYyxPQaA4tsmXMWkrynhvPA3vxDZLrOdiKBw%2bS7IFBIdkDAqOKt29tx0hy85bljZ7BAOQNHUvyRr36WN8qOPE%2bq6cN92S9m/ntorPfbpwKG98cZvxi5Uvc8ZCp8NZ4H71Nz26Aqgin99j27i5rFWeYrxjdqAaPIYpcD0Wcdv1m0IWGQa53cHqua8DzZgV4DfvbfuCdmWMZ%2bKkvjpCvmTfR8OaMF2Hdginct2FvQuqx9003D7wF3Tt1rCJEYkPva9%2b2vaRFgR%2beEUbyfYbxPTR1fvt8Z7/QvDEToez4CdDoKvSa2ir9gzNnQD1xBuQ6%2be7Oe356J56E5x7rO8WnlpHUr98jb04fx0xp1rSxBzcvmgquvsH6RW%2bMh09WTuHGjBph8vYPgvX/eqEIYtcNoPepDs%2bTDGxJP6CevZDkjOLtOzfohT3aVeuhMCPViMCNGnUeaApzQVNTYVTn5xgatkZC7pDRXzICJoyR5o167dEJ%2bGkZKcKya8l4poBLe//1x7V9/4Kb%2b2Ybti2ezG2a/xKc2j7HFHv4Xcg5Oreu9rcVjICiE4slA3q2IAEwbxJJjL7JGpX4/cngxMzMBnVZMafWFHLq0nJOXVbB9jWlRcbSWi0UXro8kt6r0RQ8FgECCUzO0fNIB130vlzT3QNQ/N08U%2b2FzVzlxSiu4tRiU%2b1vK6Hg2IIQel/p8XelZw681/L2H5%2bezgiIycnxSExK0KtLHkBJ%2bkVOd2q6SXdigvFB8hmT%2bkGZqby8CIrqdd6MgBKN9DHBk5LTyxkBmmNz9nIpx0EPYKitKgN9fS1UqX40ab6fj73/dtbZSaQNc9CfTm4F8CoViU9IZCYQG6f0pgQUllVCafwxTr9LAvoowpXd%2btRUWFHNCNCoC/yZCRTkyuizKizMVoX6r3q/5MzqPsWnlpaX/7YeavNjTQ1VJZxWdZIrOrHQVHHmA0jfNyn7wuxOHZkiI4aRvONLyYJDh1onF4iNV3khAUZ1ORKgOg4N%2bzqDfpcUyu58xhWW67jKyhLQFKv9hDBpfk6lVP6f76zdSkg1BrT8kx%2bw4%2bz/zGuvPrWstPb3VVB4bJ6h%2bORiKD6xEB78stJUfvp9UG4dmn16WWBnQsZIFr46TjZuCh9q7eUBZOXaTc0POi4%2b/pl72dnP0P3bMXFyVYJKV1BSZiyJP66v/aSboX53G/2D24caCkqrDIXqXK74QZEvvbesoqxdfEJCB1VcHOvZBAsFaMMIqYnEEs4fUwIM24ksZ5c7kzbc2TCp/JcVGlQFYDGV/PwBh6owFvz7VUiOGpnaxEcBkST/HCHLEQhPiL1JlLG3mo8AVULCyTilMjc2Lq4oNS0tMyMjQ5eemWnMSFUZM%2bPOmzJiznIZKUpjxr0sfUpqqgnve4BFE6tUatAEolH6doIpSSjgagvQWKTVEURm%2bb0VrwRiGLUf8suGcdeKD0%2bD1F3jjVi4mNChXNbuMXBv/7SagOChX/kNGbFw8KgZHmYiaJj%2bYa4U0C1U7u5r/sYTb1nZWc9evnr1rXMXLl7ee%2bAQfLz/EOz%2bZH/9vs8Olxw8cizv8DfH0/fsP6TduWcfHPziiObSlatnzl%2b8hHdfDkHyeilVKhlPgNKyxyU1EcTsJPG4Y%2blWyXTYRY78z5JuWd2dg%2bHYh%2bOh5ugMU%2b7%2bKZC3fzJk7nwetF9N5/6zagzYyQOgr%2bdw8PL1M/5n7fNXihLPmvN0ZdQeSc02Iq3ZbkF0WDOpoW03mzH9HL1u2Dh7Nwx09YMBLt5g4ySv64/Hg%2bixvee5hz2XqbzENyaCFSsL4H5YIrDkw0eo5o8JqEPbgqPnYONLo4aYNJ9Pg/IvZ3K6o69wN8LHcXMnD4VezgFcP7cgw6KXHAxp69oC7CZgOOQA6m%2bmni84scDF/O4wVFcUMX9X%2b9HfBJ2ekU7u3L0r/fzIUbNUPRXDXZx9glY5egVGO3kHAdYg1EXDRr/cmd6zY88nVqlpqZK0O7%2bLjZBir0uExtkg6JMNUYQB0G8ngNeN6BsMsIOYdr5uwz1jG4BjgOHcvU%2bncKvfGAl9XYOgo30gTBzhwf2xpAvgfZxxO%2bF04cRYu40YKYG6yHY12o0kAd89m36nJpRIdILqap7EHEIjdrDa3f85qeK50U1yb3tPxbuOXkHgIA/QO3qzehc9//FsG6uImX3F3pBZ9Pq7WCopcCSEw4bpEbwJz3FiMSGwxRMcAHsa/BUK8PD2gjljneHnRd3pMxQ8aMMZeI4eV0dIOHyHoTacgCmMv47HawXgUq3ge/62Cmzd/FiYEcONvVwhReBW2ONSgYR9Tt7BgHUDJQHrefT8%2bOGesurNvK1jA5yxnKfA66MYeD0Fiw2Eah4IBQ91CKh4iwz8BvvB66NdICjAG9ZOtWNKocAoYFQKfYbtC%2b8QiMA6khhw3wR72PHrwretRH/AhTyBEgYNGoHg/Ymde4DY%2bwycnad/F%2bx5tYtPcLW9ZwA4eSm4z%2bf0nmbR65NoQ6lMsbEG3DfRBgugGXBsOFRuRHPYRiB5XXsY6B4IV5Z3glFDvGBIoDdUIWjscVYE4OZiJiLCTKgBdrL6jkUbJM0WGQTw/ByeXMHYHeDmvzJwyHPg7hdcH%2bDvDdWRMkCv/vJvndu114UQrYlvUAMDHm7uORCI4EGE8QooQgV8MrsvOxeo8IH30Bxo7%2bvCmwK3AG9JCie8z8jx3zxoQULzbg5IgtzXjzHr5mr7jNwvINcjaCwcnNNHTyWojSD5ZYvJBWMINigKpSk0kDUyEm04lEDVukb5s1oggzpItF3YNH0gZG1sA4aohxMgqoe%2bSxfC74tEVFPn%2bDHbZ0GROuHq8OZUgZxXgcLfh6nA199n9dopblC3gbfDemyMMZL1rNEs00iBAHq8jZgq17BrXHUjOWZgouTpe3QCUFaimhZ8D1Ss4BVk8R1GrnYTRoud7JqfoAJpsynAxSWYEJsRpGIbP1FasKVtD%2bzl8rrN2OBtzM5pMVraqHYza5SRen/aMOMmvBbKgPHSpXWUAFRQAwOPBZ8FDHMUGFSu5kGXLyPwYC5/zMhoVAWn24LnVxG9oIItAgGyZkuM6DZphDur74dYyYR4HwF7GeP1FHw17/T0uM%2bcH5UphjmW9GAj71WsJO%2bXLSXVtZSkrdjoECRoA%2bGq1iPwLcyTm22cPouKgfLlBNC04MF8CZS%2bhT5j3SAo/nwYYD6A90uhxsIxUrKp88X9y2zwFcmbgbY5/cH0kW4EdvH7qUvayvDjNwFB6rFnqS%2bgYPE6UKeEoKkqErERm6pCSHc2BJ5LjnJLENA7RF/6LutZ2nAm6T/buln61LQiZFCH9%2bWeWQ85ZzZBA6qjOrKNpYOkJmWi/gSJLNXt6GDNfME2IsnNyWw%2bAvBDxNK%2b8Ngae%2bEqAriBH/53DZ/uLsUyEc%2b5VG9paof3J5NOFR%2bQOMNWwV9EWZiEZZSwdH5CNEFQkHTnIqjilVB85AWoCxUIalQOMz1KQm0ICRbTZG2dluTm5zYPAeiEGkd5EY/mZKgt1u4hBKXOTKd%2bLwk28ImOySJS8CrYxszD7BcYARhm69BECo%2b9BnEp2YBDb1AmpUH%2bkemg/ZBGBYklaQaaSFUd8mITBtovg5nTLtQU0Imb5iHBtKUJCRItZlxlc5gaZDQTq%2bZrWqSiYtCO2Va1gScBr/1ITYU2mIKlpoBmAaWLsCzgbV/0Byykor2nRJ9G4OmogFhQJSbDjVt3QRM6CKpDKEkSISJIuRo0j7LTC4w5ACwa3Ffns28W3M9rRlMI40deolmIMbdBOFcb0fR%2bXXhT08FaThtcS0PYWsKVv8%2biBq%2bAMN7T00KBU6lrjk4AZfI9UKmUWOIhPjkdkq58DzTp0gt5BPMD1C8sJ8aGX9%2bGworqtNzTa9iPnILCPBa98pGE9Px88o9sompqhIkRrD9jI7stLJdgkYCGPXNUYI4RCUCTyPpvGMQkIQHxcRAXFwcZmfdgzZoPYelYayjc0gZM%2bHwV9nz9FlTSAV/IS7mur9XXQ6E673v6rQptqTQ3P4f/8VOY988SYKECn1ohH6AhsRLtGc0J0ExYYX4B7b8WyVD/OB9Sc4ogHgnAYTv8ce48OHgFQ1fHIBj/fCDcWdgO6lEF%2bT%2b%2bx8UnJHIJKRkIPt9QW18N99UFbFhUUqqR5eQJJKAS8pvLJzzOtnn6ACLOEJVtlUw28cNdOj/AVWLPV4XwPakTBkRaqgA0i4yPA%2bDId6ex92PhbkwMTJr5Jgx09YUhwQFAJ2imTx4LGdE/QFxqLnWSnFKJRGWmc0UlalOVroKSsIT9XygvliJ4ieAbSFpaWuuTUBkm4f847yK7YB8b%2bho4zCUMCNSAvU4lj74EjPRcFJ9XpK7vAM5eCnj%2bpakwfOxE6O/kDQOd5eCtCIYlH6yBqzduo1/IYCaiUqlAhSTEY42e34QkcJXackrCGvPP2cJ81gnqovvNFx0eZVs42YEkzGerYMjGGYOuhc60haUv2xvnjXfiXh/jCpNHuMOEER7w8nAPmDLSHV4b5QoLXnSEWePcwU4eDAPd/KCvoxxs3QfDO4uXw8nTZ%2bDq9esQi8pISFABBS0QQPe55JRkQJAmTXEhV03/ZmkKPhXbgvvmKbtW8Qs0aiwfY8fkd/7tjtbBvt4VzzgOgz6uQSYsHBY2HdbXja/pLFEv12Do6DAU5g93gNBpttDNzgcUw0bD18e%2bh6ysLAQeB7/%2bz%2b9w%2beo1SEhMZASIhZKgjI/nMrMygaoAiWA%2bAYGfz8nNZpkpEmMlOsdW2XQbeftHux5evkICm8cM4Pq7B3J0YoVK3FHOFxcvfzYj7CL3h2%2bn9wBA8ygPk8H2sI1w/sp1yMzMoODg9t27zCGePX8BYpVKsedZLaqAFrR7JKGQkqCnSsC64H5h/nPijx30B9JWUUCNMFOMDm41HUhBKDEcnNKLzv6CPQIWCbD1DABnT384%2b0YnABriomQsHyg9uxESMgpAGRfDAFLQ5y5chN/PnoPomzfNKrAkgtZJKckUPGCPU/D6ssoHUFJaRNWwufXCYAQ/cSlMYJ6hOYA2ElNXdHz/nm4N/VzpRKuCTrPBAPdA%2bOnVrkCvVUZI6GQo1KBzLN3rgKEwnqXDKkHq5y9eYgRcuHT5oeAFU4CMexkcbwqMBCP1C4JJRGOW6NGi4OnvMYu5us5YNGyKHEdwWszgECj35Ss9wQbNoZvrUG7H%2bH4AOGSu4lNcfqiMJNBhcMaFQ41ZIYK7dOUqMwNa7qBJWKrAsrCokJ8rkMDUwGFpaDDUUUIyW7b3w5okQKNM/HS2SZwsRSVwgLH/s4nW3Jwhjpx2JRvpcU3mACP5tLjoq/GgTMlio0IK9ur1aKYASsAV5gwTmjhDSzUkJiXRHmfgETSnoQXNAktFa2SC4kAoiv0rCOdTYDaIwXhfsZpw9ZvbQv7xD0EX0Z5r7PnGwobF25%2bB5Nt/gDIxlYGltk8JoI6QOUOMDJYOUNynuQGagiktPY0THCJPguAXWjwNrm%2bcS7gpzNwYzf8JwiSmGjr1tbt3bmymRqv5fhYdAnM0Fa6xHBVG8s4w9/QqHBrnYOyPh1t37iABfCSgRFy/cZNDZbBECH2FCYsBwRupWqgCVAmJkJWTRU3BIOQILFdoaQJE%2bx%2bIpaYussmsMWg3SYwmBFZ%2bwHlrTFphQXr8Naja0YWrCeNtv1ENUqilzvCgLyogBQlIYKmxGAppjU6RE2RvooCzc3Jw/JBByajDc1q8Vk3PV1SWQfEDDQVPS31LRwBxHnEG/ZFRY9n76AjZ7E4YKVF/%2b4oTDmbUiZkFkPPTWlP1OryOIdDSHHglWEHKjTNsWEzHByJ4UQW3bt8xpaalUelXYYlE8KMQvBvu26MSnGJi4/wxKryGvV9VXllKCShuaQWIv6yWCv8KDeYp83DC/i0gMLYiFPP5zOSUFFAlJRpKdnqAbg3et13a6BMEZ5hzZjMb/CiVsdjrFy0J4GhmiICrEbDv/7syruj%2bqwAmSsCt1nKA8%2bjgRiSA9T4/kVmj3dHRjl9jpDxeVKSG%2bNRsyLh8RF%2b5DEPlRokYFThxioz5gdQ8NgC6iDmAhRkY0A9QFfyXvu/a9eg2qAAZEiKlizewlmAOIc3OzbISSNiHZXZrETBTdIA1/A9OPfvDu41ECKs/JNjIzli2YJgrzyosheJvpkPFXGLQhspYtKiOkHGUgLyfVjACEjAfoLmARSQwXrl2nfqCu%2bL3o2/cJEmpKWKvN6lbZwi8ms8BypeTF/Vh/JQ55gYmOtVduYZoDEcIWwFZeGyWOSdPvHullzIxY2tS3KUy/c7%2bUDoPlbBFIiqAu//DXHMkuHLtGpM%2bgudQAbQ20Qzx3PkLY%2bm78FiKmaKl9M11sUZNNEXqFswCMQSWLuIJeDCfeJYt4cNa1QaiNy5n018r%2bAlTiRW/xCaeStS8zuAUQPfir8bsN2xiU2ZGNk%2bIWaLm64kQl5xJh8EcypwTFEDBG5EEfVy8ih6ztSN4LMMxg7lNOeU5RF3Mk1CItbjfYjkAgpUIs8IDKXD6Z4j9BA0l2fUHCFuZRtf6VOy1ZesV%2bSV3sZKkmMvmMXvNdskl6kCrwyWGmhACZfvcMLQlmtCrG65H3zAgAQba81cwM6Q%2bAPcP/XH2XBtBAU/HRGjtR%2bRtbhub9q5n0SCSbBDGClaiWuKUSoIZG0mOucKe1RydwI8gtxJfMSEqe49wFaskpnsxv0J2QRGGu3jMCG%2bxARGCvY29PVFsw7kL/xB4iyVyvB/YyP4TJND/hWj/BuMOVg8TJ0p1IWyewLwlJSVh3iBtQiDed5wSp9sqaTBiQqT5%2buVbsZkPvrh549oPKPN1aPdB4vO/nT0nRR8gERWA1/8ZEuoj%2bcbrwsk7Qg6gr%2bUzQbpmyF7MFHUP%2bYlZueVPUSSCTGWrT/Ad7O9SKMlBy7ayfObbE99RwLKr16%2bx4/No%2bxcuXmx94P1cFIQT1vDBz0SKIJLpEJiuEKvnf28Xopx7CNKX/IWKxFTaFsFX01S6KgxD6F4J/Sn7NevxL9a0vXP5F%2bn5i5cF6SNwC8/f6puDl4JOffOzryGy0Wx94EfEhHHfKCRDiWWhEqu/WtIiTKTwRO4gVqiUTAP97b6TGMu3Sbjdb/QHD5/BPvT6S8M8pM4%2bweRa9E3yVGwvDJEzgMMCvVe9Oc4DIl%2b1Mfy8qJuhMLQd7UFmlPc3W0l1YX89m4SkMTKN28kJmjp/N7%2bHYXiQl763%2bzA6k7SKXrP1CJCRp2Wz81QQG/dAfmGVe%2bDWfh7DwNolWN/bNcjg7R8AE0e4f8zICfJ%2bpEZ/Pdea3ffb4i7vzH3RDXo6Bxvw/QYXH7Zc7xRTnVwhtZUHPh0E2Hv6E0e5QiY0bL%2bLbzD9uaF38lIY7L2CKRmz6DUEIfvp3W5/OaVG%2bo3k/USXsf37uAbVOPGzyEa6ehUJSLXzULTjv6t4WghQIPAAcYHlD3SBJRJhwHMcFnD19vei1xDEX05J0ym1z9%2byJh0dnmP3Onv5f%2b7kQxdsBujpu/D99VjshG9JbN0HPwUEyJEAT3HVqeKSsLK0Xlhp%2bjOvjAAJJcrNe/CjkioR6u5YNA6095FUQQXjhGtSB7ni6VCAxX4ybSQSwmGDG7C4iI3lCQp%2b5Pc5ePILNvF4lrBmWSR1mXDe6ikAH8AWVwoN7uRAewulyhoqV%2bz%2bE5BH9ilUUYKyRCX8QRdwCwQcEFQlo%2b%2bkS33/uRwAG2shVwcsVY68XEsQeB/BLCQOHv6P5bTsBGmbleOp8MViEszrAk9AIDOrf8wZMvByhWUjA2gjhV6KtJSpuDL9sd4vF9cu8zEf3/WNk88Q%2bu4iLN1EX0HVMsizlZ1hPztXM/NYtxHM4Q0%2bAjBvPVTsQSFK/I38wryCXSRgDFWXoIK3/vRt4uAR0Lqe31Kiwn4Ma6BXYC3uD2zsIcUTOVgLE%2buK5T71BVirsfT%2bk5m0uvcXGubfFuV6mva%2bC0rUK3Ak2Lh424v39PXz%2b/tmJlf8OSQWo%2b2LKriLPd/Bsi2tGvrs5UGiGvahjWvx3D2UeoGTV%2bA9Ow//fs3VMAsCetOcAL9Vh3W5kBMcMecZHo%2bmgP8Fz1yo3%2b7qws0AAAAASUVORK5CYII=' /%3e%3c/svg%3e"}},U2Tn:function(t,a,i){"use strict";i("rrvo")},ccLb:function(t,a){t.exports={type:"image",mimeType:"image/svg+xml",src:"/offertaSuper/assets/static/circle-check-solid.2edc821.d25106d0534ad378196279fcd7c860b4.svg",size:{width:27,height:27},sizes:"(max-width: 27px) 100vw, 27px",srcset:["/offertaSuper/assets/static/circle-check-solid.2edc821.d25106d0534ad378196279fcd7c860b4.svg 27w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 27 27' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-6afce9f3817d6d4dd85e8ea7e0754816'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-6afce9f3817d6d4dd85e8ea7e0754816)' width='27' height='27' xlink:href='data:image/svg%2bxml%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAQMElEQVR42tVbCXRU1Rn%2bEbQgrbVVXEB6jucguFXbc3qqRwEVpSC2LoDWItp61LpVqbggFcg%2b2VgUCBAhYIIsLiAeEVxYZAmBEBFUFgsJFRASyEKSySSZZObv999338zjzZtkkkwSzTk/j3nz5r77f/ff73%2bJWvDHHKRm/i4adT3duPN5GlMaS1PK4yirMoFWu5MorzqJ9uJaBCoGVVcnUr1c9eci/X1eZSKtLo%2bnBafiaHL%2bOBoz%2bjq6UcaN0vxa9xfhC84GXbb6cRp8bBL93Z1IcWB%2bUVUirQFjO8DgPlwPa4bdGgC3/nxYf79DngcIC/E59ijG%2bfgxGizjgrp1OADNDNqV59IF%2bL4/6GbQfaAneStN5qU0mzPoPU6njd4U2lWXTAc9LjpW46KToNNgtBbUIFf5LPfle3nOm0q7eCptwO/fVePk0hQ1LtNI0C2ga0GXaMBbOueoAnD%2bvvE0kOfR07yMMvkt2oz/7%2bVZdIhn0BEwXwzmy2qTqRLM1YBJYbYeJIz7QH65ymd9v1aeAwiVAKFMfq/GmY3xMmkfZ1Muv005PJ8mcBYNx/svjioAVjEKM0iXNQ9Rd9y/UK/6MEzo5VoXLYao7y2ZQn5MmrF6zNOMqy%2bNuDGVGAxxfQoxmGMAwmCUwbC6yme5L9/Lc/K8P80yjqbSOOJTsXQY9uEjXkjxeP/doKtAvR4bQd1lfi3kp8UAnAvqz5V0P%2b%2bmqbyCVvEcymtIpYMAoBI6bUw83SBhvkGYT7Exn2wwb5In2QZCivE7n2UsIXkWzHtwPcIz6Ut%2bB0AU0DSZD%2bZ1BahHVAAI812PVQ/TAF8qjeZFNBeTk5VQK1inmbMyVQPxVuSy3W8BuV1QEZcawyT1njotQfJ%2bzKMIqjfHn06jloylAZhn91arRZiHusIQ9WY3DeIdNI4XUzZPp91lceT1pwdFvTHNWMX2BECYFvVQqgGS95fFUz3sxG6oYjbn0/Nqnu9Sb5l3VADA5wvA8HAwGgPjth6Il8NwcbVmzuMK6nNHSID9ndWGIRVJKJf5qXnKfDHviAEI82U3MS6g27DqcRC7T%2bCfSxT6rxt6qifkr3GYZDtRyLtkHjIfmRfsUAnm%2bSmkIVa7ywsikgTHlW%2bkvnA3d3MOJcENbYV4lyM48ckLRQwt4t6pAMg8GrWhBQB%2bmSfih81YtFglCe8pdXDmNZxY4N65XI%2bVn04uiNcGCVSgZ0rfrRPRfry9mXZWj%2bC7A2AoezRDgVIuEov5x3ANbIKDYVR8OwBwFugXDen0W0RfL8HVbD6dQKVAVg0ubunHDIBywZgnJNUPKobkroebfC7rAeqvXWSXJgEQV/fg7%2bgaiNNYuLplYPg0UFTBSThRFAPUSQBwONWTWEIFYemIJpfQWwBmpMQJ158dlARHg6iM3v/oQcT38zHAN0qs3jBcXAfqeZvtgwRRYhhFQqASX2ExM7gK8YvNMzgBcCV8/dSGFCpE2FknLqYhaPB%2bMgDIfEVqZf6IV%2boRvBUick0Df/2aSmMvwgN/Rnj5IfJ4n%2bnmPJ2k23bbUpscJKd4w4wZdNwQmLfYLfDD/D7CdqY/SQJnd42y8pfCd94JUYmH4SsQ/ZLY29OJxs0KgIS%2booYS%2bYlE1lmSKUvA5bcFTuoZsQVKlTNoO%2bzBqwjbB8Mz9LIDcC0voFcRW6%2bWRKNOGxFPlCK6FoqwIyi4Nuo0ulEDxGENsJ6zCUCdkYwV4vnl/CY9J6puB%2bAWybNPxlIRYmuPiXhNRwJgeY%2bZIptZoaTB0OVS0BH8v0JEuiZJkxNwlrGED%2bGnIoGqscDf8TJaAH4HWvk/BzdGcTZtLYkNohrQtU4CQEsfV8TDpydQGQxaPpj4DCn3V5XxVIZ79bjnc8xFrGMlB93myRisdTZtAb/36piH%2btx7HV3ODfQMz6N9/vQzgp2OIQfGxY9LbUFVhBbQVl5JObwBoe0mGs%2bfUSLC2yUI07fj%2bwqz3uBOOtMI2j2D3yzUgE8A8E/w3ptmj6Qhe16kYWrQmXAVOsXsDAA8rmDBpB5ULNWleYjp99C/MWEJZ/uBLgNdgTxlCNxaAs%2bhg4qp9GDmGA4ANlP32fhNHk16/x9Qgz3j6fGjk%2bhpWP83EfEdkwf84QdrV4NnAoCVb/QkUQUCmK95HU3jY3QDVutnNrfdE0CM5SzabdYjmvMoAQCkxriMZh55jR6mUzGUCF1Kwep/gHDxpFnD60gAPLZS2GkYYTD2GQKyCWDydi513g9Q9cAc2mkWR5oDwGfWGEWt5tA7ADqGKuIouyqBFuPmJry83KzhtcVlRZDC%2bu31QFl9SbVh3b1Ypf28leKwUteBz5%2bbxspBAsbAoO0SiY1EbYUveU5Vm6fSehjSLMLqrwUAnwL93dC9KtOgRMpUrXaX9uqtKUl1yeEBMAuh8j5t%2bEph8NbxF%2bSyRGxOK98HgcwIPDedZ1GhL0LDrarNxpwq8c4vwfdqcidSPqig1kWHpB4vk6lrAQAePbC9emtKUm0TAFijuRNT8LtZVIDUdTx/SL8HnyGVHEuVajgM2Vz8bidAPN0YodSaJXe80413HwDf2wSAg9CPQ3jgBKhOmA%2bJtR2oNljbr8fAJ7HqB6G3%2bXBPX0Av85CJfYeXlGDsetsE/VZXJ3UGr/w%2bA79ZjxVFQKZL7/a/s3R57ia4wjj8fscPk1WdwmuW3MO4QbaG0/XG4srmyxHYgG8J7qcEJFtVlRJmWjcsmtMnWWUMWAYR3AwjOpcP0FOY4F3spUc4k2ZgrHV49pTUE6RKo8f1B1wdJoPIsxH%2bfAPvUq5uIOhi%2b%2baGFvvzuILu5YU0A2Ntwe9LERT5EQgFYofmDLe576B2oMA3ACgioFald2dly6rRE2H2F9j9mQ6XMp8yj02mv2Ge/bS76nM6ge7DqqZArPMgVW7T0JmbI5h4A6gKzHwLXU6FT/9DmJVXRRrQHyFdqYgNCkDlHl3%2b0uoakUE2bQ6Y94LfCgBwQgDwaKrXe3QRubGA0ZsPBnz0DObZ17Jy3WCd%2b2DSQ3kVAqxptA4TPq6KFG8YlhjMV2I1P%2bHt9Bqeu2PvS3RhGOYv4Vq4u9WUBCnbhFygDLmAX4D0pYXYmKYBMCXFSKY8AKCK8E%2btkNtApeUALKEvdVztNPnzkWANBfIxWOmNWC2PSE5JjFKJb4V5ACGu7rwwBk/0fjCiwVmnYmkn3GSZSE9bQ3W9KesVvsUI1roNAFonAVmI1pgew2R7OYHQsyck4RO6AyvoguXeApXZBVe3hjfSVNlY1cw7gXcpaAhvBnjplHt8MpXLyvOZPr9F1SlHCQDz1SC3sgE6s6qJ1AYYYWURxH36lqdphG5gcGLml%2bxXrisWKhDDa%2bkhxPI34X5vp5VHlHaOMqYZlNGQAhsCgyfGzjTQHlcrAQi1AcWkPEASnQJVgiL2ApbqjFj5zyGmLj5Cd4qrCmPFL4cO33ngFRoqu8s6yOnmIPK/At2A5CweaXD%2bD5PUZowCW7vSVtclbV6g2PACEgckIg7AjZbGAXowLwArlzIaAhhXbRLdCkYucdxoEYPGKq7v6dTqopg/RffAbqRBUjZhlUrL4oPBVlsLs9Y4APR9VRJ90%2bZIUO3LTVd65YWIfw639zKs%2b61aEiJvzDDE/gZhHlFhPoyedJUoW9MSSx9RJJiMSDCFDkCtcgkJgZELJLcuF1AbENMCMf0JgLCR18Bl7afbdFdX1wi6Ui5VOg%2bxl5UX5mHwfF7dJRItAM7IBVKpAKr1kcoGK6OUDcrvJJeH8doG7zAhY6Tq7GpOEs5S1h4GT3RexN6s6bch%2b4w0G1xASD8TIAEuiO5KfFkSaT3Avi%2bnIrPphjSo2H42fcwrYPHr6HYNgpNhvFj5%2bc0UK9ZeDJ7ovKpKpUWHcSsfIfWABJpCu16gR49MoifgyuaBgaORVoScNibNNpmqRAWIG6u6EyDEzrtfSYI90uvOlYjwEORgUrni6sTae1whmx9RAyDgul9H%2bL6cZn7/HxpLE%2b%2bgQbnP0e0ITOIkt1YPpEdubR2AMF70upF2KknIoolcojo2%2bumMrrdKfNZQskR4CHKk4mtIT2rUt%2bCca4KIQpePoZtJ9dl1ob6Y0FPI4PZHAwDlGYx43wdRPo4X7uB3KJs30GS8%2bBVQIpjPghhul/AW8X2jBCnttAcZWhXOpL3g9wlVFQ40QUmHZw7lygaENXSMdF/Atp0VqBapsNXYwDgKY5sLZnOh5/uQyh6HqkhDpGLcEyVD52Q0ay37AsWSh%2bQE9gW6Wg3SIF5K2QCgsDzemFhjatsAqEsOGB0uj6N6GNwSJEIl8PPVuDYAgEDlqD0BMHeGkKJXA/j90P/50tZrt8jXIEl5GQ%2bsgjh%2bb04%2b0r1BtysUAHsGpvf1zBZZn0NnSdQBsO4Nwr5I5Wspv0nPgt8BoXn3PBqGKC4WYe1OM%2bNrzco4ASEBk6yEueL1Ka1PaprqGLHvKp%2bxOzyH8pC%2bvwI1HMR7Q%2bsP54hBVLX25fSRbD62Nu92AsDq3jyhCVfUDJ4VAI8lcYO38fNK%2biBsf4BFEq7mHTTNl0pF0lkhg3l/4h0isGtSmC3kPU13iAR7hEroAfjuOdJ%2b%2blPtEWoM9giJ798D%2bzaXK%2bj%2bkB4he5fYjNtUF1V/%2bO/R0i8AN1bRTJdYpzHcVJeY1%2bwSS8X8c2gxrg/06EoD%2bH1bl5hDn6DE7D3WPk5Xcj69IIVI3SfoN/OEHxEATfYJVkmfoPQOb6dxO/9FV%2bk6RJfmAAiWor3BTlEYlAqnTtEfGwDWTlF4GukUnaI7RXs4doo22SvsR4i8gP6ieoVn0TZpl1U7OakhrfH%2bQKyQ9CPqFV6ieoWH8eImeoWbPSdgHI0ZgmwxGRb1CwRKZSrtfeMMu9BpAJjlsjZ3izdzXuBCXkT3QLxSwPgWaZ81%2b/SbOi8Qjf6CDjsvEIEk/AY2YQjn0YtQibfxkq91B2bg9Iathb5dAPC4LNvx%2bpQK5lF3xomRmiifGLEaxsOv0tVg%2bkHE05mNKVRktqvVJYeeGWovCVDv0nVLifB8EuQsogz/VBq18tE2nhmK4BRmzyvOp6u4mP7KBTQVSH8oJXFprpT%2bQi2KbHZtWE%2bNmSV3p70Hp6Nz4U6NwQ658UyR6vxcgfD2a0R4bhqtT42d26ZTYxEA0IUPqd1a89zgXfwWxck5PmmylD5Dv%2b3coD8taKVNEKzH5hzPDaaFPzeId/0Xev8uRH6ixPa60vTrZ%2b%2bOwrnBVohOL3iI4VCJCUoHpdiQqU6OFkrXmRRapQoL5qr0ydE62UypMdNiQ8TtJ0fduo0l9ORoDm1FsraQ59M4gHNrE200HXZ09my943Ot7uW7R53xXUcJ0MtMALFCzgBDnL/CKheqTpQkKqsxehLqwXyj2wBFPEuJdG6A%2be/krLGcOVZnj5fSLN5Gk6W5UZ9NHmieFg2X1bXrIepmBu4y4nLqu288DT08kZ6EhU6UU%2bBgdi0YLIDoylbcD6Ay2ZCtlo1Kl9qcLdGnytXx%2baoE%2blhOncvp86Ov0SMfPKJ6e3uH6Rhr9enx/wOVtcawgLRcIwAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}},rrvo:function(t,a,i){}}]);