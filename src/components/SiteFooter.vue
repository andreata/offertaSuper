<template>
  <footer>
    <div class="full-container ">
      <div class="container">
        <div class="grid-footer">
          <div>
            <g-image immediate="false" src="~/assets/images/icon/logo-footer.png" alt="" width="150" />
            <p>SALES PERFORMANCE SRLP.IVA IT03539390835</p>
            <p><a href="#">Privacy Policy </a> | <a href="#">Cookie Policy </a></p>
          </div>

          <div>
            <p>Offerte</p>
            <p><g-link to="/fibra-la-migliore-offerta-per-il-mercato-italiano/">INTERNET CASA </g-link></p>
            <p><g-link to="/offerte-luce-e-gas/">LUCE E GAS </g-link></p>
            <p><g-link to="/selezionatore/">SELEZIONATORE </g-link></p>
          </div>

          <div>
            <p>Azienda</p>
            <p><g-link to="/chi-siamo/">Chi siamo </g-link></p>
            <p><g-link to="/contatti/">Contatti </g-link></p>
            <p><g-link to="/">Termini e Condizioni </g-link></p>
          </div>

          <div>
            <p>Seguici su</p>
            <p><a target="_blank" href="https://facebook.com/offertasuper">Facebook</a></p>
            <p><a href="#">Instagram</a></p>
            <p><a href="#">Linkedin </a></p>
          </div>

          <div>
            <p>Le migliori offerte</p>
            <p><g-link to="/le-migliori-offerte-per-la-fibra-ottica-tim/">Offerte TIM </g-link></p>
            <p><a href="#">Offerte Vodafone </a></p>
            <p><a href="#">Offerte WINDTRE </a></p>
            <p><a href="#">Offerte Fastweb </a></p>
          </div>
        </div>

        <div class="footer-blox">

          <p class="grey-font">Offertasuper.it © Copyright 2022. Tutti i diritti riservati. </p>
        </div>

      </div>
    </div>

  </footer>
</template>


<style lang="scss" scoped>
.grid-footer {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
  grid-column-gap: 40px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>