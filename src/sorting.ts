const swap = (arr: any[], i: number, j: number) => {
  let aux = arr[i];
  arr[i] = arr[j];
  arr[j] = aux;
};

export const bubbleSort = (arr: number[]) => {
  const n = arr.length;
  let swapped = true;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

export const insertionSort = (arr: number[]) => {
  const n = arr.length;
  let aux: number;
  let j: number;

  for (let i = 1; i < n; i++) {
    aux = arr[i];
    j = i;
    while (j > 0 && arr[j - 1] > aux) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = aux;
  }

  return arr;
};

export const selectionSort = (arr: number[]) => {
  const n = arr.length;
  let min: number;

  for (let i = 0; i < n - 1; i++) {
    min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i) {
      swap(arr, i, min);
    }
  }

  return arr;
};

const partition = (arr: number[], p: number, r: number) => {
  const x = arr[p];
  let i = p - 1;
  let j = r + 1;

  while (true) {
    do {
      i++;
    } while (arr[i] < x);
    do {
      j--;
    } while (arr[j] > x);

    if (i < j) {
      swap(arr, i, j);
    } else return j;
  }
};

export const quickSort = (arr: number[], p?: number, r?: number) => {
  if (p === undefined) p = 0;
  if (r === undefined) r = arr.length - 1;

  if (p < r) {
    const q = partition(arr, p, r);
    quickSort(arr, p, q);
    quickSort(arr, q + 1, r);
  }

  return arr;
};
