
const numeros = [1,2,3,4,5]

const letras = ['a', 'b', 'c', 'd']

const numElemento = 3

const stringElemento = '1'

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
           return resultado = i
        }else if(resultado === undefined){
            return resultado = -1
        }
    }
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
    let resultado

    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            resultado = array[i]
            return true
        } else if (resultado === undefined){
            return false
        }
    }
}

every(numeros, biggerThan)

//INCLUDES

function includes (array, element){
    let resultado

    for (let i = 0; i < array.length; i++){
        if(array[i] === element){
            return resultado = true
        }
    }
    if(resultado === undefined){
        return false
    }
}

includes(numeros, numElemento)

//INDEXOF

//function indexOf(array, numElemento, pontoInicial){
//    
//}
//
//indexOf(numeros, numElemento, ?)

//CONCAT

//percorrer todos os numeros/ string soltou ou em array e soma-los

//function concat(array, elem1, elem2){
//    let resultado = [array + elem1 + elem2]
//    return resultado
//
//    //for(let i = 0; i < )
//}
//
//concat(numeros, numElemento, letras)

//JOIN

//function join (array, elementString){
//    let soma = []
//    let resultado = soma.toString()
//
//    if(array === undefined){
//        return resultado = ''
//    }else{
//        for( let i = 0; i < array.length; i++){
//            soma.push(array[i])
//            soma += elementString
//        }
//    }   
//    return resultado
//}
//
//join(numeros, stringElemento)
