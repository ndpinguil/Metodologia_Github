/* Mostrar la suma de los elementos donde y el
índice sean iguales
nums=[2,1,4,3]
//4 */

const nums = [2, 1, 4, 3, 6, 10];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === i) {
    sum += nums[i];
  }
}

console.log(sum);

