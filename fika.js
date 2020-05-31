document.fika = {};
const nthDay = (month, nthDay, weekday) => nthDayInMonth(nthDay, weekday, month).getDate();
const lastWeek = (month) => mondayOfLastFullWeekInMonth(month).getDate();

// Tuesday after Fasting Sunday (47 days before Easter), can be in either February or March (earliest February 3 and latest March 9)
const fatTuesday = daysFromEaster(-47);

document.fika.kalender = {
    // January
    0: {
        10: { coffee: "Mazariner", name: "Mazarinens dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        30: { coffee: "Croissanter", name: "Croissantens dag", source: "https://www.helenholmberg.se/2014/08/mathogtider/" },
    },
    // February
    1: {
        3: { coffee: "Morotskaka", name: "Morotskakans dag" },
        5: { coffee: "Runebergstårta", name: "Runebergsdagen", source: "https://sv.wikipedia.org/wiki/Runebergsdagen" },
    },
    // Fat Tuesday can happen in February or March, so it has to be set after the kalender object
    // March
    2: {
        3: { coffee: "Mandelkubbar", name: "Mandelkubbens dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        7: { coffee: "Punchrullar", name: "Punchrullens dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        13: { coffee: "Mazariner", name: "Mazarinens dag (igen)", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        15: { coffee: "Polhemsbakelse", name: "Kristofferdagen", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
        25: { coffee: "Våfflor", name: "Vårfrudagen", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
    },
    // April
    3: {
        10: { coffee: "Bulle med bulle", name: "Bulle med bullens dag", source: "https://www.hd.se/2018-04-10/glom-inte-fira-bulle-med-bullens-dag/" },
        // Licorice with coffee? :/
        // 12: { coffee: "Lakrits", name: "Lakritsdagen" },
    },
    // May
    4: {
        1: { coffee: "Budapestbakelse", name: "Budapestbakelsens dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        11: { coffee: "Chokladbollar", name: "Chokladbollens dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        15: { coffee: "Kardemummabulle", name: "Kardemummabullens dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        27: { coffee: "Muffins", name: "Muffinsdagen", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },

        // May's Second Tuesday is Syltkakans dag
        [nthDay(4, 2, 2)]: { coffee: "Syltkaka", name: "Syltkakans dag", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
    },
    // June
    5: {
        6: { coffee: "Nationaldagsbakelse", name: "Nationaldagen", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
        26: { coffee: "Chokladpudding", name: "Chokladpuddingens dag" },
    },
    // July
    6: {
    },
    // August
    7: {
        9: { coffee: "Rulltårta", name: "Rulltårtans dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
    },
    // September
    8: {
        // Coffee with coffee? :/
        // 29: { coffee: "Kaffe", name: "Kaffedagen" },

        // The whole last week of September is Princess cake day (crazy)
        [lastWeek(8)+0]: { coffee: "Prinsesstårta", name: "Prinsesstårtans vecka", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
        [lastWeek(8)+1]: { coffee: "Prinsesstårta", name: "Prinsesstårtans vecka", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
        [lastWeek(8)+2]: { coffee: "Prinsesstårta", name: "Prinsesstårtans vecka", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
        [lastWeek(8)+3]: { coffee: "Prinsesstårta", name: "Prinsesstårtans vecka", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
        [lastWeek(8)+4]: { coffee: "Prinsesstårta", name: "Prinsesstårtans vecka", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
        [lastWeek(8)+5]: { coffee: "Prinsesstårta", name: "Prinsesstårtans vecka", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
        [lastWeek(8)+6]: { coffee: "Prinsesstårta", name: "Prinsesstårtans vecka", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
    },
    // October
    9: {
        4: { coffee: "Kanelbulle", name: "Kanelbullens dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        18: { coffee: "Chokladmuffins", name: "Chokladmuffinsdagen", source: "https://www.helenholmberg.se/2014/08/mathogtider/" },
        20: { coffee: "Finska pinnar", name: "Finska pinnens dag", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
        24: { coffee: "FN-bakelse", name: "FN-dagen", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },

        // October's First Sunday is Gräddtårtans dag
        [nthDay(9, 1, 0)]: { coffee: "Gräddtårta", name: "Gräddtårtans dag", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
    },
    // November
    10: {
        6: { coffee: "Gustav Adolfsbakelse", name: "Gustav Adolfsdagen", source: "https://en.wikipedia.org/wiki/Gustavus_Adolphus_pastry" },
        7: { coffee: "Kladdkaka", name: "Kladdkakans dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        // Cannot handle multiple coffee's on the same day, so we picked regular appel cake over Skånsk appel kake
        // 10: { coffee: "Skånsk äppelkaka", name: "Mårtensafton", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
        10: { coffee: "Äppelkaka", name: "Äppelkakans dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        11: { coffee: "Choklad", name: "Chokladens dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        // We prefer sweets with our coffee, and Smörgåstårta is salty
        // 13: { coffee: "Smörgåstårta", name: "Smörgåstårtans dag", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
        14: { coffee: "Ostkaka", name: "Ostkakans dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        17: { coffee: "Napoleonbakelse", name: "Napoleonbakelsens dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        22: { coffee: "Wienerbröd", name: "Wienderbrödets dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
    },
    // December
    11: {
        9: { coffee: "Pepparkakor", name: "Pepparkakans dag", source: "https://temadagar.se/pepparkakans-dag/" },
        13: { coffee: "Lussebullar och pepparkakor", name: "Lucia", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        18: { coffee: "Valfri kaka", name: "Kakans dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        21: { coffee: "Skumtomtar", name: "Skumtomtens dag" },
    }
};

// "Fettisdagen" and "Internationella pannkaksdagen" are both on the same day, and that day varies:
document.fika.kalender[fatTuesday.getMonth()][fatTuesday.getDate()] = { coffee: "Semla", name: "Fettisdagen", source: "https://sv.wikipedia.org/wiki/Fettisdagen" };
// { coffee: "Pannkakor", name: "Internationella pannkaksdagen" },

//
// Abuse hoisting so this file is easier to contribute to by keeping the calendar at the top :)

// Helper methods from https://www.i-programmer.info/programming/javascript/6322-date-hacks-doing-javascript-date-calculations.html?start=1
// `day` is in the range 0 Sunday to 6 Saturday
function firstDayInMonth(day, m) {
    const y = new Date(Date.now()).getFullYear();
    return new Date(y, m, 1 + (day - new Date(y, m, 1).getDay() + 7) % 7);
}
function nthDayInMonth(n, day, m) {
    const d = firstDayInMonth(day, m);
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (n - 1) * 7);
}

function lastDayInMonth(day, m) {
    const d = firstDayInMonth(day, m + 1);
    d.setDate(d.getDate() - 7);
    return d;
}
function mondayOfLastFullWeekInMonth(m) {
    const d = lastDayInMonth(0, m);
    d.setDate(d.getDate() - 6);
    return d;
}

// https://stackoverflow.com/a/1284335/703921
function easter() {
    const Y = new Date(Date.now()).getFullYear();
    const C = Math.floor(Y/100);
    const N = Y - 19*Math.floor(Y/19);
    const K = Math.floor((C - 17)/25);
    let I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
    I = I - 30*Math.floor((I/30));
    I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
    let J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
    J = J - 7*Math.floor(J/7);
    const L = I - J;
    const M = 3 + Math.floor((L + 40)/44);
    const D = L + 28 - 31*Math.floor(M/4);

    return new Date(Y, M-1, D);
}
function daysFromEaster(daysDiff) {
    return new Date(easter().setDate(easter().getDate() + daysDiff));
}
