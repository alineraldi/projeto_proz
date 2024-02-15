const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <link rel="stylesheet" href="/src/css/footer.css"/>

  <footer>
    <section class="logo1">
      <h2>Musicalizando</h2>
      <ul>
        <li>
          <h3>Institucional</h3>
          <a href="/src/index.html">Home</a>
          <a href="/src/pages/category/teclas/teclas.html" target="_blank">Teclas</a>
          <a href="/src/pages/category/sopros/sopros.html">Sopros</a>
          <a href="/src/pages/category/cordas/cordas.html" target="_blank">Cordas</a>
          <a href="/src/pages/category/percussao/percussao.html" target="_blank">Percussão</a>
          <a href="/src/pages/contato.html">Contato</a>
        </li>
        <li>
          <h3>Onde nos Encontrar</h3>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Youtube</a>
          <a href="#">Twitter</a>
        </li>
      </ul>
    </section>

    <section class="bottom">
      &copy; Aline Raldi - Diego Ramon - Débora Rodrigues - Samara Alves
    </section>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'closed' });
  }

  connectedCallback() {

    this._root.appendChild(footerTemplate.content);
  }
    
  
}

customElements.define('footer-component', Footer);