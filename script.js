const smallTextNewspaper = "\"Mit dem Spaten gegen den Klimawandel\" - ist die Überschrift von einem Zeitungsartikel im Haller Kreisblatt.<br>Am 28.02.2022 wurde ein Bericht über dieses Projekt veröffentlicht:<br>\"Zwei achte Klassen erstiegen am Freitagmorgen einen Hang in Teuto oberhalb der Gaststätte Bergfrieden. Die Schüler und Schülerinnen sind bewehrt mit Pflanzwerkzeugen. Jeder ihrer Tritte sucht Halt - so steil geht es hinauf.<br>Wo einst Fichten standen, ragen nur noch wenige, tote Stämme wie riesige Zahnstocher aus dem Boden. [...] Carla schlägt mit ihrer Eisenstange ein Loch in den Boden. Die Achtklässlerin wil mit dem Hieb Osning-Sandsteinlage aufbrechen, die die Kalamitätsfläche unter der dünnen Humusschicht durchzieht. [...] \""
const fullTextNewspaper = "\"Mit dem Spaten gegen den Klimawandel\" - ist die Überschrift von einem Zeitungsartikel im Haller Kreisblatt.<br>Am 28.02.2022 wurde ein Bericht über dieses Projekt veröffentlicht:<br>\"Zwei achte Klassen erstiegen am Freitagmorgen einen Hang in Teuto oberhalb der Gaststätte Bergfrieden. Die Schüler und Schülerinnen sind bewehrt mit Pflanzwerkzeugen. Jeder ihrer Tritte sucht Halt - so steil geht es hinauf.<br>Wo einst Fichten standen, ragen nur noch wenige, tote Stämme wie riesige Zahnstocher aus dem Boden. [...] Carla schlägt mit ihrer Eisenstange ein Loch in den Boden. Die Achtklässlerin wil mit dem Hieb Osning-Sandsteinlage aufbrechen, die die Kalamitätsfläche unter der dünnen Humusschicht durchzieht. Und sie hat Glück: Das Eisen dringt [fast] ohne Wiederstand ein. Ihre Mitschülerin Johanna hebt daraufhin mit einem Spaten ein Pflanzloch aus. Dann setzen die zwei Schülerinnen eine kleine Traubeneiche ins Loch. Die eine hält die Pflanze im Lot, die andere drücktden aufgeworfenen Boden an. Im Lehrplan ihrer Schule ist die Baumpflanzaktion fest verankert: Erkundung des Ökosystems Wald. DieBiologielehrerin Ingrid Arning legt Wert auf praktische Erfahrung. 'Damit die Schüler näher an die Naturkommen und lernen, wie viel Arbeit so etwas macht', sagt sie. Ihre Schüler sollen nicht nur Rotbuche und Traubeneiche pflanzen, sondern auch Farne und Brombeeren entfernen, sowie einen Anstrich gegen Wildverbiss vornehmen. Für die Theoretische Einführung hat auch sie Johannes-Otto Lübke von Regionalforstamt Ostwestfalen-Lippe hinzugezogen. Der Revierförster sagt, die Traubeneiche sei trockenresistenter als die Stieleiche. Außerdem klärt er die Kinder über die Bedeutung des Waldes als CO2-Speicher und Sauerstoffproduzenten auf. Zugleich betont er dessen Rolle als Holzlieferant. Elf Millionen Hektar Wald wachsen auf bundesrepublikanischem Boden und bedecken damit etwa ein Drittel Deutschlands.\""

const fullTextSammy = "Samuel Merheim hat für unsere Schülerzeitung, die Schelle, ebenfalls einen Artikel zu unserem Projekt geschrieben:<br>\"DER TAG DER GEPFLANZTEN BÄUME! Nachdem wir uns in der Schule auf Corona getestet haben (Wir waren alle Negativ), ging es los. Erst sind wir von der Schule in den Wald gegangen, wo uns ein netter Mann [der Förster] einige spannende Informationen zum Bäume pflanzen erzählt hat. Nachdem jeder einen Spaten, eine Rosenschere oder eine Eisenstange hatte sind wir hoch zu einer Lichtung gewandert wo wir uns in 3 Gruppen eingeteilt haben:<br>1. Bäume pflanzen: Wir haben zuerst ein Loch mit Spaten und Eisenstange gegraben, danach haben wir die frisch gekauften Bäume in die Löcher gepflanzt und diese schön zu gebuddelt. Diese sollten dann wachsen und zu großen Buchen werden.<br>2. Bäume anpinseln: In der 2. Gruppe haben wir früher gepflanzte Bäume mit weißer Farbe angepinselt, damit keine Rehe oder anderes Wild die Bäume fressen.<br>3. Beeren schneiden: In der 3. Gruppe haben wir die gerade gepflanzten Bäume von Brombeeren freigeschnitten, damit diese ohne Einschränkung wachsen und gedeihen können. Zum Schluss sind wir alle wieder zurückgewandert und haben ungefähr (Mit 2 Klassen) 80 Bäume gepflanzt!<br>'Dies wird zwar nicht das ganze Co<sub>2</sub> in der Luft speichern können, aber es ist ein Anfang und jeder sollte etwas dazu beitragen, auch wenn es nur ungefähr 2 Bäume pro Person sind.' \""
const smallTextSammy = "Samuel Merheim hat für unsere Schülerzeitung, die Schelle, ebenfalls einen Artikel zu unserem Projekt geschrieben:<br>\"DER TAG DER GEPFLANZTEN BÄUME! Nachdem wir uns in der Schule auf Corona getestet haben (Wir waren alle Negativ), ging es los. Erst sind wir von der Schule in den Wald gegangen, wo uns ein netter Mann [der Förster] einige spannende Informationen zum Bäume pflanzen erzählt hat. Nachdem jeder einen Spaten, eine Rosenschere oder eine Eisenstange hatte sind wir hoch zu einer Lichtung gewandert wo wir uns in 3 Gruppen eingeteilt haben:<br>1. Bäume pflanzen: Wir haben zuerst ein Loch mit Spaten und Eisenstange gegraben, danach haben wir die frisch gekauften Bäume in die Löcher gepflanzt und diese schön zu gebuddelt. Diese sollten dann wachsen und zu großen Buchen werden. [...] \""


function showMore(e, fullText, smallText)
{
    if(e == $(".readMoreNewspaper")) e.parentElement.querySelector("p").innerHTML = fullTextNewspaper
    if(e == $(".readMoreSammy")) e.parentElement.querySelector("p").innerHTML = fullTextSammy
    e.innerText = "weniger lesen"
    e.setAttribute("onclick", `showLess(this);`)
}


function showLess(e)
{
    if(e == $(".readMoreNewspaper")) e.parentElement.querySelector("p").innerHTML = smallTextNewspaper
    if(e == $(".readMoreSammy")) e.parentElement.querySelector("p").innerHTML = smallTextSammy
    e.innerText = "mehr lesen"
    e.setAttribute("onclick", `showMore(this);`)
}



function $(element)
{
    return document.querySelector(element)
}

function $$(element)
{
    return document.querySelectorAll(element)
}
