const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <link rel="stylesheet" href="/src/css/header.css"/>

  <header>
    <a href="" class="logo" style="display:none";>
        <span>Musicalizando</span>
    </a>
    <ul>
        <li><a href="/src/index.html">Home</a></li>
        <li><a href="/src/pages/category/teclas/teclas.html" target="_blank">Teclas</a></li>
        <li><a href="/src/pages/category/sopros/sopros.html" target="_blank">Sopros</a></li>
        <li><a href="/src/pages/category/cordas/cordas.html" target="_blank">Cordas</a></li>
        <li><a href="/src/pages/category/percussao/percussao.html" target="_blank">Percussão</a></li>
        <div class="search"><a href="/src/resultadopesquisa.html" target="_blank">
            <i class="fa fa-search"></i>
            <p>Pesquisar</p>
        </a></div>
    </ul> 
  </header>
  <nav>
    <section class="banner"></section>
  </nav>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'closed' });
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]')
    const headerComponent = document.querySelector('header-component')

    if(fontAwesome) {
      this._root.appendChild(fontAwesome.cloneNode())
    }

    window.addEventListener("scroll", function(){
      const h = headerComponent._root.querySelector('header')
      h.classList.toggle("sticky", window.scrollY > 0);
      h.className === 'sticky' ? 
      headerComponent._root.querySelector('header a').style.removeProperty('display') : 
      headerComponent._root.querySelector('header a').style.setProperty('display', 'none')
    })

    this._root.appendChild(headerTemplate.content);
  }
    
  
}

customElements.define('header-component', Header);