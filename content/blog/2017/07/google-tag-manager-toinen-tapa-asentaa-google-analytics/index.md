---
title: "Google Tag Manager - toinen tapa asentaa Google Analytics"
date: 2017-07-10
categories: 
  - "it"
tags: 
  - "google-analytics"
  - "tag-manager"
coverImage: "GoogleTagManager-logo.png"
---

Web-sivuston kävijäseuranta on olennainen osa sivuston laadun ylläpidon ja kehittämisen työkalu. Google Analytics on tähän mainio maksuton työkalu. Seurannan käyttöönotto on periaatteessa helppoa, laitetaan vain sivustolle seurantaskripti asianmukaiseen kohtaan koodissa kaikille niille sivuille, joita halutaan analytiikassa seurata. Uusimman ja suositellun Universal Analytics -skriptin voi  asentaa sellaisenaan sivulle tai käyttämällä vaihtoehtoisesti Google Tag Manager -palvelua, joka on tagien hallintapalvelu. Mikäli sivustollasi on useampia seurantatageja, on niiden hallinta palvelun avulla helpompaa.

<!--more-->

> Voit lisätä ja päivittää AdWordsin, Google Analyticsin, Firebase-analytiikan, Floodlightin ja kolmannen osapuolen tageja ja muokattuja tageja Tag Managerin käyttöliittymän kautta sen sijaan, että muokkaisit sivuston koodia. Tämä vähentää virheiden määrää ja nopeuttaa työnkulkua, sillä tagien määritys ei enää edellytä kehittäjän apua.

Google Tag Manager (GTM) käyttää ns. säiliötagia (container), jonka avulla voi etäisesti "syöttää" sivustolle haluamiaan seurantakoodeja.

## Google Tag Manager käyttöönotto

Itse palveluun rekisteröityminen on helppoa. Käytä tunnistautumiseen Google -tiliä, joka on käytössäsi Google Analytics -palvelussa.

1. Suuntaa selaimella osoitteeseen [https://tagmanager.google.com](https://tagmanager.google.com)  ja luo Tag Manager -tili
2. Luo säilö (container) sivustollesi \[gallery ids="3720,3718,3719"\]
3. Laita säiliökoodi Web-sivuillesi ohjeiden mukaan.

Säiliökoodin liittäminen sivustollesi riippuu sivustosi toteuttamistavasta, se saattaa tuottaa eniten haasteita ensikertalaiselta. Itse käytän WordPress -järjestelmässäni itse tekemääni lisäosaa sekä GeneratePress -teeman tarjoamaa hookia, kerron tästä aiheesta enemmän artikkelissani  [Google Tag Manager käyttöönotto WordPpess -sivustolla](https://teuvovaisanen.fi/2017/07/13/google-tag-manager-kayttoonotto-wordpress-sivustolla/).

## Google Analytics Asetukset -muuttuja

Itse säiliökoodi ei vielä tee mitään sivustollasi, vaan seurantatagit täytyy luoda palvelussa ja julkaista sivustollesi säiliön avulla. Mikäli aiot käyttää useampaa tagia sivustollasi, kannattaa sivustosi uniikki seurantatunnus ja asetukset tallentaa muuttujiin, jotta et joudu syöttämään samoja tietoja joka tagille erikseen. Tämä nopeuttaa uusien tagien luomista ja vähentää virheitä.

1. Siirry selaimella Tag Manager -palveluun ja varmista että olet oikealla tilillä. Luo ensin Vakio (Constant) johon tallennat sivustosi seurantatunnuksen, siis sen sivustollesi yksilöllisen "UA-xxxxxxx" -stringin. **Muuttujat - Käyttäjän määrittämät muuttujat - Uusi**  anna muuttujalle kuvaava nimi, esim. ******My Site Tracking ID******
2. Valitse muuttujan tyyppi **Apuohjelmat - Vakio** (Constant) ja lisää Analytics -tililtä saamasi sivuston UA -koodi ja tallenna
3. Tee vielä uusi muuttuja ja valitse nyt tyypiksi **Apuohjelmat - Google Analytics Asetukset** Anna taas fiksu nimi ja nouda juuri edellä tekemäsi vakio Seurantatunnus -kentän vieressä olevan mustan "legopalikan" avulla. Jätä Evästeverkkotunnus arvoon auto ja muut asetukset koskematta. Tallenna.

\[gallery ids="3737,3738,3739,3740,3741,3742"\]

Nyt seuranta-asetukset on kätevästi tallennettu Google Analytics Asetukset -muuttujaan ja aina kun teet uuden tagin, voit helposti hyödyntää muuttujaan tallennettuja asetuksia.

## Universal Analytics seurantakoodi GTM:n kautta

Lopuksi se olennainen, eli Universal Analytics seurantakoodi sivustollesi.

Tee uusi Tag seuraavilla asetuksilla:

**Tagin määritys** (Tag configuration)

- Tag Type: Universal Analytics
- Track Type: Page View
- Google Analytics Settings, valitse aiemmin tekemäsi asetukset muuttuja

**Triggerit** (Triggers)

- All Pages

\[gallery ids="3748,3746,3745,3744"\]

Tallenna Tag

Nyt luotu Tag on vielä julkaistava sivustolle.

1. Valitse Tag Manager -palvelun oikeasta yläkulmasta **Lähetä** (Submit)
2. Anna versiolle nimi ja haluamasi selitteet
3. Valitse **Julkaise** (Publish)

\[gallery ids="3752,3753,3754"\]

 

Voit toki testata tagin toimivuuden ennen julkaisua Esikatsele (Preview) -toiminnolla, tai jälkikäteen käyttämällä Analyticsin Realtime Reports -raporteilla tai Chrome -selaimeen saatavalla lisäosalla **Tag Assistant**, josta aion kirjoittaa myös joskus erikseen. Mikäli sivustollasi on ennen GTMää ollut käytössäsi manuaalisesti "copypastella" asennettuja seurantaskriptejä, tulisi ne nyt siirtää GTM -palvelun alle. Erityisesti kannattaa huolehtia, ettei perinteinen GA -seurantakoodi ole GTMn käyttöönoton jälkeen enää rinnalla tuplana käytössä.

 

Lisäluettavaa: Google Tag Manager ohjeet [https://support.google.com/tagmanager/?hl=fi#topic=3441530](https://support.google.com/tagmanager/?hl=fi#topic=3441530)

ja [Tag Manager asennus WordPress -sivustolle](https://teuvovaisanen.fi/2017/07/13/google-tag-manager-kayttoonotto-wordpress-sivustolla/) -artikkeli tältä sivustolta
