/* 3. Mostrar la suma elementos mayores a 10
nums=[10,50,8,4]
//50*/

const nums = [10, 230, 50, 8, 4];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 10) {
    sum += nums[i];
  }
}

console.log(sum);