function generateRandomLetters(length) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () => letters[Math.floor(Math.random() * letters.length)]);
}

function countLetterFrequency(arr) {
    const frequency = {};
    for (const letter of arr) {
        frequency[letter] = (frequency[letter] || 0) + 1;
    }
    return frequency;
}

function main() {
    const size = 20; // Размер массива
    const arr = generateRandomLetters(size);
    console.log("Сгенерированный массив:", arr);
    const frequency = countLetterFrequency(arr);
    console.log("Частота встречаемости каждой буквы:", frequency);
}

main();