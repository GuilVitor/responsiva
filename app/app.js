

function carregar(){
    var logo = document.getElementById('logo');
    var data = new Date();
    var hora = data.getHours();


    logo.innerHTML = (`RF NOTICIAS | ${hora}h`)

}



const url = "https://api.api-futebol.com.br/v1/ao-vivo"

// let headers = new Headers();

// headers.append('Athorization', 'Bearer test_7d3235ddea58b531a4a414a266cc16')
// console.log(headers);

const options = {
  headers: {'Authorization' : 'Bearer test_7d3235ddea58b531a4a414a266cc16'},
}

function buscarPartidas() {
  fetch(url, options)
  .then(resposta => {
    resposta.json()
    .then(obj => {
    console.log(obj)
    mostrarPartidas(obj);
  })
})
.catch()
}


function mostrarPartidas(partidas) {
  console.log(partidas, "Isso é partidas")

  for (i=0; i<partidas.length; i++){
    var placar = document.createElement('h3');
    placar.innerText = partidas[i].placar;
    var escudoMandante = document.createElement('img');
    escudoMandante.setAttribute('src', partidas[i].time_mandante.escudo)
    var escudovisitante = document.createElement('img');
    escudovisitante.setAttribute('src',partidas[i].time_visitante.escudo)
    var horas = document.createElement('h3');
    horas.innerText = partidas[i].hora_realizacao
    document.getElementById('partidasAoVivo').append(placar, escudoMandante,escudovisitante,horas);
  }
}



buscarPartidas();

