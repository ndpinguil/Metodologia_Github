/* Mostrar la suma elementos que no sean
múltiplos de 7
nums=[12,14,5,7]
//19 */

const nums = [12, 14, 5, 7, 2];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 7 !== 0) {
    sum += nums[i];
  }
}

console.log(sum);
