const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
  @font-face {
    font-family: 'riesling';
    src: url(../fonts/riesling.ttf) format('truetype');
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }


  .navegacao {
    height: 8vh;
    background-color: #0D314E;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
  }

  .navegacao .menu {
    display: flex;
    gap: 15%;
  }

  .navegacao .menu li a {
    padding-bottom: 30px;
    text-transform: uppercase;
    color: #e8e8e8;
    font-weight: bolder;
    font-size: 15px;
    font-family: "Garamond";
  }

  .navegacao .menu li a:hover{
    border-bottom: 2px solid #fff;
  }

  main {
    display: flex;
    min-height: 92vh;
    width: 100vh;
  }

  main #img {
    position: absolute;
    z-index: 1;
    height: 92vh;
    width: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0px;
    margin: 0px;
    object-fit: cover;
  }

  main #nome_pagina {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    margin: 0px;
    
    font-weight: bold;
    font-family: 'riesling';
    font-size: 70px;
    color: #D9E2F7;
  }

  main #nome_pagina h1 {
    padding: 0px;
    margin: 20px 0px;
  }

  </style>
  


  <header>
    <nav class="navegacao">

      <ul class="menu">
          <li><a href="/src/index.html">Home</a></li>
          <li><a href="/src/pages/category/teclas/teclas.html" target="_blank">Teclas</a></li>
          <li><a href="/src/pages/category/sopros/sopros.html" target="_blank">Sopros</a></li>
          <li><a href="/src/pages/category/cordas/cordas.html" target="_blank">Cordas</a></li>
          <li><a href="/src/pages/category/percussao/percussao.html" target="_blank">Percussão</a></li>
      </ul>
   
      <div class="pesquisar">
            <a href="/src/resultadopesquisa.html" target="_blank">
                <i class="fa fa-search"></i>
                <p>Pesquisar</p>
            </a>
      </div> 
    </nav>
   
    <main>
      <img id="img" src="../../src/assets/fotoHeader.jpg" alt="imagem de uma orquestra"/>

      <div id="nome_pagina">
        <h1> Musicalizando</h1>
      </div>
    </main> 
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