
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

function forEach(array, callback) {
    for(let i = 0; i < array.length; i++){
        callback(array[i],i,array)
    }
}

forEach(numeros,logArrayElements)

//MAP
function multiply(num){
    return num * 2
}

function map(array, callback){
    let newArr = []

    for(let i = 0; i < array.length; i++){
        const resultado = callback(array[i])
        newArr.push(resultado)
    }
    return newArr
}

map(numeros, multiply)

//FILTER

//cria um novo array com os elementos que passaram no teste
//usar else/if
//const newArray = arr.filter(callback[, thisArg]

function filter(array, callback){
    let newArr = []

    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            newArr.push(array[i])
        }
    }
    return newArr
}

filter(numeros, biggerThan)

//FIND

function find(array, callback){
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

find(numeros, biggerThan)

//FINDINDEX

function findIndex(array, callback){
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

findIndex(numeros, biggerThan)

//REDUCE

//somar meu array
//resultado +=

function reduce(array, callback){
    let resultado = 0

    for (let i = 0; i < array.length; i++){
        let somaNum = callback(resultado, array[i])
        resultado = somaNum
    }
    
    return resultado
}

reduce(numeros, somaNumeros)

//SOME

//retornar falso ou verdadeiro (if/else)

function some(array, callback){
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

some(numeros, biggerThan)

//EVERY

//se todos os elementos são true ou false

function every(array, callback){
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

every(numeros, biggerThan)

//INCLUDES

function includes (array, searchElement, fromIndex){
    let resultado

    if(fromIndex === undefined){
        fromIndex = 0
    }else{
        for (let i = fromIndex; i < array.length; i++){
            if(array[i] === searchElement){
                resultado = true
            } else if (resultado === undefined){
                resultado = false
            }
        }
    }

    return resultado
}

includes(numeros, numElemento, 0)

//INDEXOF

function indexOf(array, numElementoPesquisa, pontoInicial){
    
    let resultado

    for(let i = pontoInicial; i < array.length; i++){
        if(numElementoPesquisa === array[i]){
           resultado = i
        }
    }
    if(resultado === undefined){
        resultado = -1
    }
    return resultado
}

indexOf(numeros, numElemento, 0)

//CONCAT

//percorrer todos os numeros/ string soltou ou em array e soma-los

    //function concat(array, valor1, valor2){
    //    let resultado = [...array + valor1 + valor2]
    //    return resultado
//
    //    
    //}
//
    //concat(numeros, numElemento, letras)

//JOIN

    //function join (array, separador){
    //    let soma = []
    //    
    //    if(array === undefined){
    //        resultado = ''
    //    }else{
    //        for( let i = 0; i < array.length; i++){
    //            soma.push(array[i] + separador)
    //        }
    //    }   
//
    //    let resultado = soma.toString()
    //    return resultado
    //}
//
    //join(numeros, stringElemento)
