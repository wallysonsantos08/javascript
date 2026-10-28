//como fazer a entrada do usuario em java script, tem duas maneiras

// 1 usando o prompt 

// 2 profissional - usando o html

//modelo 1:

// let nome;
// nome = window.prompt("Qual o seu nome: ");
// document.getElementById("meuH1").textContent = nome;

//modelo 2:

let nome;

document.getElementById("meuTexto").onclick = function(){
    nome = document.getElementById("meuTexto").value;
    document.getElementById("meuH1").textContent = `Ola ${nome}`;
}

document.getElementById("meubutao").onclick = function(){
    document.getElementById("meup").textContent = `estou mudando meu paragrado e meu nome é: ${nome}`
}

