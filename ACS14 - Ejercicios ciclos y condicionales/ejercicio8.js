/* Mostrar la suma de los elementos donde el
índice sea mayor al elemento
nums=[0,2,1,1]
//2*/

const nums = [0, 3, 2, 1, 1];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  if (i > nums[i]) {
    sum += nums[i];
  }
}

console.log(sum);
