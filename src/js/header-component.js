const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
      header {
        display: flex;
        align-items: baseline;
        justify-content: center;
        background: url(/src/assets/bg.jpeg);
        background-size: cover;
        background-position: center;
        padding: 50px; /* Ajuste conforme necessário */
    }

    nav ul {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav ul li {
        position: relative;
        list-style: none;
    }

    nav a {
        position: relative;
        margin: 0 15px;
        text-decoration: none;
        color: #fff;
        letter-spacing: 2px;
        font-weight: 500px;
        transition: 0.6s;
    }

    .search a {
        margin-top: 20px; /* Ajuste conforme necessário */
        display: flex;
        align-items: baseline;
        text-decoration: none;
    }

    .search a > i {
        margin-top: 20px; /* Ajuste conforme necessário */
        margin-right: 10px;
        color: white;
    }

    .search p {
        color: white; /* Ajuste a cor do texto conforme necessário */
    }
  </style>
  <header>
  <nav>
      <ul>
          <li><a href="/src/index.html">Home</a></li>
          <li><a href="/src/pages/category/teclas/teclas.html" target="_blank">Teclas</a></li>
          <li><a href="/src/pages/category/sopros/sopros.html" target="_blank">Sopros</a></li>
          <li><a href="/src/pages/category/cordas/cordas.html" target="_blank">Cordas</a></li>
          <li><a href="/src/pages/category/percussao/percussao.html" target="_blank">Percussão</a></li>
      </ul> 
  </nav>
  <div class="search">
      <a href="/src/resultadopesquisa.html" target="_blank">
          <i class="fa fa-search"></i>
          <p>Pesquisar</p>
      </a>
  </div>
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]')
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if(fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode())
    }

    shadowRoot.appendChild(headerTemplate.content);
  }
    
  
}

customElements.define('header-component', Header);