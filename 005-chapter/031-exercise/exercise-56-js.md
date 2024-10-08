
### Формулировка
Разделить массив на два: в одном будут четные числа из исходного массива, в другом - нечетные.

### Пояснение
Программа должна принимать на вход исходный массив чисел. Затем она должна создать два массива: в одном будут содержаться только четные числа из исходного массива, а в другом - только нечетные.

### Тесты

1. **Пример 1:**
   - Вход: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   - Ожидаемый результат: Четные: [2, 4, 6, 8, 10], Нечетные: [1, 3, 5, 7, 9]

2. **Пример 2:**
   - Вход: [11, 22, 33, 44, 55, 66, 77, 88, 99]
   - Ожидаемый результат: Четные: [22, 44, 66, 88], Нечетные: [11, 33, 55, 77, 99]

3. **Пример 3:**
   - Вход: [2, 4, 6, 8, 10]
   - Ожидаемый результат: Четные: [2, 4, 6, 8, 10], Нечетные: []

### JavaScript
```javascript
function splitArray(arr) {
    let even = [];
    let odd = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }
    return { even, odd };
}

// Пример использования
console.log("Пример 1:", splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("Пример 2:", splitArray([11, 22, 33, 44, 55, 66, 77, 88, 99]));
console.log("Пример 3:", splitArray([2, 4, 6, 8, 10]));
```

