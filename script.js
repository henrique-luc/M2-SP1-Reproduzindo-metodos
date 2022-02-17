
const numeros = [1,2,3,4,5]

const letras = ['a', 'b', 'c', 'd']

const numElemento = 3

const stringElemento = '$'

function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

function biggerThan (value){
    return value > 3
}

function somaNumeros(num1, num2){
    let soma = num1 + num2
    return soma
}

//FOREACH

function newForEach(array, callback) {
    for(let i = 0; i < array.length; i++){
        callback(array[i],i,array)
    }
}

newForEach(numeros,logArrayElements)

//MAP
function multiply(num){
    return num * 2
}

function newMap(array, callback){
    let newArr = []

    for(let i = 0; i < array.length; i++){
        const resultado = callback(array[i])
        newArr.push(resultado)
    }
    return newArr
}

newMap(numeros, multiply)

//FILTER

//cria um novo array com os elementos que passaram no teste
//usar else/if
//const newArray = arr.filter(callback[, thisArg]

function newFilter(array, callback){
    let newArr = []

    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            newArr.push(array[i])
        }
    }
    return newArr
}

newFilter(numeros, biggerThan)

//FIND

function newFind(array, callback){
    let resultado

    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
           return resultado = array[i]
        }
    }
    if (resultado === undefined) {
        return undefined
    }
}

newFind(numeros, biggerThan)

//FINDINDEX

function newFindIndex(array, callback){
    let resultado

    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
           resultado = i
        }
    }

    if(resultado === undefined){
        resultado = -1
    }
    return resultado
}

newFindIndex(numeros, biggerThan)

//REDUCE

//somar meu array
//resultado +=

function newReduce(array, callback, valorInicial){
    let resultado = valorInicial

    for (let i = 0; i < array.length; i++){
        let somaNum = callback(resultado, array[i])
        resultado = somaNum
    }
    
    return resultado
}

newReduce(numeros, somaNumeros,0)

//SOME

//retornar falso ou verdadeiro (if/else)

function newSome(array, callback){
    let resultado

    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            resultado = array[i]
            return true
        }
    }
    if (resultado === undefined){
        return false
    }
}

newSome(numeros, biggerThan)

//EVERY

//se todos os elementos são true ou false

function newEvery(array, callback){
    let resultado = []

    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            resultado.push(array[i])
        }
    }
    if(resultado.length === array.length){
        return true
    } else if (resultado === undefined){
        return false
    } else {
        return false
    }
}

newEvery(numeros, biggerThan)

//INCLUDES

function newIncludes (array, searchElement, fromIndex){
    let resultado

    if(fromIndex === undefined){
        fromIndex = 0
    }
    for (let i = fromIndex; i < array.length; i++){
        if(array[i] === searchElement){
            resultado = true
        } else if (resultado === undefined){
            resultado = false
        }
        
    }

    return resultado
}

newIncludes(numeros, numElemento, 0)

//INDEXOF

function newIndexOf(array, numElementoPesquisa, pontoInicial){
    
    let resultado

    if(pontoInicial === undefined){
        pontoInicial = 0
    }
    if(pontoInicial >= array.length){
        resultado = -1
    }
    if(pontoInicial < 0){
        for(let i = array.lenght -1; i > array.length; i--){
            if(numElementoPesquisa === array[i]){
               resultado = i
            }
        }
    }else{
        for(let i = pontoInicial; i < array.length; i++){
            if(numElementoPesquisa === array[i]){
               resultado = i
            }
        }
    }

    if(resultado === undefined){
        resultado = -1
    }
    return resultado
}

newIndexOf(numeros, 1, 0)

//CONCAT

//percorrer todos os numeros/ string soltou ou em array e soma-los

    function newConcat(array, ...valorN){
        let resultado = [...array]
        
        for(let i = 0; i < valorN.length; i++){
            if(Array.isArray(valorN[i])){
                resultado.push(...valorN[i])
            }else{
                resultado.push(valorN[i])
            }
        }
        
        return resultado    

    }   
    newConcat(numeros, numElemento, letras)

//JOIN

    function newJoin (array, separador){
        let soma = ""
        
        for( let i = 0; i < array.length; i++){
            if(array[i] === undefined){
                soma = "" + separador
            }
            if(i === array.length -1){
                soma+= array[i] 
            }else{
                soma+= array[i] + separador
            }
        }
          
        return soma
    }

    newJoin(numeros, stringElemento)
