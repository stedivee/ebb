---
title: "ActivityPub test"
date: 2023-09-18
categories: 
  - "yleiset"
tags: 
  - "activitypub"
  - "fediverse"
  - "wordpress"
---

Miksi WordPress -sivuston eheysraportti sanoo ActivityPub -lisäosan tuottavan kriittisen ongelman, vaikka federointi taitaa toimia kuitenkin? Tätähän tällä postauksella testaan.

> Kirjoittaja URL `https://teuvovaisanen.fi/author/kirjautunut_tunnus/` ei palauta kelvollista JSON koodia `application/activity+json`. Ole hyvä ja tarkista että hosting palveluntarjoajasi tukee vaihtoehtoisia `Accept` headereita.

Minullahan on kaikkien kirjoittajien koostava asetus, jossa kaikkien kirjoittajien artikkelit pusketaan yhden tunnuksen taakse.

>  stedi@teuvovaisanen.fi
> 
> Tämän profiilin nimissä federoidaan kaikki blogisi julkaisut riippumatta siitä kuka on alkuperäinen kirjoittaja.

Testaan samalla kirjoituksen päivittämistä ja sen näkymistä Fediversumissa. Hienostihan tuonne Mastodoniin näyttää puskevan lähes reaaliajassa muutokset, jotka tänne alkuperäiseen viestiin teen.

Eikä tuo asetus "Ote - Lyhennelmä sisällöstä, lyhennetty 400 merkkiin ilman merkkauskieltä." oikein näytä pelittävän. Kokeillaanpa räätälöityä ja mallitägejä. Sisällöstä ei tuo näytä raapaisevan mitään 400 merkkiä, mutta jos kirjoittaa Ote -kenttään, niin sen saa näkyviin.

Tuolla lisäosan tukisivustolla on jotain keskustelua tuosta sivuston eheys -raportista ja päättelenpä siitä, että lastentauteja varmaankin, onhan tuo vasta versiossa 1.0.
