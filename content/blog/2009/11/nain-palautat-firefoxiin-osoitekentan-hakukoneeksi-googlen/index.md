---
title: "Näin palautat Firefoxiin osoitekentän hakukoneeksi Googlen"
date: 2009-11-18
categories: 
  - "it"
tags: 
  - "google"
  - "hakukoneet"
  - "selaimet"
---

Firefox -selaimeen on integroitu hakukoneen hakutoiminnot. Oikeassa yläreunassa on hakuja varten omaa luukku ja käyttäjä voi vaihtaa hakukoneen helposti mieleisekseen.

Myös osoitekenttää voi käyttää hakuihin, kuten kuvassa. Oletusarvoisesti Firefox käyttää siinäkin Googlea, mutta joskus huonosti käyttäytyvät ohjelmat / palvelut ryöstävät toiminnon itselleen.

\[caption id="attachment\_1491" align="alignnone" width="300" caption="Firefox haku osoitekentästä"\][![Firefox haku osoitekentästä](images/Firefox-haku-osoitekentasta-300x192.jpg "Firefox haku osoitekentästä")](https://teuvovaisanen.fi/wp-content/uploads/2009/11/Firefox-haku-osoitekentasta.jpg)\[/caption\]

Pahus, mistä ihmeestä tuo Microsoftin Bing on onnistunut ryöstämään toiminnon itselleen?

\[caption id="attachment\_1492" align="alignnone" width="300" caption="Pahuksen Bing varastanut osoitekentän oletushakukoneominaisuuden"\][![Pahuksen Bing varastanut osoitekentän oletushakukoneominaisuuden](images/Pahuksen-Bing-varastanut-oletushakukoneominaisuuden-300x178.jpg "Pahuksen Bing varastanut osoitekentän oletushakukoneominaisuuden")](https://teuvovaisanen.fi/wp-content/uploads/2009/11/Pahuksen-Bing-varastanut-oletushakukoneominaisuuden.jpg)\[/caption\]

Raivostuttavaa, että jokin palvelu ottaa itselleen oikeuden muuttaa ohjelmien asetuksia kysymättä käyttäjältä mitään. Varmaan Microsoft Updaten tepposia tms. Se on korjattava ensi tilassa. Siispä töihin, googlettamaan.

Mozillan sivustolta löytyykin apua artikkelista osoitteessa [http://kb.mozillazine.org/Location\_Bar\_search](http://kb.mozillazine.org/Location_Bar_search)

Avataan siis Firefoxin asetukset kirjoittamalla osoitekenttään: `about:config`

\[caption id="attachment\_1494" align="alignnone" width="300" caption="about:config Firefox"\][![about:config Firefox](images/aboutconfig-Firefox-300x178.jpg "about:config Firefox")](https://teuvovaisanen.fi/wp-content/uploads/2009/11/aboutconfig-Firefox.jpg)\[/caption\]

Hyväksytään varoitus ja skrollataan alas kohtaan `keyword.URL` ja siellähän se "virhe" onkin.

\[caption id="attachment\_1495" align="alignnone" width="300" caption="keyword.URL"\][![keyword.URL](images/keyword-url-300x105.jpg "keyword.URL")](https://teuvovaisanen.fi/wp-content/uploads/2009/11/keyword-url.jpg)\[/caption\]

Kaksoisnapsauta tuota väärää Bing- osoitetta ja se avataan pop-up -ikkunaan.

\[caption id="attachment\_1496" align="alignnone" width="300" caption="väärä hakukone - se poistetaan"\][![väärä hakukone - se poistetaan](images/vaara-hakukone-300x120.jpg "väärä hakukone - se poistetaan")](https://teuvovaisanen.fi/wp-content/uploads/2009/11/vaara-hakukone.jpg)\[/caption\]

Muutetaan se siis oikeaksi korjaamalla  teksti alla olevan kuvan mukaiseksi.

\[caption id="attachment\_1497" align="alignnone" width="300" caption="oikea hakukone tilalle"\][![oikea hakukone tilalle](images/oikea-hakukone-300x120.jpg "oikea hakukone tilalle")](https://teuvovaisanen.fi/wp-content/uploads/2009/11/oikea-hakukone.jpg)\[/caption\]

Hyväksy OK ja sulje Firefox selain. Käynnistäessäsi selaimen uudestaan käyttää Firefox nyt Googlea, niinkuin ennenkin, hyvä niin!
