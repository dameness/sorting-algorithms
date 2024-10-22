import { bubbleSort, insertionSort, quickSort, selectionSort } from './sorting';

const arr: number[] = [];

for (let i = 0; i < Math.pow(10, 4); i++) arr.push(Math.random() * 1000);

let start = performance.now();
bubbleSort(arr);
let end = performance.now();
console.log(`bubble Sort: ${end - start}ms`);

start = performance.now();
insertionSort(arr);
end = performance.now();
console.log(`insertion Sort: ${end - start}ms`);

start = performance.now();
selectionSort(arr);
end = performance.now();
console.log(`selection Sort: ${end - start}ms`);

start = performance.now();
quickSort(arr);
end = performance.now();
console.log(`quick Sort: ${end - start}ms`);
