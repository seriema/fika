const today = new Date();

const fika = document.fika.kalender;
const $fika = document.getElementById("fika-node");

$nextYear = document.createElement("p");
$nextYear.innerHTML = `Du tittar på ${document.fika.year}. <a href="kalender.html?year=${document.fika.year + 1}">Nyfiken på nästa år?</a>`;
$fika.appendChild($nextYear);

Object.keys(fika).forEach((month) => {
    const $monthHeader = document.createElement("h3");
    $monthHeader.innerText = (new Date(today.getFullYear(), month)).toLocaleDateString('sv-SE', { month: "long" })
    $fika.appendChild($monthHeader);

    const $month = document.createElement("ul");
    Object.keys(fika[month]).forEach((date) => {
        const fikaDate = fika[month][date];
        const $date = document.createElement("li");
        $date.innerHTML = `${date}: ${fikaDate.coffee} (<a href="${fikaDate.source}">${fikaDate.name}</a>)`;
        $month.appendChild($date);
    });

    $fika.appendChild($month);
});
