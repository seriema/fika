const today = new Date();

const kalender = document.fika.kalender;
const $fika = document.getElementById("fika-node");

$nextYear = document.createElement("p");
$nextYear.innerHTML = `Du tittar på ${document.fika.year}. <a href="kalender.html?year=${document.fika.year + 1}">Nyfiken på nästa år?</a>`;
$fika.appendChild($nextYear);

Object.keys(kalender).forEach((month) => {
    const $monthHeader = document.createElement("h3");
    $monthHeader.innerText = (new Date(today.getFullYear(), month)).toLocaleDateString('sv-SE', { month: "long" })
    $fika.appendChild($monthHeader);

    const $month = document.createElement("ul");
    Object.keys(kalender[month]).forEach((date) => {
        kalender[month][date].forEach(fikaDate => {
            const fika = fikaDate;
            const $date = document.createElement("li");
            $date.innerHTML = `${date}: ${fika.coffee} (<a href="${fika.source}">${fika.name}</a>)`;
            $month.appendChild($date);
        });
    });

    $fika.appendChild($month);
});
