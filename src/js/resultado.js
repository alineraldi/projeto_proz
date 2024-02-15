const data = [
    {
     title: "Cordas",
     description: "Instrumentos de corda"   
    },
    {
     title: "Berimbau",
     description: "Instrumentos de corda"   
    },
    {
     title: "Guitarra",
     description: "Instrumentos de corda"   
    },
    {
     title: "Violão",
     description: "Instrumentos de corda"   
    },
    {
     title: "Violino",
     description: "Instrumentos de corda"   
    },
    {
     title: "Percussão",
     description: "Instrumentos de percussão"   
    },
    {
     title: "Bateria",
     description: "Instrumentos de percussão"   
    },
    {
     title: "Cajon",
     description: "Instrumentos de percussão"   
    },
    {
     title: "Chocalho",
     description: "Instrumentos de percussão"   
    },
    {
     title: "Pandeiro",
     description: "Instrumentos de percussão"   
    },
    {
     title: "Sopros",
     description: "Instrumentos de Sopros"   
    },
    {
     title: "Clarinete",
     description: "Instrumentos de Sopros"   
    },
    {
     title: "Flauta Transversal",
     description: "Instrumentos de Sopros"   
    },
    {
     title: "Saxofone",
     description: "Instrumentos de Sopros"   
    },
    {
     title: "Trompete",
     description: "Instrumentos de Sopros"   
    },
    {
     title: "Teclas",
     description: "Instrumentos de Teclas"   
    },
    {
     title: "Acordeon",
     description: "Instrumentos de Teclas"   
    },
    {
     title: "Clavicordio",
     description: "Instrumentos de Teclas"   
    },
    {
     title: "Cravo",
     description: "Instrumentos de Teclas"   
    },
    {
     title: "Piano",
     description: "Instrumentos de Sopros"   
    },
];

const cardContainer = document.querySelector(".card-container");
const resultInput = document.querySelector("#resultInput");

const displayData = data => {
    cardContainer.innerHTML = "";
    data.forEach(e => {
      cardContainer.innerHTML += `
      <div class="card">
        <h3>${e.title}</h3>
        <p>${e.description}</p>
      </div>
      `  
    })
}

resultInput.addEventListener("keyup", (e) => {
    const result = data.filter(i => i.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(result)
}
)

window.addEventListener("load", displayData.bind(null,data))