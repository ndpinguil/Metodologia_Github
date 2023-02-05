/* Mostrar la suma de los índices donde el
índice sea menor al elemento
nums =[0,2,1,4]
*/

const nums = [0, 5, 2, 1, 7, 4];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  if (i < nums[i]) {
    sum += i;
  }
}

console.log(sum);
