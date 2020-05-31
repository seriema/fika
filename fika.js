document.fika = {};

document.fika.kalender = {
    // January
    0: {
        10: { coffee: "Mazariner", name: "Mazarinens dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
    },
    // February
    1: {
        3: { coffee: "Morotskaka", name: "Morotskakans dag" },
        5: { coffee: "Runebergstårta", name: "Runebergsdagen", source: "https://sv.wikipedia.org/wiki/Runebergsdagen" },

        // "Fettisdagen" and "Internationella pannkaksdagen" are both on the same day, and that day varies: the Tuesday after fasting Sunday
        // 25: { coffee: "Semla", name: "Fettisdagen" },  (mellan 3 februari och 9 mars infaller fettisdagen)
        // 25: { coffee: "Pannkakor", name: "Internationella pannkaksdagen" },
    },
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
        27: { coffee: "Muffins", name: "Muffinsdagen", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" }

        // Second Tuesday in May
        // 13: { coffee: "Syltkaka", name: "Syltkakans dag", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
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

        // Last week , a whole week
        // 28: { coffee: "Prinsesstårta", name: "Prinsesstårtans vecka", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
    },
    // October
    9: {
        // Cannot handle multiple coffee's on the same day, so we picked cinnamon buns over cake
        // 4: { coffee: "Gräddtårta", name: "Gräddtårtans dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        4: { coffee: "Kanelbulle", name: "Kanelbullens dag", source: "http://www.lyckasmedbakning.nu/bak-fikakalender-2016/" },
        20: { coffee: "Finska pinnar", name: "Finska pinnens dag", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
        24: { coffee: "FN-bakelse", name: "FN-dagen", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },

        // First Sunday in October
        // 28: { coffee: "Gräddtårta", name: "Gräddtårtans dag", source: "https://sv.wikipedia.org/wiki/Bakverk#Bakverk_vid_h%C3%B6gtider" },
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
