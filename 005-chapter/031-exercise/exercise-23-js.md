
### Формулировка
Напишите программу для определения типа треугольника по длинам его сторон.

### Пояснение
Программа должна запросить у пользователя длины сторон треугольника и определить, является ли он равносторонним, равнобедренным или разносторонним. Также необходимо проверить, могут ли введенные значения образовать треугольник.

### Тесты

1. **Пример 1:**
   - Вход: стороны = 5, 5, 5
   - Ожидаемый вывод: "Равносторонний треугольник"

2. **Пример 2:**
   - Вход: стороны = 3, 4, 4
   - Ожидаемый вывод: "Равнобедренный треугольник"

3. **Пример 3:**
   - Вход: стороны = 3, 4, 5
   - Ожидаемый вывод: "Разносторонний треугольник"

4. **Пример 4:**
   - Вход: стороны = 1, 1, 200
   - Ожидаемый вывод: "Треугольник с такими сторонами не существует"

### JavaScript
```javascript
function checkTriangle(side1, side2, side3) {
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        if (side1 === side2 && side2 === side3) {
            return "Равносторонний треугольник";
        } else if (side1 === side2 || side1 === side3 || side2 === side3) {
            return "Равнобедренный треугольник";
        } else {
            return "Разносторонний треугольник";
        }
    } else {
        return "Треугольник с такими сторонами не существует";
    }
}
```
