---
title: "Vanha Chomebook Linux-koneeksi"
date: 2021-11-23
categories: 
  - "it"
tags: 
  - "chromebook"
  - "linux"
---

Vuonna 2015 [hankin Chromebook kannettavan tietokoneen](https://teuvovaisanen.fi/2015/09/02/toshiba-chromebook-2-uusi-lappari/). Nyt kesällä 2021 loppuivat ChromeOS -käyttöjärjestelmän päivitykset tähän, koneeni saavutti **Auto Update Expiration (AUE)** \-päivämäärän. Tämän jälkeenkin kone toki on toimiva, vaan ei enää saa päivityksiä järjestelmään eikä sen tietoturvaan.

AUE -päivämäärä on muuten hyvä tarkistaa uutta/käytettyä Chromebook -konetta ostaessa, ettei hanki liian nopsaan vanhenevaa laitetta. Etenkin kauppojen tarjouskoneet ovat usein juuri vanhemmasta päästä. [Lista eri valmistajien koneista ja niiden AUE -tilasta](<http://support.google.com/chrome/a/answer/6220366?hl=en\(avaa uuden välilehden\)>).

Vanhentunut kone "roskikseen" vai uuteen käyttöön? Roskikseenhan ei konetta tietenkään tule tyrkätä, vaan se on vietävä kierrätykseen, jos aikoo sen hävittää. Mutta vanha kone voi myös syntyä uuteen käyttöön sitä pikkuisen modaamalla ja asentamalla uusi käyttöjärjestelmä.

## Toshiba Chromebook 2 Linux-koneeksi

Toshiba on mukavan kevyt ja näyttö hyvälaatuinen. Siitä tulee hyvä Netflix- ja surffikone.  
Chromebookeihin on voinut asentaa Linuxin ChromeOS:n rinnalle jo vuosia eri tekniikoin: crouton, crustini, dual boot jne.

Mikäli itse ChromeOS -järjestelmästä haluaa kokonaan eroon, on laitteessa tehtävä fyysisiä muutoksia. Fyysiset temput ovat valmistaja/laitekohtaisia, perusidea on poistaa käyttöjärjestelmälevylle kirjoittamisen eston poistaminen. Toshibassani se tarkoitti sitä, että kone oli avattava ja ruuvimeisselillä varovasti raaputettava suojateippi pois sekä jätettävä yksi ruuvi laittamatta takaisin paikoilleen. Tästä Toshiba -proseduurista on hyvä video juutuupissa.

https://youtu.be/JcZ711cxKdA

Tämän fyysisen tempun jälkeen koneeseen on asennettava uusi UEFI, jotta jonkin uuden käyttöjärjestelmän asentaminen olisi mahdollista. Uusi UEFI asentuu verkosta, siitä lisätietoa hienolta [MR Chromebox](https://mrchromebox.tech/) -sivustolta. UEFIn avulla voi määrittää mm. boottijärjestyksen, jotta boottaavalta USB-tikulta saa käyttöjärjestelmän asennuksen käyntiin.

Kun uusi UEFI on koneessa, voikin sitten bootata haluamallaan käyttäjärjestelmällä. Itse halusin koneeseen Linuxin. On siis ensin ladattava haluamansa Linux -distron ISO -kuva ja laitettava se boottaavaan USB-tikkuun. [balenaEtcher -ohjelmalla](https://www.balena.io/etcher/) boottitikun tekeminen on helppoa.

Kokeilin ensin **GalliumOS** -distroa, jonka piti olla Chromebookeille optimoitu. Asennus katkesi kesken kaiken, ei taida olla enää kuranttia tavaraa, ylläpito loppunut.

Seuraavaksi **Ubuntu** boottaavaan tikkuun. Se asentui mutkitta, mutta äänet eivät toimineet, enkä saanut eri ohjeillakaan niitä toimimaan.

Kolmas kerta toden sanoo ;)  
**Manjaro** -distro onnistui ja äänetkin toimivat.

Nyt Toshibassa siis ei enää ole laisinkaan ChromeOS:ää, vaan se on korvattu Manjaro Linuxilla, ja sehän taasen saa päivityksiä. Kone on siis uudestisyntynyt :) Kone siirtyy nuorimmaiselleni leffakoneeksi.
