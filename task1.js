document.write("Задание 1 ");
const numbers = [1, -2, 3, -4, 5, -6, -4, 5, 10, -13, 0, -333, 341, 590, -43];
      let count = 0;
      for (let i = 0; i < numbers.length; i++) 
      {
        if (numbers[i] < 0) 
        {
          count++;
        }
      }
document.write(" Отрицательных чисел: " + count)
document.write(" Задание 2 ");
const nums = [1, 2, 3, 4, 5, 6];
let part1 = nums[0] + nums[1] + nums[2];
let part2 = nums[3] + nums[4] + nums[5];
document.write(" Результат равен: " + (part1 / part2));
document.write(" Задание 3 ")
document.write("Результаты: ");
for (let i = 10; i <= 1000; i++) {
    const firstDigit = Math.floor(i / 100) % 10;
    const secondDigit = Math.floor(i / 10) % 10;
    if (firstDigit + secondDigit === 5) {
      document.write(i + " ");
    }
  }
document.write(" Задание 4 ");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
document.write(" Новый объединенный массив: " + arr1.concat(arr2));
document.write(" Задание 5 ");
const array = [10, 20, 30, 40, 50, 76, 80, 1, 2, 3, 5, 0, 100];
const newArray = [];
document.write(" Результат ");
for (let i = 0; i < array.length; i++)
{
    newArray.push(array[i] * 1.1);
}
for (let m = 0; m < newArray.length; m++)
{
    document.write(newArray[m] + " | ");
}
