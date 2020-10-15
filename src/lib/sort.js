// TODO: Implement the bubble sort algorithm
function bubbleSort(array) {
  let swapped = false;

  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const swap_value = array[i];
        array[i] = array[i + 1];
        array[i + 1] = swap_value;
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

module.exports = bubbleSort;
