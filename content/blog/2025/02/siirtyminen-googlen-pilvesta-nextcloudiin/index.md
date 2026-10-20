---
title: "Siirtyminen Googlen pilvestä Nextcloudiin"
date: 2025-02-20
categories: 
  - "it"
tags: 
  - "android"
  - "chromebook"
  - "google"
  - "nextcloud"
  - "yksityisyys"
coverImage: "nextcloud-logo.png"
---

## Taustaa

Päätin loikata Googlesta Nextcloudiin. Monta syytä.

- Chromebook -laitteeni alkavat vanheta, etenkin tabletti

- Hakusessa parempi yksityisyys ja eurooppalaisuus

- Politiikka - amerikkalaisten BigTech -yritysten kumartelu Trumpille ja pyllistely Euroopalle

- Taustalla entinen kouluttajarooli vaikuttaa edelleen, on kiva oppia uutta

[Kirjoittelin aiheesta hieman jo eilenkin](https://teuvovaisanen.fi/2025/02/19/siirtyminen-digijattien-palveluista-parempaan-yksityisyyteen/), nyt taitaa olla kirjoitusripuli :)

## Nextcloudin hankinta ja alkuaskeleet

Lyhyen taustatutkimuksen pohjalta päädyin Hetzner pilvipalveluntarjoajaan, Saksassahan tuo. Data siis Euroopassa ?

Tein ensin tilin Hetznerille. [https://accounts.hetzner.com/login](https://accounts.hetzner.com/login)

Siinä olikin pieni mutka, kun tietoturva on nähtävästi tiukka. Mun piti henkilöllisyystodistuksen ja puhelimella otetun kuvan avulla todistaa kuka olen. Sivuston mukaan oikea ihminen tarkisti sen. Ei siinä tarkistuksessa mennyt kuin muutama minuutti.

Laitoin 2FA autentikoinnin päälle ( Google Authenticator)

Seuraavaksi hankin tuon Nextcloudin. [https://www.hetzner.com/storage/storage-share/](https://www.hetzner.com/storage/storage-share/)

Valitsin pienimmän NX11 paketin, viitisen euroa kuussa, tilaa 1 teratavu. Käytin juuri luomaani tiliä palvelun tilauksessa. Tilaus kävi sutjakkaan eikä mennyt aikaakaan kun palvelu oli käytettävissä. Palvelun osoite on sellainen kryptinen verkko-osoite tyyliin

```
https://nx123456.your-storageshare.de  
```

Tuosta vaikeasti muistettavasta hässäkkäosoitteesta päätin alkajaisiksi päästä eroon. Minullahan oli jo weppisaitti ja domain teuvovaisanen.fi ja halusin käyttää tietenkin omaa domainiani. Otin yhteyttä hostingiini (Shellit.org, erinomainen palvelu muuten) ja kyselin onnistuuko se heidän puoleltaan. Kyllä onnistuu joko A -tietueen tai CNAME -tietueen muokkaamisen avulla. Hostingissa on siis ylläpitokäyttöliittymässä itse muokattavissa nuo asetukset, jos osaa ja haluaa. Varmaankin ylläpito myös auttaa, jos itse on epävarma.

Selvä. Seuraavaksi tutustuin Hetznerin konsoleH -käyttöliittymässä miten homma hoidetaan. No sieltähän löytyi Subdomains -kohta. NX11 -tilauksella on käytettävissä kolme alidomainia. Ja ohjeena on käyttää CNAME -tapaa. Mainiota, tämäkin selvisi.

Siispä ensin Shellit.org ylläpitokäyttöliittymään. Loin uuden CNAME -tietueen, jossa haluamani oman domainin alidomain osoittaa tuonne kryptiseen saksaosoitteeseen.

```
https://omaosoite.teuvovaisanen.fi
```

Tämä pitää tehdä siis ensin ja sitten säädöt vasta Hetznerin puolella.  
Seuraavaksi sitten konsoleH -sivustolle Hetznerille ja lisätään subdomainiksi sama minkä tein Shellitissä.

Kolmanneksi vielä Nextcloudin asetuksissa pitää lisätä Trusted Domains -listaan tuo oma uusi alidomainin osoite. Tämä selvisi Nextcloudin omien ohjeiden kautta.

Sitten ei auta muuta kuin odottaa, sillä nimipalvelimet maailmalla päivittävät hitaasti uusia tietoja osoitteista. Minulla meni pari tuntia ja humpsista, uusi osoite lähti toimimaan. Pääsin hässäkästä eroon, oma domain on paljon helpompi muistaa. Sitten se selaimeen aloitussivuksi ;)

## Nextcloudin säätämistä käyttökuntoon

Näin aluksi vain minä käytän omaa pilveäni. Ensimmäinen käyttäjätunnus on administraattori. Sillä hoidan ylläpidon ja asentelen tarvittavat sovellukset. Kaikki nuo edellä mainitut toimenpiteet siis tehty admin-tunnuksella.

Toinen tunnus on sitten se päivittäisen käytön tunnus, jolla varsinaiset työt tiedostojen kanssa tehdään. Kun olen oppinut systeemistä riittävästi, teen vaimolle tunnukset.

Alkuun menee enempi aikaa tuolla admin tunnuksella seikkaillessa ja tutustuessa palveluun. Asentelin muutamia sovelluksia ja kävin katsomassa tavistunnuksella ovatko ilmestyneet käyttöön, näytti toimivan :)

Ensimmäisenä laitoin sähköpostin adminille palveluun. Minullahan on IMAP -sähköposti Shellit.org -palvelussa. Loin sinne Shellitin hostingiin sähköpostin admintunnukselle. Tämä helppo nakki.

Sähköpostipalvelun osoite- ja portti- sekä suojaustiedot esiin hostingin tukidokumentistä ja sitten vain postilaatikkoa lisäämään Nexcloudin sähköpostit osioon adminille. Postin salasanahan on muistissa salasanasovelluksessa, eihän noita voi ulkoa muistaa. Eka kerralla maaliin :)

Sama proseduuri tavallisen käyttäjätunnuksen sähköpostille, välillä täytyy siis loikkia kirjautumassa eri tunnuksilla sisään ja ulos.

Sitten ensimmäiset tiedot Googlesta Nextcloudiin. Tavallisen käyttäjän tiedot siis.  
Olin huomannut, että sovelluksissa on tarjolla Google integration -sovellus, jonka avulla saisi nähtävästi siirrettyä kalenterin, yhteystiedot ja kuvat Nextcloudiin. En halunnut edetä näin. Ensinnäkin minulla on valtavasti kuvia Google Kuvissa. Halusin edetä pala palalta.

Aloitin kalenterista. Google kalenterin tiedot saa helposti exportattua ulos .ical -tiedostoksi. Tuo ja Vie -toiminto löytyy Google kalenterin asetuksista rataskuvakkeen takaa. Viedyn (exportatun) tiedoston avulla saa siirrettyä kalenteritapahtumat Nextcloudin kalenteriin, josta löytyy sitten Tuo kalenteri -toiminto. Tämäkin toimi heittämällä ensi yrityksellä. Pieni yllätys, samalla tuli kaikkien henkilöiden yhteystiedot. Mutta niinhän se pitikin :)

Tuntui jo siltä, että kaikki menee liian helposti. Kahdessa päivässä kaikki tämä muun elämisen rinnalla. Vielä on toista päivää jäljellä. Hmm. entäs tuo puhelin ja sen kalenteri?

## Android puhelin ja synkronointi

Android -puhelimeen löytyy F-Droidista ja Play Kaupasta Nextcloud -sovellus, jonka avulla voi käyttää kaikkia pilven tiedostoja ja lähettää tiedostoja sinne. Suoraviivainen asennus ja tunnisttautuminen palveluun. Tuolta Nexcloudista muuten ylläpitäjänä sitten näkee kaikki ohjelmat/ selaimet / laitteet, jotka ovat yhteydessä palveluun. Niitä voi sieltä myös potkaista pihalle jos sellainen tarve on.

Puhelimen kalenterin synkkaamiseen tarvitaan apuja. F-Droidista ja Play Kaupasta löytyy DAVx5 -sovellus, jonka avulla saa yhteystiedot ja kalenterin tapahtumat sekä tehtävät synkronoitumaan kahdensuuntaisesti puhelimen ja pilvipalvelun välillä. Synkkausta laittaessani sössin vahingossa tunnusten kanssa ja palvelu laittoi minut blokkiin joksikin aikaa. Nöyrästi oli odotettava kunnes pääsi syöttämään tunnuksia uudelleen. Lopulta onnistui.

Kalenteritapahtumia lisätessä täytyykin sitten puhelimella olla tarkkana siitä, mihin kalenteriin niitä lisää, sillä tämä Nextcloudin shellitin sähköpostiosoitteen kalenteri on eri kun Googletunnuksen kalenteri. Eihän Pixel -puhelimesta Google -tunnuksia pois voi ottaa.

## Jatkotoimet

Ihan hyvä saavutus näin alkumetreillä kahdessa päivässä. Valokuvatkin latautuvat nyt puhelimesta Nextcloudiin. Mitä teen vanhoille Google Kuville on vielä itselläni päättämättä.

Suunnilllen noin meni kaksi ensimmäistä päivää Nextcloudin parissa. En tehnyt tarkkoja muistiinpanoja enkä ruutukaappauksia, kun en arvannut kirjoittavani tästä blogiin. Etenen nyt tästä rauhassa ja totuttelen palveluun ja sen käyttöön. Alan pikkuhiljaa siirtämään toimintaa pois GMailista. Tämä siirtymä on pitkä prosessi. Onnistuuko se edes kokonaan, aika näyttää?

Seuraavaksi sitten uudet haasteet, vanha win 10 -läppäri pitäisi laittaa linukaksi ja siihen Nextcloud. Tekeminen ei lopu eläkeläisnörtiltä :) , ja pitäis vielä musaakin tehdä.

