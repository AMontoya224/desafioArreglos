//1. Siempre Hambriento
function siempreHambriento(arr) {
    let arreglo = [];
    for (let i=0; i<arr.length; i++){
        if (arr[i] === "comida"){
            arreglo.push("delicioso");
        }
    }
    if (arreglo.length === 0){
        arreglo = "Tengo hambre";
    }
    return arreglo;
}
   
let resultado1 = siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
console.log(resultado1);

let resultado2 = siempreHambriento([4, 1, 5, 7, 2]);
console.log(resultado2);


//2. Filtro paso alto
function highPass(arr, cutoff) {
    let filteredArr = [];
    for (let i=0; i<arr.length; i++){
        if (arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

let resultado3 = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(resultado3);


//3. Mejor que el promedio
function betterThanAverage(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    sum = sum / arr.length;
    let count = 0
    for (let j=0; j<arr.length; j++){
        if (arr[j] > sum){
            count++;
        }
    }
    return count;
}

let resultado4 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(resultado4);


//4. Arreglo invertido
/*function reverse(arr) { //Preguntar al profesor el por qué
    let temp = arr;
    for (let i=temp.length-1; i>=0; i--){
        arr[temp.length - 1 - i] = temp[i];
        console.log(arr);
    }
    return arr;
}*/

function reverse(arr) {
    let temp = [];
    let logitud = arr.length - 1;
    for (let i=logitud; i>=0; i--){
        temp[logitud - i] = arr[i];
    }
    arr = temp;
    return arr;
}

var resultado5 = reverse(["a", "b", "c", "d", "e"]);
console.log(resultado5); 


//5. Arreglo de Fibonacci
function fibonacciArray(n) {
    let fibArr = [0, 1];
    let sum = 0;
    for (let i=1; i<n-1; i++){
        sum = fibArr[i-1] + fibArr[i];
        fibArr.push(sum);
    }    
    return fibArr;
}

let resultado6 = fibonacciArray(10);
console.log(resultado6);