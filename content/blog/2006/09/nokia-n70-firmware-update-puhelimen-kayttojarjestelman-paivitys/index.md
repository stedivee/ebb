---
title: "Nokia N70 firmware update - puhelimen käyttöjärjestelmän päivitys"
date: 2006-09-02
categories: 
  - "it"
tags: 
  - "firmware"
  - "n70"
  - "nokia"
  - "phone-software-update"
  - "update"
---

Käytössäni on ollut puolisen vuotta puhelimena Nokian N70. Olen ollut melko tyytyväinen pienistä puutteista huolimatta, mm. pidempi akun kesto, suuremmat fontit olisivat hyviä juttuja.

Kokonaan toinen asia on sitten puhelimen ohjelmiston bugit. Kaikissa ohjelmistoissahan on bugeja, täydellistä ohjelmistoa ei kai ole kukaan vielä tehnytkään, vaikka ainahan sitä voi väittää vastaan ;) Omassa puhelimessani on ilmennyt mm. sellaista, että en ole saanut tekstiviestejä vaikka sellaisia on minulle lähetetty, samoin osa puheluista ei ole soinut, eikä edes näy ei vastattujen puheluiden lokissa. Kun sitten puhelimen on "bootannut", ovat ne toimittamatta jääneet tekstiviestit sitten pulpahtaneet puhelimeen. Harmillisia ongelmia, ja vielä aivan tärkeimmissä puhelimen perusominaisuuksissa!

Onhan tähän päivään astikin ollut mahdollista viedä puhelin huoltoon, jossa ohjelmisto olisi päivitetty, mutta nyt päivityksen voi tehdä itsekin vaikka kotoa käsin. Nokia on julkaissut ohjelman **Phone Software Update**, jonka avulla on mahdollista ladata puhelimeen uusin firmware ja päivittää puhelimensa käyttöjärjestelmä saman piuhan avulla, jolla voi käyttää mm. PC Suitea. Suomen Nokian sivustolta ohjelmaa ei vielä löydä, mutta löysin sen Nokian UK-sivustolta.

EDIT: Käyttöjärjestelmän päivitysohjelma löytyy siis myös Suomen Nokian sivuilta: [http://www.nokia.fi/asiakastuki-ja-ohjelmistot/ohjelmistot](http://www.nokia.fi/asiakastuki-ja-ohjelmistot/ohjelmistot)

Linkin takaa löytyy valikko, jossa voi valita oman puhelimensa malliin sopivan päivitysohjelman ja ladata sen itselleen. Tuetut mallit ovat  N70, N72, 6131, 6630, 6680, 6681 ja 6682. ![](images/vaihe1.gif) Asenna ohjelma tietokoneellesi käynnistämällä juuri lataamasi tiedosto **NokiaSoftwareUpdaterSetup.exe**

**Älä vielä ala kuitenkaan päivittämään puhelintasi, vaan tee ensin puhelimesi tiedoista varmuuskopio!!!** Puhelimen tiedot katoavat tyystin käyttöjärjestelmää päivitettäessä, joten varmuuskopio on välttämätön jollei halua aloittaa aivan tyhjästä. Nokian PC Suiten oma varmuuskopiointiohjelma on melko susi, se on hiiiiiidaaaaas. Onnistunut varmuuskopiointi kestää tolkuttoman kauan, itselläni yli 10-15 minuuttia :( Ei pidä lopettaa varmuuskopio-ohjelmaa, ennenkuin saa ohjelmasta ilmoituksen, muuten varmuuskopio on epätäydellinen. PC Suite harhaanjohtavasti ilmoittaa 100% valmis, vaikka se vasta tallentaa tietoja levylle, ja tallennus se juuri kestää kauan!!!

Vainoharhaisuus on tässä hyvästä, sillä yhteystietojen katoaminen voi olla vakava juttu. Hyvä idea on tehdä varmuuskopioita useampaan paikkaan, esimerkiksi yhteystietojen synkronoiminen Outlookin yhteystietoihin on hyvä lisävarmistus, ovatpahan postipalvelimella turvassa, mikäli se on käytetttävissä.

No sitten asiaan, itse päivitykseen. Ota esille kaikki tarvittava välineistö. Ja onhan käytössäsi Internet-yhteys.

- Puhelin tietokoneen viereen ja kytke se virtapiuhaan kiinni, sähkö ei saa loppua kesken kaiken
- PC Suiten käyttämiseen tarvittava piuha kiinni puhelimeen ja toinen pää tietokoneeseen

Aloita ohjelma asentamasi ohjelman kuvakkeesta.

![](images/vaihe2.gif)

Ohjelma käynnistyy ja ohjaa sinua vaihe vaiheelta eteenpäin.

![](images/vaihe3.gif)

Niin, muistithan varmuuskopioin?

![](images/vaihe4.gif)

Ohjelma tunnistaa puhelimesi ohjelmaversion ja mahdollisesti löytää Nokian palvelimelta siitä uudemman version. Hyväksy ehdot ja pääset eteenpäin. ![](images/vaihe5.gif)

Uuden version lataus. Tässä vaiheessa Windows ainakin minulla kilahteli muutamia kertoja tunnistaessaan koneelta jotain uutta.

![](images/vaihe6.gif)

Ja homma etenee.

![](images/vaihe7.gif)

Muistaakseni tässä vaiheessa puhelin menee pimeäksi itsekseen, siis boottaa automaattisesti. Itselläni ei puhelin käynnistynytkään, vaan sain alla olevan virheilmoituksen ja aloin jo kiroilla mielessäni...

![](images/vaihe8.gif)

![](images/vaihe9.gif)

No, akku irti ja akku kiinni, boottaus. Käyntiin lähtee ja kaikka data on kadonnut, niinkuin etukäteen kerrottiinkin. Olikohan päivitys onnistunut? Käynnistin Phone Software Update -ohjelman uudelleen ja se ilmoitti, ettei palvelimella ollut uudempaan versiota, oli tainnut sittenkin onnistua, ei vaan bootannut.

Ajoin kuitenkin varmuuden vuoksi koko ruljanssin uudestaan, ja sain onnistuneen bootinkin aikaiseksi.

![](images/vaihe10.gif)

Nyt siis firmware on uusinta uutta ja edessä on sisällön palauttaminen PC Suiten varmuuskopiosta. Niin, ja sen firmware-version voi tarkistaa puhelimestaan näppäilemällä:

\*#0000#

Minulla on nyt V 5.0616.2.0.3 24-04-06 RM-84 Koko prosessi on hieman mutkikas ainakin sellaiselle joka vierastaa tietotekniikkaa, mutta urheiluhenkisille nörteille tässä riittää puuhaa reiluksi tunniksi.
