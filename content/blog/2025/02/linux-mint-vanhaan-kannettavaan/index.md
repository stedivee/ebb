---
title: "Linux Mint vanhaan kannettavaan"
date: 2025-02-22
categories: 
  - "it"
tags: 
  - "chromebook"
  - "google"
  - "linux"
  - "nextcloud"
  - "windows"
coverImage: "Linux-Mint-tyopoyta-e1740210276658.png"
---

## Tietotekniikan sekakäyttäjä

Siirtymä pois Googlesta jatkuu seuraavalla askeleella. Olen ollut pitkään sekakäyttäjä. Windows -koneita on nyt kaksi kappaletta, toinen Lenovon musiikkityöasema Abletonille ja muille äänihommille. Toinen Windows -kone on ollut HP läppäri asiakaskäynneille freelancer -jutuissa.

Sitten Chromebookit, joista tarkoitus on nyt luopua kokonaan. Asus Chromebox, jolla olen pitänyt etäkursseja ja joka on myös pääkoneeni surffihommissa kotona. Lenovo IdeaPad Chrometabletti reissu- ja sohvakoneena.

Omppuja ei nyt ole, kun en enää kouluta. Eikä ole enää Raspberry Pi -koneitakaan.

Olen vuosien saatossa kokeillut eri koneissa Linuxeja, sillä koneita olen saanut halvalla tai maksutta, kun edellistä työpaikastani vanhentuneita koneita jaettiin useinkin poiskantohintaan. On ollut Debiania, Ubuntua ja Linux Minttiä. Kiva oli kokeilla Linuxeja, mutta ei niistä ollut minulle silloin työkoneiksi. Luovuin yleensä kokeilujen jälkeen koneista jakamalla niitä kavereille ja viemällä kierrätyskeskukseen valmiiksi asennettuina edelleen hyödynnettäviksi. Hauskaa oli.

Olen lähestulkoon lopettanut työnteon, ja kun vanha HP ProBook ja sen Windows 10 ovat muutenkin elinkaarensa loppuvaiheessa, niin annetaan sille jatkoelämää Linuxista. Tällä läppärillä on tarkoitus korvata Chromebox eli siitä tulee nyt päivittäinen yleiskoneeni. Mitä Chromeboxille käy on vielä avoinna.

## HP ProBook 430 G4 Windows 10:stä linuxkone

Nyt tarkoitus on vakavassa mielessä ottaa Linux oikeasti päivittäiseen käyttöön. Latasin verkosta .iso -kuvat Fedorasta ja Mintistä ja Balena Etcher -ohjelmalla valmistin boottavat live-tikut. Pääsin kokeilemaan ja vertaamaan ennen varsinaista asennusta. Fedora tuntui kummalliselta kun taas Linux Mint tutun turvalliselta ja perinteiseltä joten valitsin Mintin. Vaimokin on varmaan siirtymässä myöhemmin Linuxiin Windows 10 läppärillään, Linux Mint sopii varmasti paremmin vaimolle ja kun minä olen tukihenkilö, niin parempi olla sama Linux.

Siispä ensin kaikenlaisia tiedostoja säilöön vanhasta Windows 10:stä, nythän mulla oli reilusti tilaa Nextcloudissa ja oli nurkissa ulkoisia kovalevyjäkin. Tiedostojen taltioinnin ja siivouksen jälkeen sitten USB-tikulta bootti Linux Mint -asennukseen. Eihän se asennus mitään ihmeellistä ole, se etenee loogisin kysymyksin, johon ei nörttitaitoja tarvita. Siitä selviytyisi "naapurin Penakin" ilman apuja. Kaikki sujui asennuksessa ongelmitta. Ongelmat yleensä syntyvät rautayhteensopimattomuuksista, mutta tämä läppäri on jo iäkäs, joten vanhan koneen komponenteille on tukea kerinnyt jo tulla vuosien saatossa.

Kone siis käyttövalmis. Olen tässä parin päivän aikana sitten laittanut siihen Nextcloud -tilin ja testannut että tiedostot synkronoituvat pilveen ja takaisin. Toimii.

Sähköposti ja kalenteri Thunderbirdiin ja olihan siellä Mintissä omakin kalenteri. Nyt ne kaikki myös synkronoituvat Nextcloudin ja Shellitin kanssa.

Chromium -selain oli asennettava, sillä halusin Mastodonia käyttää PWA -selainversiona, Firefox ei PWA:ta tue, pöh.

Libre Office tulee Mintissä mukana, jos sitä joskus sitten tarvitsee.

Mukavasti tuntuu toimivan, bootista 25 sekuntia ja ollaan sisäänkirjautumisikkunassa. Nukahtaa kannen sulkeuduttua, herää kannen avatessa. Asennuksessa kun valitsi Windows -näppäimistön asettelun, niin mukavasti Windows -painike avaa sovellusvalikon ja sen hakukenttä on aktiivinen. Langattomat Logitechin Pebble-hiiri ja K580 näppäimisto toimivat moitteetta.

## Muutama haaste löytyi

HP:n sormenjälkikirjautuminen ei toimi, en ole sitä enempää vielä kerinnyt tutkia.

Yhteystiedot olivat tulleet aiemmin kalenterin importin myötä hieman yllättäen. Nyt huomasin Thunderbirdissä, että niitä ei voinut editoida kun yritin siivota. Verkosta löytyi tieto, että syypää on Nextcloudin sovellus Contacts Interaction ja homma korjaantui kun sovelluksen otti Nextcloudissa pois käytöstä.

Kolmas haaste oli se, ettei tulostaminen Samsungin SCX-3400 -tulostimella onnistunut, vaikka Mintti oli sen automaattisesti löytänyt. Virheilmoituksella haku verkosta ja apu löytyi Mintin keskustelufoorumilta, nyt toimii.

## Homma etenee

Vaihe vaiheelta irtautuminen Googlesta etenee. Nyt varmaan totuttelen tähän uuteen maailmaan Linuxin parissa, vaikka ei tämä mitään ihmeellistä ole. Etenkin kun oma käyttö on nykyään niin peruskauraa, pääosin selaimella touhuamista. On mulla sitten Lenovon Windows 11 -läppäri musiikkityöasemana, mutta se on kokonaan toinen juttu.

Nämä Googlesta irtautumiseen liittyvät kirjoitukset ovat minulle pitkälti päiväkirjamaista toteamista, eikä niitä ole tarkoitettu oppaiksi. On ollut ilo huomata kuitenkin, että niitä on Fediversumin vaikutusesta luettu. Kiitos lukijoille ja kommentoijille. Jokaisella on omat tarpeet ja motiivit, näin tämä menee minulla.

Luulisin että seuraava vaihe minulla on alkaa käydä Google Drivea ja sen sisältöä läpi ja siirtää sieltä järkevät asiat Nextcloudiin. Loput roskiin.

Tarina jatkuu.

###### Fediverse -reaktiot
