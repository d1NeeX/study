function daysUntilNewYear() {
    const today = new Date();
    const nextYear = new Date(today.getFullYear() + 1, 0, 1);
    const daysLeft = Math.ceil((nextYear - today) / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? `До нового года осталось ${daysLeft} дней.` : "Сегодня уже новый год!";
}

console.log(daysUntilNewYear());