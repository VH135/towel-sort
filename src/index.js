module.exports = function towelSort(matrix) {

  // проверка на отсутствие параметров
  if (!matrix) {
    return []
  }

  // записываем результат
  let finalArr = []

  // проход по строкам матрицы
  for (let i = 0; i < matrix.length; i++) {

    // проход по элементам в строках
    for (let j = 0; j < matrix[i].length; j++) {

      // проверка индекса колонки на чётность
      // текущий столбец (одно число)
      //let rowLen = matrix[i].length
      let curCol = i % 2 === 0

        // если нечётное, то как обычно, слева направо (индекс колонки-числа)
        ? j

        // если чётное, то от длины строки вычитаем 1 (убираем сдвиг от 0)
        // и отнимаем индекс колонки-числа j
        : matrix[i].length - 1 - j

      // добавляем отсортированные значения в новый array
      // matrix[i] - индекс строки, curCol - индекс колонки-числа
      finalArr.push(matrix[i][curCol])
    }
  }
  return finalArr;
}