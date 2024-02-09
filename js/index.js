let nome
let pushFuncition1
let pushFuncition2
let pushFuncition3
let sexo

do{

    sexo=prompt("Informe seu sexo \nM-masculino\nF-feminino\n(INFORME EM LETRA MAIÚSCULA)")

    switch(sexo){
        case "M":
            nome =prompt("Informe seu nome de herói:")

            pushFuncition1=getName(nome," ")
            
            function getName(nome,splitChar="-"){
                let getFirstName=nome.split(splitChar)[0]
                console.log(getFirstName)
                return getFirstName
            }
            
            pushFuncition2=getCal(pushFuncition1)
            
            function getCal(nome){
                let v = prompt("Herói de nome "+nome+" . informe suas vitórias durante essa longa jornada")
                let d = prompt(nome+" , informe suas derrotas durante essa longa jornada")
                let cal=v-d
                return cal
            }
            
            pushFuncition3=getRank(pushFuncition1,pushFuncition2)
            
            function getRank(nome,rank){
                if(rank<=10){
                    console.log("Herói de nome "+nome+" , aprtir dos seus dados de lutas você está no FERRO")
                }
            
                else if(rank<=20){
                    console.log("Herói de nome "+nome+" , aprtir dos seus dados de lutas você está no BRONZE")
                }
            
                else if(rank<=50){
                    console.log("Herói de nome "+nome+" , aprtir dos seus dados de lutas você está no PRATA")
                }
            
                else if(rank<=80){
                    console.log("Herói de nome "+nome+" , aprtir dos seus dados de lutas você está no OURO")
                }
            
                else if(rank<=90){
                    console.log("Herói de nome "+nome+" , aprtir dos seus dados de lutas você está no DIAMANTE")
                }
            
                else if(rank<=100){
                    console.log("Herói de nome "+nome+" , aprtir dos seus dados de lutas você está no LENDÁRIO")
                }
            
                else {
                    console.log("Herói de nome "+nome+" , aprtir dos seus dados de lutas você está no IMORTAL")
                }
            
        
            }
            break

            case "F":
            
            nome =prompt("Informe seu nome de heroína:")

            pushFuncition1=getName(nome," ")
            
            function getName(nome,splitChar="-"){
                let getFirstName=nome.split(splitChar)[0]
                console.log(getFirstName)
                return getFirstName
            }
            
            pushFuncition2=getCal(pushFuncition1)
            
            function getCal(nome){
                let v = prompt("Heroína de nome "+nome+" . informe suas vitórias durante essa longa jornada")
                let d = prompt(nome+" , informe suas derrotas durante essa longa jornada")
                let cal=v-d
                return cal
            }
            
            pushFuncition3=getRank(pushFuncition1,pushFuncition2)
            
            function getRank(nome,rank){
                if(rank<=10){
                    console.log("Heroína de nome "+nome+" , aprtir dos seus dados de lutas você está no FERRO")
                }
            
                else if(rank<=20){
                    console.log("Heroína de nome "+nome+" , aprtir dos seus dados de lutas você está no BRONZE")
                }
            
                else if(rank<=50){
                    console.log("Heroína de nome "+nome+" , aprtir dos seus dados de lutas você está no PRATA")
                }
            
                else if(rank<=80){
                    console.log("Heroína de nome "+nome+" , aprtir dos seus dados de lutas você está no OURO")
                }
            
                else if(rank<=90){
                    console.log("Heroína de nome "+nome+" , aprtir dos seus dados de lutas você está no DIAMANTE")
                }
            
                else if(rank<=100){
                    console.log("Heroína de nome "+nome+" , aprtir dos seus dados de lutas você está no LENDÁRIO")
                }
            
                else {
                    console.log("Heroína de nome "+nome+" , aprtir dos seus dados de lutas você está no IMORTAL")
                }
            
        
            }
            break
                
    }
    
repetir=prompt("Se sim digite S ou s\nSe não digite qualquer coisa")
}while(repetir=="s"||repetir=="S")

