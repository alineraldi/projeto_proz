let data = []

const carregarDados = fetch('../../file.json')
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
        <h3>${e.title}</h3>
        <p>${e.description}</p>
      </div>
      `  
    })
  }else {
    data.forEach(e => {
      cardContainer.innerHTML += `
      <div class="card">
        <h3>${e.title}</h3>
        <p>${e.description}</p>
      </div>
      `  
    })
  }
}

resultInput.addEventListener("keyup", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const result = data.filter(i => 
      i.title.toLowerCase().includes(searchTerm) || 
      i.description.toLowerCase().includes(searchTerm)
  );
  displayData(result);
});

window.addEventListener("load", displayData.bind(null, data))