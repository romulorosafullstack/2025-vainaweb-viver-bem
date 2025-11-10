import './styles/main.scss';

document.querySelector('#app').innerHTML = `
  <header class="header-wrapper">
    <div class="header-content">
      <div class="header-bar-wrapper">
        <div class="header-bar-content">
          <div class="header-logo-wrapper">
            Logo
          </div>
          <nav class="header-nav-wrapper">
            <ul class="header-nav-list">
              <li class="header-nav-item">
                <a href="#" class="header-nav-link">
                  <span>Prevenção Masculina</span>
                </a>
              </li>
              <li class="header-nav-item">
                <a href="#" class="header-nav-link">
                  <span>Prevenção Feminina</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="header-texts">
        <h2 class="header-title">
          Header title
        </h2>
        <p class="header-text">
          Header text
        </p>
      </div>
      <div class="header-buttons">
        <button class="header-button button-1">
          Button 1
        </button>
        <button class="header-button button-1">
          Button 2
        </button>
      </div>
    </div>
  </header>
  <main class="main-wrapper">
    <div class="main-content">
      <section class="section-wrapper section-1">
        <div class="section-content">
          Section 1
        </div>
      </section>
      <section class="section-wrapper section-2">
        <div class="section-content">
          Section 2
        </div>
      </section>
      <section class="section-wrapper section-3">
        <div class="section-content">
          Section 3
        </div>
      </section>
    </div>
  </main>
  <Footer class="footer-wrapper">
    <div class="footer-content">
      <section class="footer-infos">
        Footer Infos
      </section>
      <section class="footer-copy">
        Footer Copy
      </section>
    </div>
  </Footer>
`

setupCounter(document.querySelector('#counter'))
