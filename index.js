const today = new Date();
const month = today.getMonth();
const date = today.getDate();

const fikaDate = document.fika.kalender[month][date];

const $fika = document.getElementById("fika-node");

// Celebrate a special day
if (fikaDate) {
    $fika.innerHTML = `<h3>${fikaDate.coffee}</h3> <p>för det är <strong><a href="${fikaDate.source}">${fikaDate.name}</a></strong>!</p>`;

    // Try to get a picture of the pastry :)
    const imageHeight = 300;
    const wikimediaUrl = `https://sv.wikipedia.org/w/api.php?origin=*&action=query&titles=${fikaDate.coffee}&prop=pageimages&format=json&pithumbsize=${imageHeight}`;
    fetch(wikimediaUrl, { mode: 'cors' })
        .then(response => response.json())
        .then(data => {
            const pageKeys = Object.keys(data.query.pages);
            const page = data.query.pages[pageKeys[0]];
            if (!page.thumbnail || !page.thumbnail.source) {
                return;
            }
            $fika.innerHTML += `<img src="${page.thumbnail.source}" />`
        });
}
// Or fall back
else {
    $fika.innerHTML = "<h3>precis vad du vill!</h3>";
}
