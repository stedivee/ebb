---
title: "Oma palvelin pystyssä"
date: 2005-04-07
categories: 
  - "it"
---

Sain vihdoinkin aikaiseksi jatkaa oman palvelimen pystyttämisprojektia, jonka aloitin helmikuussa. Pieni pitsalaatikko oli tähän asti ollut ilman virtaa tuossa lattialla vartoamassa ISP:n vaihtoa. Nyt uuden ISP:n myötä kytkin virrat päälle ja koneen kiinni verkkoon.

WWW-palvelinhan tarvitse osoitteen, jotta siihen saisi liikennettä aikaiseksi, niinpä "rekisteröin" itselleni osoitteen, jolla koneeseen pääsee helpommin käsiksi kuin pelkällä IP-osoitteella. [http://teuvo.dyndns.tv](http://teuvo.dyndns.tv) \-osoitteen hankkiminen oli helppoa ja ilmaista [http://www.dyndns.org/](http://www.dyndns.org/) -palvelussa, jolla on tarjolla 48 erilaista domainia joista valita.

Käyttämässäni ADSL-reitittimessä on ominaisuus, jolla ISP:n jakama dynaaminen ip-osoite pidetään synkassa. Mikäli ip muuttuu, hoitaa reititinpurkki muutoksen ilmoittamisen tuonne DYNDNS-palveluun. Reitittimessä sitten ohjataan porttiin 80 tulevat pyynnöt sisäverkossa tuolle www-palvelinkoneelle, kätevää.

Nyt enää pitää ihmetellä mitä sillä www-palvelimella oikein tekisi? ;) EDIT: ei enää omaa palvelinta!
