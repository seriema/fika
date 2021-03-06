const month = document.fika.month;
const date = document.fika.date;

const fikaDate = document.fika.kalender[month][date];

const $fika = document.getElementById("fika-node");

// Celebrate a special day
if (fikaDate) {
    // If there are multiple fika's on this date then return a random one
    const fika = fikaDate[Math.floor(Math.random() * fikaDate.length)];
    $fika.innerHTML = `<h3>${fika.coffee}</h3>`;

    // Try to get a picture of the pastry :)
    const imageHeight = 300;
    const wikimediaUrl = `https://sv.wikipedia.org/w/api.php?origin=*&action=query&titles=${fika.coffee}&prop=pageimages&format=json&pithumbsize=${imageHeight}&redirects`;
    fetch(wikimediaUrl, { mode: 'cors' })
        .then(response => response.json())
        .then(data => {
            const pageKeys = Object.keys(data.query.pages);
            const page = data.query.pages[pageKeys[0]];
            if (page.thumbnail && page.thumbnail.source) {
                $fika.innerHTML += `<img src="${page.thumbnail.source}" />`
            }
            return $fika;
        })
        .then($f => $f.innerHTML += `<p>för det är <strong><a href="${fika.source}">${fika.name}</a></strong>!</p>`);
}
// Or fall back
else {
    $fika.innerHTML = "<h3>precis vad du vill!</h3>";
}
