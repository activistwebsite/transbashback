class SiteHeader extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
          <!-- header.html -->
          <div class="site-header">
            <div class="header-top">
              <img src="./favicon.ico" alt="Logo" class="header-logo" />
              <span class="header-title">BASH BACK</span>
            </div>


            <nav class="main-nav">
              <a href="index.html">home</a>
              <a href="manifesto.html">manifesto</a>
              <a href="faq.html">FAQ</a>
              <a href="contact.html">contact</a>
              <!-- <a href="mailto:bashbackinfo@proton.me">contact</a> -->
              <a href="https://drive.proton.me/urls/RGPZYJWQGM#5oVb015X3nqd">media</a>
              <a href="https://www.instagram.com/transbashback/" target="_blank" class="icon-link" aria-label="Instagram">
                <img src="./instagram.svg" alt="Instagram logo" class="icon" />
              </a>
              <a href="https://bsky.app/profile/bashback.bsky.social" target="_blank" class="icon-link" aria-label="Bluesky">
                <img src="./bluesky.svg" alt="Bluesky logo" class="icon" />
              </a>
              <a href="https://x.com/transbashback" target="_blank" class="icon-link" aria-label="Twitter">
                <img src="./twitter.svg" alt="Twitter logo" class="icon" />
              </a>
            </nav>
          </div>`
    }
}

customElements.define("site-header", SiteHeader)