---
title: "Kaksivaiheinen tunnistautuminen WordPress -sivustolle"
date: 2016-06-23
categories: 
  - "it"
tags: 
  - "google"
  - "tietoturva"
  - "wordpress"
---

## Lisäturvaa WordPress -sivustolle kirjautumiseen

Käyttäjätunnus ja salasana, sillähän sitä yleensä tunnistaudutaan verkossa oleviin palveluihin, näin myös WordPressissä. [Kaksivaiheinen tunnistautuminen](https://fi.wikipedia.org/wiki/Kaksivaiheinen_tunnistautuminen) antaa lisäturvaa, sillä salasanan lisäksi on kirjautumisen yhteydessä annettava jotain muutakin, yleensä alati muuttuva PIN -koodi.

<!--more-->

### Google Authenticator

Google tarjoaa omiin palveluihinsa kirjautumiseen kaksivaiheista vahvistusta (2-step authentication) . Tämän voi ottaa käyttöön oman [Google -tilin tietoturva-asetuksissa](https://myaccount.google.com/security). Tarvitset Android- tai iPad-laitteeseesi **Google Authenticator** -sovelluksen, ne saat maksutta mobiililaiteeseesi Play Kaupasta / Appstoresta.

Lisätietoa: [Google kaksivaiheinen vahvistus](https://www.google.com/intl/fi/landing/2step/)

### Authenticator ja WordPress.com -palvelu

WordPress.com -palvelussa voi ottaa tämän Googlen tarjoaman tunnistautumispalvelun käyttöönsä tunnuksen ja salasanan rinnalle helposti. Siihen on kattava englanninkielinen artikkeli verkossa: [Security - Two Step Authentication](https://en.support.wordpress.com/security/two-step-authentication/)

### Oma WordPress ja Authenticator

Omaan / Web-hotellin serveriin sijoitettuihin WordPress -asennuksiin Googlen kaksivaiheisen vahvistamisen saa käyttöönsä lisäosan avulla.

Lisätietoja ja linkit lisäosiin WordPress Codex artikkelissa: [Two Step Authentication](https://codex.wordpress.org/Two_Step_Authentication)

## Google Authenticator -lisäosa ja WordPress

Otin vast'ikään omalle sivustolleni käyttöön [Google Authenticator -lisäosa](https://wordpress.org/plugins/google-authenticator/)n. Se kävi helposti, sillä minulla oli jo käytössäni Andoid-puhelimessa Authenticator -sovellus.

1. Lisäosan lataus sivustoon, lisäosan aktivointi
2. Omassa käyttäjäprofiilissa **Käyttäjät - Omat tietosi** Authenticator -asetuksissa aktivointi ja asetusten tallennus
3. Sen jälkeen kirjautuminen WordPressiin muuttuu näin:![](images/WTZLDx4_2b0IXG0O5z9RY6W0N0J6HbniHXab1B3YDDb2Ig42bYt_mttUgAHyzz0x45WUg2lnShnuU7RfBP0nCp_HeXYK9Nv2syHNfpxIoWXU-p3opHzI5KG0vlOdBP1Qrj9p5Ceza3rjxYH91-8oxKaBQBTWcjWQOk_tTkMRenPcEXzPjt2R1hpCXetCLDZrx571Fx31MivpPCifmqXUlFpBLp-nDys1JrdE7sMQLFkP0CypWnJjOFIfzhZHkQurWgo7DmkOjZcY2-epqesV9RUwVend7-KbRyacHI9Ss92xGPDzwBcrKGMPI1Za26S6rQq5LzCVPFikVnWxYlbcRJxtv-PDsbOmbQqTY240T42iSP9GoXdje6FopKFmolxCUR7reO-0Sx-Hs5Kf-eljtlBvyjixn-HaRN-UgmeL06xqdlA5B_UexrtkjQtdAam0UYPC01AUXLgV_0y7zj7VN4A0Z077qnr6Q31usOMTPvcslGp3lynkFQFb_K-zYrZhdZKpjNhylASH90Ez5yBgFEud_oNjU7lbh995orwdVenehgyJuvTOve4GZTZcYH9XiNiqY1WkAbnKtD4qKmrNuaxT3baxyzi8=w426-h626-no)
4. Tarvitset puhelimesi Authenticator -sovelluksen generoiman vaihtuvan PIN -koodin![](images/-vilLrY2MUCCEYx8tKA7ykDuH9wBhtJlqZRHWMuPz9hfw7dGgcOXoy2VYA6LEworkV41Ia-2Z55RnT1NetYb-nWm7eJAQE8iBetC-5oDuz_8uulStzQ3XUPAVDEi1IP3HnYi-O1qMb8Yk8EkN0sSBplM-W0qevP_DLgu5EFGKgT_DxOEJygfCaKTJur0TcD86xy3Epb77FlyXodxOeJNDRTtDudyKpV8QC-5TW-GKGTRocmDNL8SvAopYin20VyKWVWlFbnlEwiBb4mOuD0spOvoZYc5ytqXnzYcWbJoE9YgVNuokNMddP-ga1RnZFOfhJIVk7eR8CNuzYoIKwt6VdmXEYIGAxtj3H45UoUnEs1JZtqFaHnmut7jYqgyRdJF8GUXpN1Iq1XiKjmPsFr36Q1HKu2ulmaNpuuwEkmxgGNOLjuNP6rNz5W-E_a2x7H_9tvguC5kLfgiJpi7uihMsWrzws6Jp3GA3cWehpRsfztxU485HI6MDyBUZc1YPrpSQqTdahjQ-Du1lrdcee6a8o1pt_1n7a2P4lIz7PksM5SxzIEIsR18TKbotOjwCVxljclNmcU1RmPq6mhgmCW8peY0mGb7qxC4=w532-h943-no)

Kaksivaiheinen tunnistautuminen tuo tietenkin lisävaiheen sivustolle kirjautumiseen, mutta se on pieni vaiva. Itse koen ominaisuuden tarpeelliseksi, sillä joudun usein koulutuksissani demoamaan WordPress -sivustoa ja joskus lipsahtaa salasana näkyviin oman huolimattomuuden vuoksi. Nyt ei käyttäjä-tunnuksen ja salasanan "näkeminen" enää riitä, vaan vaihtuva PIN -koodi turvaa sivuston.
