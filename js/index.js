let nome
let win
let loser 
var calcular

nome=prompt("Informe o nome do heroi: ")
console.log(nome)


calculoFinal()


function calculoFinal(){
    win=prompt("Heroi/Heroína com o nome de "+nome+" , quantas vitórias você possui")
    console.log(win)

    loser=prompt("Heroi/Heroína com o nome de "+nome+" , quantas derrotas você possui")
    console.log(loser)

    calcular=win-loser

    alert(calcular)
}



