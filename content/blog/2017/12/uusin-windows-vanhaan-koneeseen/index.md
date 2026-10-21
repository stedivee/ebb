---
title: "Uusin Windows vanhaan koneeseen"
date: 2017-12-11
categories: 
  - "it"
tags: 
  - "windows"
coverImage: "Windows10-e1513028943965.png"
---

Poikani hankki aikoinaan halpisläppärin armeijailtoihin leffakoneeksi, kone oli Acer vuosikertaa 2012 tms. Siinä oli ostohetkellä Windows 7, mutta myöhemmin päivitettynä Windows Updaten kautta Windows 10:ksi. Niinkuin wintoosilla on tapana, kone hidastui ajan myötä ja tarvitsi uusioasennuksen tekohengitykseksi. Tämäntyyppisissä koneissa on Windowsin asennustiedostot kovalevyllä omassa "piilossaan" ja koneen voi uusioasentaa palauttamalla varmuuskopion. Varmuuskopio tehdään koneen valmistajan omalla ohjelmalla, tässä tapauksessa Acerin backup / recovery työkalulla.

Tämä alkuasetusten palauttaminen myös tehtiin, mutta konehan palautui tietty takaisin Windows 7 versioon. Eikä Windows Updaten kautta enää päivitystä kympiksi näyttänyt tulevan, siis mikä neuvoksi, jotta saataisiin uusin kymppi vanhaan koneeseen ilman kaupassakäyntiä?

Onneksi Microsoft jakaa uusimpia kotikäyttäjille tarkoitettuja asennuskuvia omalta sivustoltaan. Sieltä voi ladata uusimman Windowsin asennustiedoston laitettavaksi USB-tikulle (tai polttaa se DVD:lle) , jonka avulla puhtaan Windows -asennuksen voi tehdä.

https://www.microsoft.com/fi-fi/software-download/windows10

MS:n em. sivuilta ladataan työkalu **MediaCreationTool.exe** jolla asennustiedostot ladataan ja asennetaan esim. USB-tikulta bootattavaksi. Aluksi ei onni ollut matkassa, vaan työkalun käyttö antoi tyypillisen microsoft-kryptisen virheilmoituksen. Kokeiltiin kolmella eri koneella, virheet vain jatkuivat. Yritimme uusiksi reilun viikon päästä, edelleen Windows 7 -koneella tuli virheilmoitukset, mutta omalla Windows 10 koneellani päästiin tällä kertaa eteenpäin eli MS:n sivustolla oli vain tilapäinen häiriö. Nyt työkalu latasi tiedostot, pakkasi bootattavaksi versioksi USB-tikulle. Päästiin vihdoin päivittämään. [Sitä ennen oli tietty muistettu varmuuskopioida kaikkea mahdollista.](https://teuvovaisanen.fi/2017/12/29/lista-muistettavista-asioista-windows-koneen-paivittajalle/)

1. Vanhan koneen BIOS / UEFI -asetuksista ensin Boot sequence muutos, siis USB ensisijaiseksi boottimediaksi
2. USB -tikku koneeseen ja koneen boottaus
3. Windows 10 asennus lähti käyntiin
4. Windows 7 lisenssi on yleensä "poltettuna" emolevylle, joten asennusvaiheessa ei tarvinnut sarjanumeroa syöttää, vaikka olihan se tarrassa koneen pohjassa. Kone aktivoi Windowsin automaattisesti, kun se tunnistaa kelvollisen sarjanumeron.
5. Asennuksen yhteydessä pystyy osioimaan ja alustamaan kovalevyn haluamallaan tavalla
6. Asennusmedia tarjoaa "kaikki" kotikäyttäjän Windows -versiot asennettavaksi, joten hieman joutui toisellakoneella rinnalla googlailemaan mitä mikäkin versio tarkoitti
7. Version valinnan jälkeen asennus lähti liikkelle ja eteni perinteiseen tapaan, lopussa yksi bootti (USB -tikku pois silloin ja samalla vaihdettiin boottijärjestys takaisin BIOSista)
8. Loppuasennus tapahtuikin kovalevyltä / verkosta.

Hyvin tuo lopulta onnistui, kunhan ensin saatin media ladattua verkosta. Positiivista tässä päivityksessä oli myös se että samalla päästiin kaikenlaisesta ylimääräisistä sovelluksista eroon, koneessa on nyt vain putipuhdas Windows ilman mitään Acer -kilkkeitä.

LISÄYS 29.12.2017

Vaimon Samsung Series 5 ULTRA -läppäri sai uuden SSD -kovalevyn. Tein samalla USB -tikulla onnistuneesti Windows 10 asennuksen myös siihen. Samalla päästiin Samsungin omista kilkkeistä eroon. Koneen pohjasta löytyi Windowsin lisenssikoodi tarrasta, ne muuten kannattaa taltioida itselleen jonnekin, sillä joskus tarrat kuluvat käytössä lukukelvottomiksi.

Suurimpana haasteena tässä oli Samsungin BIOSista oikeiden asetusten löytäminen, jotta sai boottaamaan USBlta, mutta löytyivät lopulta nekin.

Olen artikkelin kirjoittamisen jälkeen asennellut omia ja tuttujen koneita jo kymmenkunta em. tavalla. Avun tarve tuntui lisääntyneen kun Windows 7 tuki lopulta loppui 14.01.2020.
