/**A partir de un array de números sumar todos los elementos y guardar el resultado en una variable sum.
Ejemplos:

nums[2,3,4] sum = 9 

nums [0,0,0,1,1,1] sum = 3/** */

let nums=[5,3,9,7,1,0];
let suma=0;
let i =0 ;

for(i ; i<nums.length; i++){
    suma = suma + nums[i];
}
{
    console.log("EL resultado",nums, "es", suma);
}