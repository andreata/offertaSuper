<template>
    <Layout>
        <div>
            <div class="full-container bg-home">
                <div class="container">
                    <h1 class="title-home desk">Contatti</h1>
                    <p class="p-home desk">Hai bisogno di supporto nella scelta della tariffa perfetta per te? Non trovi informazioni di cui hai bisogno? Vuoi
                    semplicemente parlare con la nostra assistenza clienti? Mettiti in contatto con noi!</p>

                    <div class="mobl">
                        <div class="home-layout-mobile">
                            <div>
                                <h1 class="title-home-mobile mobl">Scegli i nostri servizi e risparmia sui costi</h1>
                                <p class="p-home-mobile mobl">Ti bastano solo 5 minuti per trovare l’offerta giusta per
                                    le tue esigenze con il selezionatore di OffertaSuper.it</p>
                            </div>
                            <g-image class="img-hero" src="~/assets/images/icon/hero-mobile.svg" alt="" width="300" />

                        </div>
                    </div>



                    <div class="container-box desk">
                        <div class="item-box">
                            <p class="promo">Chiamaci</p>
                            <!-- <g-image class="img-promo" src="~/assets/images/icon/internet-casa.svg" alt="" width="66" /> -->
                            <h2 class="h2-promo">NUMERO VERDE</h2>
                            <h3 class="h3-promo">Chiamaci al numero verde gratuito</h3>
                            <p class="item-par">Se vuoi metterti in contatto con noi o uno dei nostri consulenti perché hai bisogno di supporto?
                            
                            Parla direttamente con la nostra assistenza ai clienti che ti saprà aiutare in base al tuo bisogno o ti indirizzerà ad
                            uno dei nostri consulenti. Il servizio clienti di offertasuper.it è gratuito e senza impegno.</p>

                            <g-link to="tel:00000000" class="button-pieno">Chiamaci</g-link>
                    
                        </div>
                    
                        <div class="item-box">
                            <p class="promo">Scrivici</p>
                            <!-- <g-image class="img-promo" src="~/assets/images/icon/luce.svg" alt="" width="66" /> -->
                            <h2 class="h2-promo">Email</h2>
                            <h3 class="h3-promo">Inviaci un messaggio</h3>
                            <p class="item-par">Se invece preferisci scrivere una email, puoi contattarci all’indirizzo: <g-link to="mailto:info@offertasuper.it">info@offertasuper.it</g-link>
                            
                            Uno dei nostri consulenti risolverà tutti i tuoi dubbi nel più breve tempo possibile. Inoltre, scrivendoci una email
                            puoi ricevere informazioni sui nostri servizi, segnare un errore o inoltrare un reclamo.</p>

                            <g-link to="mailto:info@offertasuper.it" class="button-pieno">Invia un messaggio</g-link>
                    
                        </div>
                    
                    
                    
                        <div class="item-box">
                            <p class="promo">Chatta</p>
                           <!--  <g-image class="img-promo" src="~/assets/images/icon/risparmio.svg" alt="" width="66" height="62" /> -->
                            <h2 class="h2-promo">Messaggio</h2>
                            <h3 class="h3-promo">Scrivici qui in chat</h3>
                            <p class="item-par"></p>
                    
                            <g-link to="/selezionatore" class="button-pieno">Clicca qui</g-link>
                    
                        </div>
                    </div>
                    
                    
                    <div class="container-box mobl">
                        <g-link to="/fibra-la-migliore-offerta-per-il-mercato-italiano/" class="link-no-deco">
                            <div class="item-box">
                                <p class="promo">Promo del mese</p>
                                <div class="flex-homeland">
                                    <g-image class="img-promo" src="~/assets/images/icon/internet-casa.svg" alt="" width="66" height="62" />
                                    <div>
                                        <h2 class="h2-promo">Internet Casa</h2>
                                        <h3 class="h3-promo">risparmi 200€ l’anno</h3>
                                    </div>
                                </div>
                    
                            </div>
                        </g-link>
                    
                        <g-link to="/offerte-luce-e-gas/" class="link-no-deco">
                            <div class="item-box">
                                <p class="promo">Risparmia ora</p>
                                <div class="flex-homeland">
                                    <g-image class="img-promo" src="~/assets/images/icon/luce.svg" alt="" width="66" height="62" />
                                    <div>
                                        <h2 class="h2-promo">Luce e gas</h2>
                                        <h3 class="h3-promo">prezzi bloccati</h3>
                                    </div>
                                </div>
                            </div>
                        </g-link>
                    
                        <g-link to="/selezionatore/" class="link-no-deco">
                            <div class="item-box">
                                <p class="promo">Consulenza</p>
                                <div class="flex-homeland">
                                    <g-image class="img-promo" src="~/assets/images/icon/offerte.svg" alt="" width="66" height="62" />
                                    <div>
                                        <h2 class="h2-promo">Il selezionatore</h2>
                                        <h3 class="h3-promo">Ti ascoltiamo per capire le tue esigenze</h3>
                                    </div>
                                </div>
                            </div>
                        </g-link>
                    
                    </div>

                    

            <!-- Loghi -->
            <div class="full-container loghi-area">
                <div class="container">
                    <g-image class="desktop-image" src="~/assets/images/icon/loghi.jpg" alt="" width="1440" />
                    <g-image class="mobile-image" src="~/assets/images/icon/loghi-mobile.jpg" alt="" width="1440" />
                </div>
            </div>
</div>
</div>
        </div>
    </Layout>
</template>

<page-query>

</page-query>

<script>
import { Pager } from 'gridsome'


export default {
    components: {
        Pager,
    },


    metaInfo() {
        return {
            title: 'Offerta Super | Contatti',
            meta: [
                {
                    description: 'Contatti - Offerta Super è un selezionatore online, in grado di selezionare le migliori offerte per te',
                    key: 'Offerta Super',
                },
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: 'Offerta Super',
                },
                {
                    key: 'twitter:title',
                    name: 'twitter:title',
                    content: 'Offerta Super',
                },
                {
                    key: 'og:description',
                    name: 'og:description',
                    content: 'Offerta Super',
                },
                {
                    key: 'twitter:description',
                    name: 'twitter:description',
                    content: 'Offerta Super',
                },
                {
                    key: 'og:image',
                    name: 'og:image',
                    content: '',
                },
            ],
        }
    }
}

</script>

<style lang="scss" scoped>
.title-home {
    text-align: center;
}
.container-box {
    margin-top: 40px;
    display: grid;

    grid-column-gap: 20px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr !important;
    }

    @media screen and (min-width: 768px) {
        margin-top: 140px;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .item-box {
        padding: 3px;
        .item-par {
            color: var(--grey-body-color);
            padding: 0 15px;
        }
        .h3-promo {
            min-height: 50px;
        }
    }
}
</style>