const data = [
    {
     title: "Você Sabia? Cordas - 1",
     description: "O instrumento de cordas mais antigo conhecido é a lira? Ela remonta a cerca de 3.500 anos a.C! Era popular na antiga Mesopotâmia e Egito, sendo tocada em diversos eventos."   
    },
    {
     title: "Você Sabia? Cordas - 2",
     description: "Já ouviu falar no hurdy-gurdy? É um curioso instrumento de origem medieval, possui cordas que são friccionadas por uma roda giratória, enquanto as teclas e alavancas ajustam a tensão das cordas para produzir diferentes notas."   
    },
    {
     title: "Você Sabia? Guitarra",
     description: "Sabia que durante a Segunda Guerra Mundial, houve uma escassez de materiais tradicionais para a fabricação de guitarras devido às restrições impostas pela guerra? Isso levou à inovação na produção de guitarras, com algumas empresas utilizando materiais alternativos, como bakelite, um tipo de plástico, para os corpos das guitarras. Essas guitarras 'plásticas' acabaram se tornando peças colecionáveis e representam um capítulo único na história da fabricação de guitarras, demonstrando a adaptabilidade da indústria musical em tempos desafiadores."   
    },
    {
     title: "Você Sabia? Violão",
     description: "Sabia que o violão moderno evoluiu a partir da guitarra clássica espanhola, mas há uma teoria intrigante que sugere uma influência africana em sua concepção? Alguns estudiosos argumentam que a forma do violão e certas técnicas de tocar podem ter sido inspiradas por instrumentos de corda africanos. Essa conexão transcontinental destaca a riqueza e a complexidade das influências culturais que contribuíram para o desenvolvimento do violão, tornando-o verdadeiramente um instrumento global."   
    },
    {
     title: "Você Sabia? Violino",
     description: "Sabia que toda a família do violino compartilha uma peça, que se chama Ponte? A ponte é uma pequena peça de madeira colocada entre as cordas e a caixa de ressonância do instrumento. Ela transmite as vibrações das cordas para a caixa de ressonância, amplificando o som e contribuindo para as características tonais distintas de cada instrumento."   
    },
    {
     title: "Você Sabia? Berimbau",
     description: "Sabia que o berimbau transcende sua função musical, adquirindo significados espirituais e culturais profundos em diferentes contextos afro-brasileiros? Em algumas comunidades de candomblé, por exemplo, o berimbau é associado a rituais religiosos e pode ser utilizado para invocar divindades e conduzir cerimônias sagradas."   
    },
    {
     title: "Você Sabia? Percussão",
     description: "Em diversas sociedades, os tambores e outros instrumentos de percussão desempenham papéis importantes em rituais religiosos, celebrações culturais e eventos sociais. Além disso, alguns instrumentos de percussão têm funções específicas e simbólicas em determinados contextos. Por exemplo, os tambores africanos, como o djembe, muitas vezes são associados a rituais tribais e têm significados culturais profundos. Em algumas culturas, a percussão é integrada com dança e movimento corporal,enquanto em outras, é usada para criar ritmos complexos e intrincados."   
    },
    {
     title: "Você Sabia? Bateria",
     description: "Origem do Termo 'Bateria': O termo 'bateria' para se referir a um conjunto de tambores e pratos foi popularizado no início do século XX. Antes disso, o termo era usado mais comumente em contextos militares para descrever um conjunto de canhões."   
    },
    {
     title: "Você Sabia? Cajon",
     description: "Muitos cajóns são feitos artesanalmente. Os construtores muitas vezes selecionam cuidadosamente a madeira e ajustam o design para obter características sonoras específicas, resultando em cajóns únicos e personalizados."   
    },
    {
     title: "Você Sabia? Chocalho",
     description: "Em algumas culturas, o chocalho era considerado mais do que apenas um instrumento musical. Acredita-se que, além de sua função musical, o som produzido pelo chocalho tinha propriedades místicas e poderes protetores"   
    },
    {
     title: "Você Sabia? Pandeiro",
     description: "Uma curiosidade interessante sobre o pandeiro é sua versatilidade na produção de sons. Os músicos podem utilizar diferentes técnicas para criar uma ampla variedade de timbres e ritmos."   
    },
    {
     title: "Você Sabia? Sopros",
     description: "Os músicos que tocam instrumentos de sopro também desenvolvem o foco. Isso ocorre porque uma nota errada pode se destacar muito — diferente de uma guitarrista, por exemplo, que se errar uma nota ou um Power Chords pode passar despercebido em razão das distorções e dos efeitos e aplicados. Nesse sentido, aprender a lidar com a pressão psicológica é mais uma das vantagens da prática dos instrumentos de sopro. Além disso, como já citamos, o controle da respiração é primordial ao tocar. Por isso, o músico aprende a relaxar e a fazer inspirações profundas mesmo quando está nervoso. O desenvolvimento dessa habilidade auxilia na vida pessoal e profissional, pois proporciona mais confiança, sendo muito útil, por exemplo, durante momentos de pressão no trabalho."   
    },
    {
     title: "Você Sabia? Clarinete",
     description: "Uma curiosidade inusitada sobre o clarinete é a existência do 'clarinete de vidro'. Este instrumento peculiar foi desenvolvido no século XVIII e era feito inteiramente de vidro, inclusive as chaves. Embora não tenha se tornado amplamente popular, o clarinete de vidro demonstra a criatividade e experimentação dos construtores de instrumentos na busca por novas sonoridades. O desafio era equilibrar a fragilidade do vidro com a necessidade de produzir um som musicalmente agradável, tornando-o um exemplo intrigante da inventividade na história da fabricação de instrumentos musicais."   
    },
    {
     title: "Você Sabia? Flauta Transversal",
     description: "Uma curiosidade adicional sobre a flauta transversal é que ela é um instrumento que permite a execução de efeitos sonoros especiais, conhecidos como 'efeitos estendidos'. Além de tocar as notas tradicionais, os flautistas podem criar sons incomuns, como trinados, harmônicos e até mesmo técnicas de respiração circular, ampliando o espectro sonoro do instrumento. Esses efeitos adicionam uma dimensão única à música contemporânea e experimental, demonstrando a versatilidade e a inovação possíveis com a flauta transversal."   
    },
    {
     title: "Você Sabia? Saxofone",
     description: "Certamente! Uma curiosidade peculiar sobre o saxofone é que existe uma versão gigante do instrumento chamada 'saxofone submarino'. Desenvolvido na década de 1990 pelo artista alemão-mexicano Pedro Reyes, este saxofone é submerso em água e tocado por meio de tubos conectados a snorkels usados pelos músicos. A peculiaridade deste instrumento reside na transformação da acústica e na experiência única de tocar música subaquática. O saxofone submarino representa uma fusão inusitada entre a arte, a música e a exploração de ambientes aquáticos."   
    },
    {
     title: "Você Sabia? Trompete",
     description: "Certamente! Uma curiosidade inusitada sobre o trompete é seu papel na comunicação militar em algumas culturas antigas. Antes do advento das comunicações modernas, o trompete era usado como um meio eficaz de transmitir comandos durante batalhas. Os militares empregavam sinais específicos de trompete para indicar manobras, cargas e até mesmo a retirada das tropas. Esse uso estratégico do trompete como um instrumento de comunicação em campos de batalha destaca sua versatilidade para além da música, demonstrando sua importância em diversas situações ao longo da história."   
    },
    {
     title: "Você Sabia? Teclas",
     description: "Os primeiros teclados surgiram no século III a. C., com os órgãos hidráulicos, na era greco-romana, mas só ganharam importância na civilização ocidental. Os instrumentos antigos tinham apenas as teclas que hoje se conhece como 'brancas' e não eram tocadas com os dedos, mas golpeadas com os pulsos ou punhos. As teclas 'pretas' surgiram gradativamente a partir do século XII, e somente no início do século XV o teclado se estabeleceu da maneira como conhecemos atualmente."   
    },
    {
     title: "Você Sabia? Acordeon",
     description: "Os acordeons possuem inúmeras variações de tamanhos, quantidade de baixos, teclas ou botões e afinações, sendo assim, tome muito cuidado quando for adquirir esse instrumento, faça boas pesquisas e consulte alguém de confiança para indicar-lhe a melhor opção."   
    },
    {
     title: "Você Sabia? Clavicordio",
     description: "O clavicórdio também ganhou atenção noutros tipos de música, sob a forma do clavinete, que é essencialmente um clavicórdio eléctrico que usa um pickup magnético para produzir um sinal para amplificação. Stevie Wonder usa um clavinete em muitas das suas canções, como 'Superstition' e 'Higher Ground'."   
    },
    {
     title: "Você Sabia? Clavicordio 2",
     description: "A canção 'For No One' (1966) dos Beatles inclui Paul McCartney tocando o clavicórdio. Rick Wakeman toca o clavicórdio na faixa 'The Battle' do álbum Journey to the Centre of the Earth."   
    },
    {
     title: "Você Sabia? Cravo",
     description: "O cravo continua presente no cenário musical contemporâneo carioca e brasileiro. Espetáculos teatrais, montagens de óperas e concertos de música erudita e de música brasileira são alguns exemplos da versatilidade do uso deste instrumento."   
    },
    {
     title: "Você Sabia? O Piano e o Cinema",
     description: "Esse instrumento tem um lugar especial no cinema. Durante a era do cinema mudo, pianistas tocavam ao vivo durante a exibição dos filmes para acompanhar as cenas e criar atmosfera. Sendo assim, esse estilo de apresentação ao vivo é conhecido como “piano de cinema” e ainda existe em alguns cinemas hoje em dia."   
    },
    {
     title: "Você Sabia? O Piano e a Matemática",
     description: "Você sabia que tocar este instrumento pode ajudar a desenvolver habilidades matemáticas? Estudos mostram que o aprendizado de música pode melhorar a habilidade de uma pessoa em lidar com números e resolver problemas matemáticos. Isso ocorre porque a música envolve padrões rítmicos e melódicos que estimulam o cérebro e melhoram a habilidade matemática."   
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
  const searchTerm = e.target.value.toLowerCase();
  const result = data.filter(i => 
      i.title.toLowerCase().includes(searchTerm) || 
      i.description.toLowerCase().includes(searchTerm)
  );
  displayData(result);
});

window.addEventListener("load", displayData.bind(null,data))