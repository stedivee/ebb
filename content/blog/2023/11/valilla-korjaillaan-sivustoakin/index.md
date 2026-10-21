---
title: "Välillä korjaillaan sivustoakin"
date: 2023-11-23
categories: 
  - "it"
tags: 
  - "wordpress"
  - "wp-cli"
---

Äkkiä kävikin niin, etten enää päässyt kirjautumaan omalle sivustolle, vaan kirjautumissivu ohjautui 404 -sivulle. Arvasin sen johtuvan lisäosasta, jolla piilotetaan alkuperäinen kirjautumissivu. Sellainen oli ollut käytössäni pitkään, ihan menestyksekkäästi, kunnes kosahti. Lisäosan kehittäjä ei varmaan ollut kerinnyt reagoimaan uuteen WP -versioon eikä siis päivittänyt lisäosaa.

Lisäosan voi disabloida monella tapaa, mm. nimeämällä kansion ja/tai poistamalla sen kokonaan. Näin teinkin, vaan uudelleenohjaus oli rikki senkin jälkeen. Ajattelin kokeilla FTP:n sijasta WP-CLI -työkalua, eli SSH -yhteydellä käytettävää komentorivityökalua. En ollut ennen sitä kokeillutkaan.  
Hosting -palvelun ohjeissa oli tiedot sen käyttöönotosta, tein prikulleen ohjeiden mukaan. En saanut WP-CLI:tä toimimaan. Yhteys hostingin asiakaspalveluun. Ohje olikin vanha, poistivat sen onneksi samantien ja sain korjattua WP-CLI:n toimivaksi nanottamalla pois lisäämäni rivin .bashcr -tiedostosta.

Kaikenlaisten vetkuttelujen jälkeen sain vihdoin kirjautumissivun ilmestymään uudestaan, eikä se enää ohjautunut 404:lle. Lohduttavaa, osasin vielä jotain, vaikka suurin into nördäilyyn on hiipunut.
