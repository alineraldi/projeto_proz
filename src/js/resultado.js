let data = []

const loadData = fetch('../../file.json')
    .then(response => {
      return response.json();
    }).then(res => data = res)

const cardContainer = document.querySelector(".card-container");
const resultInput = document.querySelector("#resultInput");

const displayData = (result) => {
  cardContainer.innerHTML = "";
  if(result.length){
    result.forEach(e => {
      cardContainer.innerHTML += `
      <div class="card">
        <a href="${e.link}">
          <h3>${e.title}</h3>
          <p>${e.description}</p>
        </a>
      </div>
      `  
    })
  }else {
    cardContainer.innerHTML = `<p>Sem resultados</p>`;
  }
  
}

resultInput.addEventListener("keyup", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  let result = []
  if (searchTerm) {
    result = data.filter(i => 
        i.title.toLowerCase().includes(searchTerm) || 
        i.description.toLowerCase().includes(searchTerm)
    );
  }
  displayData(result);
});
