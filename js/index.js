let sexo
let nome
let v
let d
let agrupamentoDeDados
let pushFuncition1
let pushFuncition2
let pushFuncition3

do{
    //apartir de qual genêro o usuário se considera começa o código
    sexo=prompt("Informe seu sexo \nM-masculino\nF-feminino\n(INFORME EM LETRA MAIÚSCULA)")

    switch(sexo){
        //caso masculino
        case "M":
            nome =prompt("Informe seu nome de herói:")
            
            //para guardar o valor que vai ser usado na variável a seguir
            pushFuncition1=getName(nome," ")
            
            function getName(nome,splitChar="-"){
                let getFirstName=nome.split(splitChar)[0]
                console.log(getFirstName)
                return getFirstName
            }
            
          
            //pegar a qauntidade de vitórias 
            v =prompt("Herói de nome "+nome+" . informe suas vitórias durante essa longa jornada")
            //pegar a quantidade de derrotas
            d = prompt(nome+" , informe suas derrotas durante essa longa jornada")
            //juntas ambos em um veotor, para que eu possa trabalhar com dados "iguais" sem usar um monte variáveis
            agrupamentoDeDados=[v,d]
            
            //para guardar o valor das variáveis usadas anteriormente na função a seguir
            pushFuncition2=getCal(pushFuncition1,agrupamentoDeDados)

            function getCal(nome,vitorias_derrota){
                
                let cal=vitorias_derrota[0]-vitorias_derrota[1]
                return cal
            }
            
             //para guardar o valor das variáveis usadas anteriormente na função a seguir
            pushFuncition3=getRank(pushFuncition1,pushFuncition2,agrupamentoDeDados)
            
            function getRank(nome,rank,vitorias_derrota){
                if(rank<=10){
                    console.log("Herói de nome "+nome+" , a parti dos seus dados de carreira com "+vitorias_derrota[0]+"  vitórias e "+vitorias_derrota[1]+" derrtotas você está no FERRO")
                }
            
                else if(rank<=20){
                    console.log("Herói de nome "+nome+" , a parti dos seus dados de carreira com "+vitorias_derrota[0]+" vitórias e "+vitorias_derrota[1]+"derrtotas você está no BRONZE")
                }
            
                else if(rank<=50){
                    console.log("Herói de nome "+nome+" , a parti dos seus dados de carreira com "+vitorias_derrota[0]+" vitórias e "+vitorias_derrota[1]+"derrtotas você está no PRATA")
                }
            
                else if(rank<=80){
                    console.log("Herói de nome "+nome+" , a parti dos seus dados de carreira com "+vitorias_derrota[0]+" vitórias e "+vitorias_derrota[1]+"derrtotas você está no OURO")
                }
            
                else if(rank<=90){
                    console.log("Herói de nome "+nome+" , a parti dos seus dados de carreira com "+vitorias_derrota[0]+" vitórias e "+vitorias_derrota[1]+"derrtotas você está no DIAMANTE")
                }
            
                else if(rank<=100){
                    console.log("Herói de nome "+nome+" , a parti dos seus dados de carreira com "+vitorias_derrota[0]+" vitórias e "+vitorias_derrota[1]+"derrtotas você está no LENDÁRIO")
                }
            
                else {
                    console.log("Herói de nome "+nome+" , a parti dos seus dados de carreira com "+vitorias_derrota[0]+" vitórias e "+vitorias_derrota[1]+"derrtotas você está no IMORTAL")
                }
            
        
            }
            break

            //caso feminino
            case "F":
            
            nome =prompt("Informe seu nome de heroína:")

            //para guardar o valor que vai ser usado na variável a seguir
            pushFuncition1=getName(nome," ")
            
            function getName(nome,splitChar="-"){
                let getFirstName=nome.split(splitChar)[0]
                console.log(getFirstName)
                return getFirstName
            }
            
            //pegar a quantidade de vitórias 
            v = prompt("Heroína de nome "+nome+" . informe suas vitórias durante essa longa jornada")
            //pegar a quantidade de derrotas
            d = prompt(nome+" , informe suas derrotas durante essa longa jornada")
            //juntas ambos em um veotor, para que eu possa trabalhar com dados "iguais" sem usar um monte variáveis
            agrupamentoDeDados=[v,d]

            //para guardar o valor das variáveis usadas anteriormente na função a seguir
            pushFuncition2=getCal(pushFuncition1,agrupamentoDeDados)
            
            function getCal(nome,vitorias_derrota){
              
                let cal=vitorias_derrota[0]-vitorias_derrota[1]
                return cal

            }
            
            //para guardar o valor das variáveis usadas anteriormente na função a seguir
            pushFuncition3=getRank(pushFuncition1,pushFuncition2,agrupamentoDeDados)
            
            function getRank(nome,rank,vitorias_derrota){
                if(rank<=10){
                    console.log("Heroína de nome "+nome+" , a parti dos seus dados de carreira com "+vitorias_derrota[0]+" vitórias e "+vitorias_derrota[1]+"derrtotas você está no FERRO")
                }
            
                else if(rank<=20){
                    console.log("Heroína de nome "+nome+" , a parti dos seus dados de carreira com "+vitorias_derrota[0]+" vitórias e "+vitorias_derrota[1]+"derrtotas você está no BRONZE")
                }
            
                else if(rank<=50){
                    console.log("Heroína de nome "+nome+" , a parti dos seus dados de carreira com "+vitorias_derrota[0]+" vitórias e "+vitorias_derrota[1]+"derrtotas você está no PRATA")
                }
            
                else if(rank<=80){
                    console.log("Heroína de nome "+nome+" , a parti dos seus dados de carreira com "+vitorias_derrota[0]+" vitórias e "+vitorias_derrota[1]+"derrtotas você está no OURO")
                }
            
                else if(rank<=90){
                    console.log("Heroína de nome "+nome+" , a parti dos seus dados de carreira com "+vitorias_derrota[0]+" vitórias e "+vitorias_derrota[1]+"derrtotas você está no DIAMANTE")
                }
            
                else if(rank<=100){
                    console.log("Heroína de nome "+nome+" , a parti dos seus dados de carreira com "+vitorias_derrota[0]+" vitórias e "+vitorias_derrota[1]+"derrtotas você está no LENDÁRIO")
                }
            
                else {
                    console.log("Heroína de nome "+nome+" , a parti dos seus dados de carreira com "+vitorias_derrota[0]+" vitórias e "+vitorias_derrota[1]+"derrtotas você está no IMORTAL")
                }
            
        
            }
            break
                
    }
    
repetir=prompt("Se sim digite S ou s\nSe não digite qualquer coisa")
}while(repetir=="s"||repetir=="S")
