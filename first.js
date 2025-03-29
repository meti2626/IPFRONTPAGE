function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);

    return quickSort(left).concat(pivot, quickSort(right));
}

let numbers = [34, 7, 23, 32, 5, 62];
let sortedNumbers = quickSort(numbers);

console.log("Sorted array:", sortedNumbers);
