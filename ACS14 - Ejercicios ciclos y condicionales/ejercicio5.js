/*5. Mostrar la suma elementos múltiplos de 3
nums=[12,3,5,7]
//15*/

const nums = [12, 3, 5, 7, 18, 63, 30];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 3 === 0) {
    sum += nums[i];
  }
}

console.log(sum);
