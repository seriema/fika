const today = new Date();
const month = today.getMonth();
const date = today.getDate();

const fikaDate = document.fika.kalender[month][date];

const $fika = document.getElementById("fika-node");

// Celebrate a special day
if (fikaDate) {
    $fika.innerText = `${fikaDate.coffee} för att fira ${fikaDate.name}!`;
}
// Or fall back to any dessert that goes with coffee
else {
    const desserter = document.fika.dessert;
    const randomFika = desserter[Math.floor(Math.random() * desserter.length)];
    $fika.innerText = randomFika.coffee;
}
