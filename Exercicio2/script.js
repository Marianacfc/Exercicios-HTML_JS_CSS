function carregar() {
    let mensagem = document.getElementById("container-msg");
    let imagem = document.getElementById("img");
  
    let data = new Date();
    let mes = data.getMonth();
    //let mes= 12;
    console.log(mensagem)

    if (mes >= 1 && mes <= 3) {
      imagem.src = "./assets/verão.jpg";
      mensagem.innerHTML = `A estação do ano é Verão!`;
      document.body.style.background = "#F9EA51";

    } else if (mes >= 4 && mes <= 6) {
      imagem.src = "./assets/outono.jpg";
      mensagem.innerHTML = `A estação do ano é Outono!`;
      document.body.style.background = "#BB5A29";

    } else if (mes >= 7 && mes <= 9) {
      imagem.src = "./assets/inverno.jpg";
      mensagem.innerHTML = `A estação do ano é Inverno!`;
      document.body.style.background = "#ECEEEF";

    } else {
      imagem.src = "./assets/primavera.jpg";
      mensagem.innerHTML = `A estação do ano é Primavera!`;
      document.body.style.background = "#96B11C";
    }
  }