const today = new Date();
const month = today.getMonth();
const date = today.getDate();

const fikaDate = document.fika.kalender[month][date];

const $fika = document.getElementById("fika-node");

// Celebrate a special day
if (fikaDate) {
    $fika.innerHTML = `<h3>${fikaDate.coffee}</h3> <p>för det är <strong><a href="${fikaDate.source}">${fikaDate.name}</a></strong>!</p>`;
}
// Or fall back
else {
    $fika.innerHTML = "<h3>precis vad du vill!</h3>";
}
