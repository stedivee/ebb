---
title: "Blogin päivitys ja siirto uuteen domainiin"
date: 2010-12-30
categories: 
  - "it"
tags: 
  - "blogi"
  - "wordpress"
---

Päätin syksyllä luopua teuvo.vaisanen.name domainista pitkälti siitä syystä, että brittiläinen toimittaja kiskoi siitä aivan liian suolaista hintaa. Pitäydyn tästä lähtien kotoisasti .fi päätteisessä domainissa, sillä olenhan tätäkin domainia maksanut jo muutaman vuoden. Yksi saa riittää, teuvovaisanen.fi

Domainin muutos tietää ongelmia hakukoneissa, mutta ennen kaikkea itse asennuksessa. Nyt vastikään tuon name-domainin lakattua toimimasta oli kaikki blogin sisältökuvat rikki, sillä ne osoittivat vanhaan domainiin. Siispä korjaamaan.

Korjaus oli yksinkertainen toteuttaa.

1. Tietokannasta varmuuskopio Backup pluginilla
2. Varmuuskopion .sql tiedostosta duplikaatti,
3. Duplikaattia muokkaamaan tekstieditorilla, search and replace -toiminnolla vanha URL ja vanha email uusiksi
4. Selaimella web-hotelliin ja tietokantaa muokkaamaan phpmyadmin :illa, kaikki taulut pois (drop) tietokannasta
5. Muokattu .sql -tiedoston palautus tietokantaan, ja sillä sipuli

Toki itse WordPressin asetuksissa oli muutettava hallinnointikonsolista uudet osoitteet, nämä tein aivan ensimmäiseksi, jonka jälkeen tuo tietokannan rustailu.

Koko hommaan meni viitisen minuuttia ilman yhtäkään ongelmaa.

Nyt enää puuttuu inspiraatio kirjoittamiselle, se onkin ollut kateissa, blogiväsymystä?
