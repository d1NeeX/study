function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Пример использования
console.log("Пример 1:", shuffleArray([1, 2, 3, 4, 5]));
console.log("Пример 2:", shuffleArray([-10, 0, 10, -5, 7]));
console.log("Пример 3:", shuffleArray([5, 5, 5, 5, 5]));