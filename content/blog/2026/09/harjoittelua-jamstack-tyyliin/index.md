---
title: "Harjoittelua Jamstack-tyyliin"
date: 2026-09-13
categories: 
  - "it"
tags: 
  - "11ty"
  - "eleventy"
  - "indieweb"
  - "jamstack"
---

Vajaa kaksi vuotta sitten tutustuin ensi kertaa moderneihin **static site generator** -tyyppisiin tapoihin tehdä webbisivuja. Siis kilkkeisiin kuten **Hugo**, **Jekyll** ja **Eleventy** näin esimerkkeinä. Kilke on ehkä turhankin vähättelevä termi, mutta sellaisina ne koin silloin aluksi. Yksinkertaistettuna työskentely noilla alustoilla yleensä tarkoittaa sitä, että jollain koodieditorilla tehdään sivuja ja taltioidaan ne pilveen ja versionhallintaan kuten **Github**, **Gitlab**, **Codeberg** jne. ja sieltä käännetään sivustoksi automatisoiden julkaisun jonnekin hostattuun palveluun, josta sivusto on sitten asiakkaiden selattavissa.

Henkilökohtaisesti en ole koskaan tehnyt oikeaa sivustoa tuon tapaisella työskentelytekniikalla. Staattisia sivuja toki tehnyt ja FTP/SCP -työkaluin sitten ujuttanut sivustot kovalevyltä hostingin palvelimelle, tosi "old school". Staattisilla sivuilla on paljon etuja perinteisiin julkaisujärjestelmiin verrattuna kuitenkaan nyt niitä tässä sen enempää pureskelematta. Ensimmäiset ammatikseni tekemät sivut olivat Frontpagella työstetyt Finladia hotellit-ketjun sivusto, 53 hotellia. Se sivusto oli staattinen ja samalla työnäyte alan vaihtoon ;) Minähän olin hotellipäällikkö, enkä koodari.

Myöhemmin Tieturin webmasterina ollessani Frontpageen yhdistettiin vielä versionhallinta Visual Source Safen avulla, joo Tieturi oli silloin Microsoft-talo (Gold Certified Partner). Tieturin sivusto oli staattinen pääosin, mutta osa sivuista käytti tietokantaa apuna. Frontpage oli silloin 90-luvulla relevantti työkalu. Vaihdoin jatkossa Frontpagesta Dreamweaveriin ja rakentelin staattista sivustoa Adoben työkaluilla. Sitten siirryimme Microsoftin Content Management Serveriin, se olikin sitten kokonaan tietokantapohjaista touhua, samoin kuin Sharepointilla rakentamani Tieturin intra.

Rinnalla käytin omilla sivuillani WordPressiä, sitä onkin tullut käytettyä yli 20 vuotta jo putkeen.

Mutta, palataan tähän static site generator-asiaan. Jostain syystä haluan tutustua uuteen tekniikkaan ja olen ottanut itselleni haasteen tehdä sivusto Eleventyllä. Jos kaikki sujuu kuin tanssi, niin ehkä voisin harkita siirtymista WP:stä Eleventyyn omalla sivustolla.

## Eleventy ja Jamstack

En osaa tarkemmin analysoida miksi päädyin valitsemaan Eleventyn työkaluksi tähän uuteen tutustumismatkaan. Se nyt kuitenkin olen valinnut. Olen paikallisesti omalla koneella testaillut Eleventyllä työskentelyä ja jotain saanut jopa aikaiseksikin, siinä on auttanut tietysti Eleventyn sivusto dokumentaatioinen ja tutoriaaleinen [https://www.11ty.dev/](https://www.11ty.dev/) ja mainio "aloituspaketti" Eleventy Base Blog, joka löytyy Githubista [https://github.com/11ty/eleventy-base-blog](https://github.com/11ty/eleventy-base-blog)

Tässä on minulle ollut monta liikkuvaa osaa ts. paljon uutta oheisopiskeltavaa, kuten linux ja komentorivityöskentely terminaalissa, Git ja Github sekä Codeberg muun muassa. Mukavaa aivojumppaa 70+ -vuotiaalle, mutta rinnakkain monta uutta asiaa on jonkinasteinen kuorma aivoille.

Jamstack-tyylinen julkaisu onnistuu Githubista helposti amerikkalaiseen Netlify-palveluun. Siellä vaan olen maksuttomalla tilillä kokeillut, mutta todella helppoa se on. Tee muutos sivustolle, päivitä Githubiin ja naps samantien julkaisu automaattisesti Netlifyihin.

En kuitenkaan sinne ameriikkoihin halua kallistua. Niinpä kiikarissa on jokin eurooppalainen ratkaisu. Otin kokeeksi suomalaisen UpCloudin virtuaalisen palvelimen ja ajattelin kokeilla julkaisua sinne. Kokeilu ei ole kallista, sillä VPS:n saa halvimmillaa **kolmella eurolla per kuukausi**. [https://upcloud.com/products/cloud-servers/](https://upcloud.com/products/cloud-servers/)  
Dokumentaatio siellä on tälläiselle aloittelijalle kehnoa, pitäisi olla askel-askeleelta ohjeet. Kokeilu on minulla UpCloudin kanssa "vaiheessa". Yksi tutoriaali heidän sivuillaan on liittyen Gitlabiin ja Hugoon. Joten kaiketi se Jamstack onnistuu UpCloudillekin.

Eurooppalaisia vaihtoehtoja esittelee sivusto **European alternatives for digital products**, [https://european-alternatives.eu/category/jamstack-hosting](https://european-alternatives.eu/category/jamstack-hosting) ja siellä löytyy listattuna Jamstack-palveluntarjoajia. Sieltä muuten UpCloud puuttuu.  
Olen nyt napannut kokeiltavaksi ruotsalaisen **statichost** -palveluntarjoajan, joka vaikuttaa pätevältä. Heidän sivustollaan on ainakin kunnolliset ohjeet Jamstackin toteuttamiseen. [https://www.statichost.eu/docs/](https://www.statichost.eu/docs/)  
Olen nyt konffannut Githubin statichostin ohjeiden mukaan ja kunhan saan tilini aktivoitua, niin pääsen kokeilemaan. Hankin myös kokeiluja varten uuden domain ja laitan nimipalvelun osoittamaan tuonne statichostiin omalle projektilleni.

Nyt ensin odotellaan tilin aktivoitumista ja odottavan aika on pitkä.

## Sivuston sosiaalinen interaktiivisuus

WordPress-sivustollani on palautelomake, kirjoitusten kommentointilomake sekä ActivityPub-lisäosa, jolla Fediversumin interaktiot saa sivustolle mukaan.

Miten käy tämän sosiaalisen vuorovaikuttamisen sitten, jos onkin staattinen sivusto?  
Tämä jää vielä pohdittavaksi. IndieWebin Webmention on ainakin mahdollista toteuttaa Eleventy-sivustoon. Fediversumin kommentointikin on mahdollista, ainakin artkkeleita aiheesta löytyy, esim. [https://hamatti.org/posts/custom-cli-tool-to-link-mastodon-posts-and-blog-posts/](https://hamatti.org/posts/custom-cli-tool-to-link-mastodon-posts-and-blog-posts/)

Toisaalta ehkä ilman kommentoitiakin pärjäisi...

###### Fediversumi -reaktiot
