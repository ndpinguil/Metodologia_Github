/* 2. Mostrar suma índices pares
nums=[10,50,8,4]
//18*/

const nums = [10, 50, 23, 8, 4];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  if (i % 2 === 0) {
    sum += nums[i];
  }
}

console.log(sum);
