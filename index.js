const today = new Date();
const month = today.getMonth();
const date = 27; //today.getDate();

const fikaDate = document.fika.kalender[month][date];

const $fika = document.getElementById("fika-date-node");
const $coffee = document.getElementById("fika-coffee-node");

// Celebrate a special day
if (fikaDate) {
    $coffee.innerText = `${fikaDate.coffee} för att idag är det ${fikaDate.name}!`;
}
// Or fall back to any dessert that goes with coffee
else {
    const desserter = document.fika.dessert;
    const randomFika = desserter[Math.floor(Math.random() * desserter.length)];

    $coffee.innerText = randomFika.coffee;
}
