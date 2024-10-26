function calculateStrikeRate(runs, balls) {
    if (balls === 0) {
        return 0;
    }
    const strikeRate = (runs / balls) * 100;
    return strikeRate.toFixed(2);
}

const strikeRate = calculateStrikeRate(25, 40);
console.log(strikeRate);