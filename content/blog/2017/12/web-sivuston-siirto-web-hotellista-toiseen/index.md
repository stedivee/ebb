---
title: "Web-sivuston siirto web-hotellista toiseen"
date: 2017-12-03
categories: 
  - "it"
tags: 
  - "web"
  - "web-hosting"
coverImage: "muutto.png"
---

Siirsin oman Web-sivustoni palveluntarjoajalta toiseen, nytkin suomalaiseen Web-hotelliin. Muistui fläshbäkkinä samalla mieleen alkutaipaleeni WordPress -sivuston perustamisen kanssa 2000 -luvun alussa. Laitoin silloin sähköpostia kolmeen suomalaiseen web-hotelliin kysyäkseni WordPress -hostingista, yksikään ei vastannut, olematonta asiakaspalvelua! Tympiinnyin suomalaisiin web-hotelleihin, siispä ostin hostingin ulkomailta pienellä googlailulla, vai oliko se altavistailua silloin ;) Ulkomaiselle hostingille lähettämääni sähköpostiin vastattiin 15 minuutissa, siispä tein kaupat.

Onneksi myöhemmin palvelu on parantunut kotimaassakin, siirsin sitten ajan kulussa sivustoni takaisin Suomeen, kun alkoi saada palvelua täälläkin.

Miksi vaihdoin "taas" Web-hotellia? Olin ollut edellisellä suomalaisella palveluntarjoajalla vuodesta 2009 lähtien ja ollut tilanteeseen pääosin tyytyväinen. Asiakaspalvelu oli aina toiminut vikkelästi ja moitteetta, jos sitä ylipäätänsä oli tarvinnut. Syyt vaihtoon koostuivat monesta pienestä asiasta summana.

- Hinta suhteessa hosting-paketin ominaisuuksiin parani selvästi
- SSL -suojaus kuuluu nyt paketin hintaan, myös alidomaineilla
- Ekologisuus - nykyinen toimii tuulisähköllä
- Oli jo aika kokeilla jotain toista palveluntarjoajaa

## Kuinka web-hotellin vaihto tapahtuu?

Ennen vaihtoa on syytä huolehtia olemassa olevan sivuston varmuuskopionnista ja ottaa selvää kuinka sivusto voidaan nopeasti palauttaa uuteen.

Itselläni työvaiheet olivat pääpiirteittäin näin

1. Tarkistin FTP -ohjelmalla vanhan palveluntarjoajan palvelusta hallussani olevat kansiot, siirsin kaiken talteen tietokoneen kovalevylle varmuuden vuoksi. Osa sisällöstä ei nimittäin ollut WordPress -järjestelmässä, niin ei ole jatkossakaan.
2. Vanhan sopimuksen irtisanominen ja sivuston domainin välittäjänvaihtoavaimen pyyntö vanhalta palveluntarjoajalta.
3. Kun sain välittäjänvaihtoavaimen (pari päivää), tein uuden palveluntarjoajan kanssa sopimuksen ja maksoin samantein. Tilauksen yhteydessähän annetaan samalla välittäjäavain, jotta domainin siirto onnistuisi uudelle palveluntarjoajalle.
4. Kun sain uudelta palveluntarjoajalta tunnukset uuteen web-hotellipalveluun, konfiguroin yleiset asetukset ja sähköpostitilit kuntoon.
5. Kun olin valmis aloittamaan siirron, muutin itse uudessa palvelussa vanhan hostingin nimipalvelimet uuden hostingin nimipalvelimiin.
6. Kun nimipalvelut näyttivät osoittavan uuteen paikkaan, aktivoin SSL:n
7. Asensin uusimman WordPressin palveluntarjoajan asennusskriptillä.
8. Varmuuskopiointilisäosan asennus. Lopuksi vanhan sivuston varmuuskopion palautus uuteen asennukseen.

Pääpiirteissään siirto tapahtui edellä kuvatulla tavalla. Nimipalvelimien muutosten ja uuden WP asennuksen kanssa meni kolmisen tuntia (kohdat 5-8), sen aikaa sivusto oli osittain poissa käytöstä. Sen jälkeen kaikki vaikutti toimivan kuten ennenkin. Meni niin kuin Strömsöössä ;)
