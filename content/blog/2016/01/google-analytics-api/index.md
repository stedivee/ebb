---
title: "Google Analytics API kokeiluja"
date: 2016-01-30
categories: 
  - "it"
tags: 
  - "analytics"
  - "google-analytics"
---

Google Analytics Web-analytiikkaohjelmisto on vuosien saatossa kehittynyt huimasti siitä ajasta kun ensimmäisen kerran sitä käytin, en edes muista vuotta enää ;)  (dementia?) Silloinhan se ei ollut Analytics nimeltäänkään, vaan Urchin, ja Googlen tekemän yritysoston seurauksena Google kehitti siitä SaaS -pohjaisen Analytics palvelun. Googlella on pitkään ollut palveluun tarjolla myös erilaisia ohjelmointirajapintoja, joilla kehittäjät voivat tehdä omia sovellutuksiaan käytössään olevasta datasta. Sain vihdoin itseäni niskasta ja tein muutamia kokeiluja APIn parissa.<!--more-->

Vuosia sitten julkaisin säännöllisesti staattisia raporttikuvia oman sivustoni käyttäjien selaimista. Nyt raapaisin pitkästä aikaa vastaavan raportin käyttäen APIa ja tein raportista automaattisesti päivittyvän. Se oli helppoa :), aikaa meni viitisentoista minuuttia ohjeisiin tutustumiseen ja itse toteuttaminen vei vähemmän aikaa. Koko raportointi rakentuu Google Sheets taulukkolaskentaan ja siinä oleviin raportteihin, jotka voi ajastaa päivittymään haluamanaan ajankohtana. Toki, voihan sitä JavaSriptillakin tuon APIn kautta homman rakentaa, mutta tällä kertaa näin.

Haasteena täällä web-sivulla on noiden raporttien näkyminen mobiililaitteiden pienillä näytöillä, mutta ehkä ratkaisen sen fiksummin toisella kertaa, nyt sivuttaisskrollauksella.

Tässä tämän sivuston yleisimmät selaimet viimeiseltä 30 päivältä:

<iframe src="https://docs.google.com/spreadsheets/d/1hr33gbrRSsQqLKdpc_6PBCdOXucOZ7Lz5UXZfXNOPrM/pubchart?oid=501514493&amp;format=interactive" width="600" height="371" frameborder="0" scrolling="yes" seamless=""></iframe>

Ja kun yhden raportin saa tulostettua, niin nälkä kasvaa syödessä. Tässä hieman kävijädataa tältä sivustolta. Nämäkin päivittyvät automaattisesti. Hetki meni aikaa ennen kuin keksin miten saa taulukkolaskennassa kuluvan viikon maanantain. `=TÄMÄ.PÄIVÄ() -(VIIKONPÄIVÄ(TÄMÄ.PÄIVÄ();3))`

<iframe src="https://docs.google.com/spreadsheets/d/1hr33gbrRSsQqLKdpc_6PBCdOXucOZ7Lz5UXZfXNOPrM/pubchart?oid=391838982&amp;format=interactive" width="600" height="371" frameborder="0" scrolling="yes" seamless=""></iframe>

Juu, eihän tämä kävijämääriltään mikään hittisaitti ole ;)

<iframe src="https://docs.google.com/spreadsheets/d/1hr33gbrRSsQqLKdpc_6PBCdOXucOZ7Lz5UXZfXNOPrM/pubchart?oid=1257982093&amp;format=interactive" width="600" height="371" frameborder="0" scrolling="yes" seamless=""></iframe>

Verkossa löytyy mittava määrä hyvää dokumentaatiota APIn käytöstä. Täältä on hyvä aloittaa opiskeleminen:  [https://developers.google.com/analytics/?hl=en](https://developers.google.com/analytics/?hl=en)

Ja lopuksia pienenä muistutuksena, että minulta löytyy [Google Analytics kurssejakin](https://teuvovaisanen.fi/kurssit/).
