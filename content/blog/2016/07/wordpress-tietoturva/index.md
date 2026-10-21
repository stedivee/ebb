---
title: "WordPress tietoturva"
date: 2016-07-17
categories: 
  - "it"
tags: 
  - "google-authenticator"
  - "jetpack"
  - "tietoturva"
  - "wordpress"
---

WordPress on yksi maailman suosituimmista järjestelmistä ylläpitää Web -sivustoja.  Laajan suosion syy on tietty laadukas ja helppokäyttöinen ohjelmisto. Suosiosta on myös haittaa. Krakkerit tuppaavat tekemään haittakoodia ja yrittävät murtautua järjestelmiin, jotka ovat yleisesti käytössä. WordPressin voi tehdä tietoturvallisemmaksi melko helposti, ei se mitään rakettitiedettä ole.

<!--more-->

## WordPressin automaattinen päivitys

WordPress -ohjelmisto on päivittynyt automaattisesti versiosta 3.7 lähtien. Se on erinomainen ominaisuus, joka auttaa pitämään ohjelmiston koodin aina uusimpana, bugikorjauksia ja tietoturvapäivityksiä tulee ohjelmistoon säännöllisesti. Tämä ominaisuus pitää mm.  perus "core" -koodin tuoreimpana. Itse käytän automaattipäivitystä kontrolloidusti **Easy Updates Manager** -lisäosan avulla, sillä haluan itse päättää mm. milloin teeman tiedostot päivittyvät.

Lue lisää automaattisesta päivittymisestä: [https://codex.wordpress.org/Configuring\_Automatic\_Background\_Updates](https://codex.wordpress.org/Configuring_Automatic_Background_Updates)

## Tietoturvaa lisäosilla

Lisäosat eli pluginit ovat olennainen osa WordPress -sivuston muokkaamiseksi mieleiseksesi. Lisäosilla saa myös lisättyä tietoturvaa sivustoosi. Olen itse kokeillut / käytän erinäisiä lisäosia, kuten esimerkiksi:

- **JetPack** - siinä on useampiakin tietoturvaan liittyviä ominaisuuksia otettavissa käyttöön
- **Google Authenticator** - kaksivaiheinen vahvistus, eli pelkkä tunnus ja salasana ei riitä kirjautumiseen, vaan tarvitaan jotain lisää. [Kirjoitin kaksivaiheisen vahvistamisen käyttöönotosta jokin aika sitten](https://teuvovaisanen.fi/2016/06/23/kaksivaiheinen-tunnistautuminen-wordpress-sivustolle/).

Automaattiset päivitykset, valikoidut lisäosat ja muutamat muut pienet lisäkeinot apunani ja WordPress -sivustoni on hyökkäyksiltä paremmassa turvassa. Sivustooni ei toistaiseksi ole murtauduttu, tai ainakaan en ole sitä vielä huomannut ;)

## Lisää luettavaa WordPress tietoturvasta

WordPress -ohjelmiston kotisivuilla on hyvä tietopaketti tietoturvasta: [https://codex.wordpress.org/Hardening\_WordPress](https://codex.wordpress.org/Hardening_WordPress)

Yoast blogikirjoitus aiheesta: [https://yoast.com/wordpress-security/](https://yoast.com/wordpress-security/)
