/* 1. Mostrar la suma elementos impares
nums=[10,50,8,4]
//0
nums=[3,5,8,4]
//8 */

const nums = [3, 5, 8, 4];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    sum += nums[i];
  }
}

console.log(sum);
