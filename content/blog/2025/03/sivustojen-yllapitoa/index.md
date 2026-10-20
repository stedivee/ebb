---
title: "Sivustojen ylläpitoa"
date: 2025-03-19
categories: 
  - "it"
tags: 
  - "litespeed"
  - "tietoturva"
  - "wordfence"
  - "wordpress"
---

Maaliskuun alkupuolella osallistuin WordPress Meetup -tapahtumaan Helsingissä. Aiheena oli WordPress tietoturva, otsikolla **How to (not) get pwned?**  
Se oli erinomainen luento ja sen vaikutuksesta päätin yrittää tutkia sivustoni tietoturvan tilannetta.

Minulla ei ollut mitään etest testrityistä tietoturvalisäosaa asennettuna sivustollani, vaan olin tehnyt jotain suojauksia .htaccess -tiedoston avulla sekä muutamia suositeltuja asetuksia Uudelleenohjaus - Redirection -lisäosan avulla. 2FA oli tietysti käytössä ja Limit Login Access -lisäosa (maksuton versio) sekä olin muuttanut sisäänkirjautumisen pois oletusosoitteesta /wp-admin/.  
Olin luottavainen.

No, asentelin sitten tietoturvalisäosan, Wordfencen (maksuton versio).  
Kun vihdoin todella usean yrityksen jälkeen sain tietoturvaskannauksen menemään läpi, selvisi, että sivustolla on neljä kutsumatonta tiedostoa. Tämähän oli tietysti järkytys. Tiedostot poistettiin.

Aloin virittelemään enempi Wordfencen asetuksia kuntoon. Harmitti kun sen tietoturvaskannaukset eivät millään meinanneet mennä läpi. Asiaa tutkittuani selvisi, että hostingissani käytössä oleva web-palvelin LiteSpeed katkoo skannauksia. Asian kuntoon saattamiseksi tarvitaan asetuksia palvelimelle. Nämä selvisivät mm. artikkelista [https://www.wordfence.com/help/advanced/system-requirements/litespeed/](https://www.wordfence.com/help/advanced/system-requirements/litespeed/) ja saman neuvon sain myös hostingin tuesta, kun sieltäkin asiaa kyselin.

Oli siis .htaccess -tiedostoa muokattava ohjaamaan LiteSpeediä olemaan katkomatta skannauksia. FTP\_ohjelma Filezilla peliin ja sivustolle muokkaamaan. Ja kas, tämän .htaccess -päivityksen jälkeen skannaukset lähtivät rullaamaan moitteetta, mainiota.

Viikon harjoittelumoodissa ollut Wordfencen palomuurikin oli alkanut toimimaan ja paljon on jo tullut blokattua hyökkäyksiä pitkin maailmaa. On tämä Internet paha paikka.  
Laitoin samalla LiteSpeed Cache -lisäosan asetukset parempaan kuosiin. Minullahan on hosting-paketissa tuo LiteSpeed Cache palveluna päällä. Ihan mukavat tulokset Pagespeed Insights -palvelusta.

Kaiken kaikkiaan nyt tuntui hyvältä, kun Wordfence nyt toimii kunnolla, sivusto on ainakin paremmassa "hoidossa" kuin aiemmin.  
Tämä kunnossapitotyö aiheutti sitten ylläpitovyöryn toiseenkin ylläpitämääni sivustoon, sielläkin Litespeed. Tuli tehtyä samat konffaukset sinnekin. Sieltä ei skannauksessa löytynyt haittoja.

Kuinkas ollakaan eräs vanha asiakkaani otti yhteyttä ja pyysi minua päivittämään sivustonsa (2 kpl).  
Tein hänen sivustoilleen kaikki päivitykset sekä niillekin vastaavat tietoturvatoimenpiteet, siellä myös LiteSpeed -palvelin. Kummankin sivuston skannauksessa löytyi yksi haitallinen tiedosto, jotka samantien poistettiin. En ole niiden sivustojen ylläpitovastuussa, mutta omistaja on arka tekemään itse mitään, joten olen auttanut pyydettäessä. No nyt puhtaat versiot on varmuuskopioitu ja ohjeet varmuuskopiointiin hänelle kirjoitettu. Ehkä se pitää vierihoitona vielä sivustojen omistajalle näyttää.

