---
title: "WordPress lisäosat - minun suosikkejani"
date: 2018-04-10
categories: 
  - "it"
tags: 
  - "lisaosa"
  - "plugin"
  - "wordpress"
coverImage: "WP-plugins-featured-image.png"
---

WordPress -ohjelmisto on eräs suosituimmista ohjelmistoista Web -sivustojen tekoon ja ylläpitoon. Sen suosio ei ole ihme, sillä WordPress on laadukas, avoin, maksuton CMS -ohjelmisto, joka on moderni, helppokäyttöinen ja mukautuu helpohkosti käyttäjien erilaisiin tarpeisiin. Hieman yksinkertaistaen WordPress -ohjelmisto koostuu kolmesta perusosasta:

- **core**, perusohjelmisto, jolla mm. sisällöntuotanto tehdään sivuihin ja artikkeleihin
- **themes**, ulkoasu, jonka avulla sisältö näytetään sivustolla
- **plugins**, räätälöidyt funktiot, joilla perusohjelmistoon voi tuoda mitä erilaisimpia toimintoja

Lisäosat eli plugins, ovat olennainen osa WordPressiä. Core WordPressissä ei esimerkiksi ole lomakkeita, niiden toteuttamiseen tarvitaan lisäosa, ellei halua käsipelillä HTML:ää koodata.

<!--more-->

Mitä lisäosia sivustolla käytetään tai tarvitaan, riippuu pitkälti siitä minkälainen sivusto on.

- miten sisältöä halutaan tuoda esille teeman tarjoamien ominaisuuksien lisäksi ja
- minkälaisia toiminnallisuuksia sivustoon tarvitaan

Blogisivusto on luonteeltaan sangen erilainen kuin esim. verkkokauppasivusto, niin niillä on myös  lisäosien tarve. Joitain yhteisiä tarpeita kaikilla sivustoilla kuitenkin on, esimerkiksi lomakkeet yhteydenottoihin, analytiikka jne.

Lisäosia on WordPressin ekosysteemissä tarjolla todella paljon. Yleisimpiin lisäosiin voi tutustua osoitteessa [https://wordpress.org/plugins/.](https://wordpress.org/plugins/) Koodarit / yritykset jakavat sekä myyvät niitä myös omien sivustojensa kautta. Osa lisäosista on maksuttomia, osaan on tarjolla maksusta lisäominaisuuksia, osa on suoraan maksullisia. Monet lisäosien kehittäjät tarjoavat kokeiluversion, toiset eivät edes sitä.

## Lisäosan valintakriteerit

Yleisimpiin tarpeisiin on tarjolla tosi paljon samankaltaisia lisäosia, kilpailua siis on. Esimerkiksi lomakkeita tuottavia lisäosia on varmaan kymmeniä, mikä niistä sitten kannattaa valita?

- tutustu kuhunkin lisäosaan sen esittelysivulla, katso kuinka paljon sitä on asennettu?
- minkälaisia arvioita käyttäjät ovat siitä antaneet?
- mikä ohjelmistoversio lisäosalla on ja onko se yhteensopiva nykyisen WordPress Coren kanssa, eli oikeastaan siis kuinka aktiivisesti sitä ylläpidetään?
- onko lisäosa käännetty suomeksi?

Ei ehkä kannata valita sellaista lisäosaa, jonka kehittämisen / ylläpidon jatkumisesta ei ole takeita, viimeisin päivitys yli vuosi sitten haiskahtaa jo tosi pahalta. Kun löydät mielestäsi sopivan, niin kokeile sitä vaikka ensin [testiasennuksessa omalla koneellasi](https://teuvovaisanen.fi/2016/02/04/wordpress-asentaminen-omalle-koneelle/). Lisäosasta pääsee useimmiten kyllä eroon yleensä helposti, kun vain poistaa sen.

Monta kertaa lisäosa yllättää asentamisen jälkeen siinä, ettei sitä ole käännetty suomeksi, tai se on vain osittain tai kehnosti lokalisoitu. Mikäli ylläpitonäkymä on englanniksi, mutta asiakkaalle sivustolla näkyvä osa on kieliriippumaton tai räätälöitävissä, niin sen kanssa tulee ehkä hyvinkin toimeen. Kokonaan käännetty / lokalisoitu on kuitenkin laatua! Siihen käännökseen voi itsekin vaikuttaa, [kirjoitinkin taannoin WordPressin kääntämisestä](https://teuvovaisanen.fi/2017/05/27/wordpress-ohjelman-ja-lisaosien-kaantaminen-suomennos/).

Tässä muutamia poimintoja suosikeistani.

## WordPress lomakkeet

- [**Ninja Forms**](https://wordpress.org/plugins/ninja-forms/), tämä on nykyinen suosikkini lomakkeiden tekemiseen. Maksuttomalla versioilla pötkii todella pitkälle (itselläni käytössä). Maksullisella versiolla (Add-Ons) saa aikaan ihan lomakesovelluksia ja integrointi todella moneen verkossa olevaan palveluun kuten Mailchimp, maksukäytäviin ja CRM -järjestelmiin
- [**Jetpack**](https://wordpress.org/plugins/jetpack/), suositun WordPress.com -palvelun tarjoaman monipuolisen lisäosan maksuttoman version mukana tulee helppokäyttöinen lomakkeiden rakennustyökalu.
- [**Contact Form 7**](https://wordpress.org/plugins/contact-form-7/), suosittu ja kauan markkinoilla ollut lomakelisäosa, maksuton, open source.

Näistä mikään ei ollut kirjoitushetkellä ainakaan kokonaan käännetty suomeksi, mutta niiden kaikkien kanssa pärjää hyvin.

## Google Analytics

Käytätkö Google Tag Manageria vai perinteistä tapaa asentaa analytiikan seuranta? Siinäpä kysymys ;) Jos et käytä Tag Manageria, on tarjolla hieman enemmän valinnanvaraa.

- [**Google Analytics Dashboard for WP (GADWP)**](https://wordpress.org/plugins/google-analytics-dashboard-for-wp/)
- [**Google Analytics for WordPress by MonsterInsights**](https://wordpress.org/plugins/google-analytics-for-wordpress/)

Molemmat em. ovat monipuolisia lisäosia, joilla hoituvat sekä perinteinen Analytics- että vaihtoehtoinen Tag Manager -asennus.

Itse en kuitenkaan nykyään pidä Analytics -lisäosista, joiden käyttöönotto edellyttää jonkinlaisten käyttöoikeuksien antamisen Google Analytics -tilin dataan. Tätä lupaa yleensä kysyvät lisäosat, joilla on tarjolla dashboardiin jonkinlaisia käppyröitä ja datataulukoita. Niistä toki näkee nopeasti dataa vierailematta itse Analytics -palvelussa, mutta silti...

Itse käytän Tagmanager -palvelua, sivustolla on "manuaalisesti" asennetut seurantakoodit Analyticsiin näin:

- **Tein oman simppelin lisäosan**, jolla Tag Manager -säilöskripti asentuu paikoilleen ja
- [**GeneratePress -teeman Premium -versiossa on GP Hooks**](https://generatepress.com/premium/?utm_source=teuvovaisanen.fi&utm_medium=affiliate&utm_campaign=GeneratePress&utm_content=Article%20about%20WP%20in%20teuvovaisanen.fi%20site) -ominaisuus, jonka avulla noscript -osuus paikoilleen

Ehkä kirjoittelen oman lisäosan tekemisestä joskus jotain, mutta nyt lisätietoa kaipaaville [https://codex.wordpress.org/Writing\_a\_Plugin](https://codex.wordpress.org/Writing_a_Plugin)

## Hakukoneoptimointi

Kaikki sivustot tarvitsevat hakukoneoptimointiin liittyviä aputyökaluja.

- **[Yoast SEO](https://wordpress.org/plugins/wordpress-seo/)** on pitkäaikainen suosikkini, olen pärjännyt mainiosti maksuttomalla versiolla ja tätä käytän oikeastaan kaikissa asiakkailleni tekemissäni projekteissa. Maksuton ja maksullinen versio.
- [**All in One SEO Pack**](https://wordpress.org/plugins/all-in-one-seo-pack/) on myös ihan ok, maksuton ja maksullinen versio.
- **[Jetpack](https://wordpress.org/plugins/jetpack/)** tarjoaa myös tähän tarpeeseen omat kilkkeensä, mutta vain maksusta.

## Page Builder

Useinkaan teemalla ei saa aikaiseksi helposti räätälöityjä sivutaittoja tms. ilman HTML ja CSS -koodauksen osaamista. Sitä koodaustaitoa ei yleensä sisällöntuottajilla ole. Siihen pulmaan on kehitetty Page Builderit. Niillä voi kuka vaan helposti tehdä sivulle räätälöityjä taittoja, kuten palstoja jne.

- [**Elementor**](https://wordpress.org/plugins/elementor/), maksuton ja maksullinen versio
- **[SiteOrigin](https://wordpress.org/plugins/siteorigin-panels/)**, maksuton ja maksullinen versio
- [**Beaver Builder**](https://wordpress.org/plugins/beaver-builder-lite-version/), maksuton ja maksullinen versio

## Custom Content Type - Custom Post

Jos sivut ja artikkelit eivät riitä, tarvitaan omia räätälöityjä sisältötyyppejä. Moni lisäosa luo asentuessaan omia sisältötyyppejä kuten esim. WooCommerce luo tuote -sisältötyypin. Jos haluat luoda ihan itse vapaasti määriteltävän sisältötyypin, niin sekin on mahdollista vaikka Podsilla.

- **[Pods - Custom Content Types and Fields](https://wordpress.org/plugins/pods/)**  on itselläni käytössä, sillä olen tehnyt mm. kaikki sivustoni kurssit. Lisäosan käyttö vaatii hieman HTML ja CSS -osaamista, mutta jos se ei ole ongelma, niin suosittelen. Maksuton.

## Sekalaisia mutta mainioita

- [**WP Show Posts**](https://wpshowposts.com/?utm_source=teuvovaisanen.fi&utm_medium=affiliate&utm_campaign=WP%20Show%20Posts&utm_content=Article%20about%20WP%20plugins%20in%20teuvovaisanen.fi%20site), lisäosa, jonka avulla voi tehdä erinäköisiä listoja kaikista sisältötyypeistä minne vaan sivustollasi. Maksuton ja maksullinen versio.
- [**Under Construction**](https://wordpress.org/plugins/under-construction-page/), lisäosa, jonka avulla voi voi kontrolloida kuka näkee rakenteilla olevan sivuston. Voi rauhassa valmistella sivustoa julkaisukuntoon ja esim. vain sisällötuottajat näkevät sen, asiakkaat saavat näkyviin vain räätälöidyn "työn alla" -sivun. Maksutona ja maksullinen.

Listaa olisi voinut vielä jatkaa vaikka kuinka paljon, mutta päätän sen nyt kuitenkin tähän. Lisäosista jutellaan lisää myös [WordPress -kurssillani](https://teuvovaisanen.fi/kurssi/kotisivut-helposti-wordpress-jarjestelmalla/), tervetuloa! Ilman lisäosia ei WordPress -sivusto tule toimeen. Kannattaa kuitenkin pitää jalat maassa ja lisäosien lukumäärä mahdollisimman pienenä.
