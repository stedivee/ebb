---
title: "Lisää paikannustieto sivustoon/blogiin"
date: 2004-11-30
categories: 
  - "it"
tags: 
  - "blogi"
  - "web"
---

Käy ensin etsimässä oma kotopaikkasi täältä: [http://www.getty.edu/research/conducting\_research/vocabularies/tgn/](http://www.getty.edu/research/conducting_research/vocabularies/tgn/) Sieltä saat kaikenlaista tietoa kotipaikastasi.

ID on paikan tunnus ja se laitetaan kotisivun head-osion metakomentoihin esimerkiksi XHTML:ssä näin: `<meta name="tgn.id" content="7009880" />`

Paikan nimi tulee esimerksiksi näin: `<meta name="tgn.name" content="Helsinki" />`

Ja valtio näin: `<meta name="tgn.nation" content="Finland" />`

Samalta sivulta saa koordinaatit desimaaleina ja asteina. Helsingin koordinaatit lisätään GEO-tagein desimaaleina näin: `<meta name="geo.position" content="60.1;25" />` Tietenkin jos sinulla on GPS-laite, niin saat tarkemman sijaintisi suoraan siitä, tai voit etsiä koordinaattisi osoitteen perusteella täältä: [http://www.maporama.com/share/](http://www.maporama.com/share/)

Muita sijaintiin liittyviä komentoja ovat mm. `<meta name="geo.placename" content="Helsinki, Finland" />` `<meta name="geo.region" content="FI-ES" />` `<meta name="geo.country" content="FI" />`

Lisätietoa: [http://geotags.com/geo/geotags2.html](http://geotags.com/geo/geotags2.html) geo-tageista [http://geotags.com/geo/DMS3.html](http://geotags.com/geo/DMS3.html) geo-tag generaattori

Kun paikannuskoodit saat sivustosi etusivun HTML-koodiin lisätyksi, voit käydä vaikka rekisteröitymässä A2B-palveluun osoitteessa [http://www.a2b.cc/](http://www.a2b.cc/) jonka jälkeen pääset etsimään samaisesta palvelusta sinua lähellä olevia sivustoja.
