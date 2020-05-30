const today = new Date();
const month = today.getMonth();
const date = today.getDate();

const fikaDate = document.fika[month][date];

const $fika = document.getElementById("fika-node");

$fika.innerText = fikaDate ? fikaDate.name : "precis vad du vill!"