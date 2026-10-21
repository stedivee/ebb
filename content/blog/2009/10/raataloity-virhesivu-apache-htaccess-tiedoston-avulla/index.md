---
title: "Räätälöity virhesivu Apache .htaccess tiedoston avulla"
date: 2009-10-04
categories: 
  - "yleiset"
tags: 
  - "apache"
---

Omalla erinomaisella palvelutarjoajallani [Nettihotelli.fi](http://www.nettihotelli.fi) on vakiona virhesivut eri tilanteita varten kuten tuo tyypillinen 404 Not Found -tilanne.

Näihin tarjolla oleviin virhesivuihin pääsee kyllä käsiksi FTP:llä, joten sisältöä ja ulkoasua voi helposti muuttaa mieleisekseen. Se, mikä ei onnistu, on niiden muuttaminen .php -tiedostoiksi, jolloin niihin saisi lisättyä hieman logiikkaa.

Onneksi oletusarvoiset virhesivut voi ohittaa. Sivuston juurikansiossa olevaa .htaccess -tiedostoa voi käyttää apuna ja käskeä Apache web-palvelimen käyttämään eri virhesivuja.

1. Tee ensin oma räätälöity virhesivu ja sijoita se esimerkiksi omaan kansioonsa http://munsivusto.fi/err/404.php  
    
2. Mikäli sivustosi juuressa on jo .htaccess -tiedosto, niin sinne täytyy lisätä muutama rivi ohjeita Apachelle.  
    Jos sinulla ei ole ennestään .htaccess -tiedostoa, niin tee ensin vaikka Notepadilla htaccess.txt -tiedosto ja siihen koodia: `#suojataan .htaccess -tiedosto <Files .htaccess> order allow,deny deny from all </Files>  #räätälöity 404 -sivu ErrorDocument 404 /err/404.php`  
    
3. Lataa htaccess.txt -tiedosto www-sivuillesi juurikansioon, ja nimeä se uudelleen .htaccess -nimiseksi, huomaa tuo piste nimen alussa.
4. Lataa myös uusi oma virhesivu palvelimellesi oikeaan kansioon.
5. Testaa selaimella hakemalla sivua, jota ei ole, sinut ohjataan omalle 404.php -sivullesi.

Huomaa, että jotkin selaimet eivät näytä sivuston virhesivua, mikäli virhesivu on pienikokoinen, tee siis siitä vähintään 512 kiloa. Myös jotkin selaimeen asennetut lisäosat ohittavat sivuston omat virhesivut, näin tekee mm. Alexa toolbar.

Ennenkuin aloitat, tee varmuuskopio alkuperäisestä .htaccess -tiedostosta, mikäli sinulla jo sellainen on!
