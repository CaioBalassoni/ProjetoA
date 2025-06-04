alert("SEJA BEM VINDO GAME")

let p1 = prompt("digite seu nome")
let p2 = prompt("digite um poder que gostaria de ter")
let p3 = prompt("digite o nome de um vilão")
let p4 = prompt("digite um lugar que gostaria de estar")

let msg = document.getElementById("msg");
msg.innerHTML = `<p>Olá ${p1}, o seu poder é ${p2}. Você vai enfrentar o ${p3} em ${p4}.`
