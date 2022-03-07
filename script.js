const fullText = "\"Mit dem Spaten gegen den Klimawandel\" - ist die Überschrift von einem Zeitungsartikel im Haller Kreisblatt. Am 28.02.2022 wurde ein Bericht über dieses Projekt veröffentlicht: \"Zwei achte Klassen erstiegen am Freitagmorgen einen Hang in Teuto oberhalb der Gaststätte Bergfrieden. Die Schüler und Schülerinnen sind bewehrt mit Pflanzwerkzeugen. Jeder ihrer Tritte sucht Halt - so steil geht es hinauf. Wo einst Fichten standen, ragen nur noch wenige, tote Stämme wie riesige Zahnstocher aus dem Boden. [...] Carla schlägt mit ihrer Eisenstange ein Loch in den Boden. Die Achtklässlerin wil mit dem Hieb Osning-Sandsteinlage aufbrechen, die die Kalamitätsfläche unter der dünnen Humusschicht durchzieht. Und sie hat Glück: Das Eisen dringt [fast] ohne Wiederstand ein. Ihre Mitschülerin Johanna hebt daraufhin mit einem Spaten ein Pflanzloch aus. Dann setzen die zwei Schülerinnen eine kleine Traubeneiche ins Loch. Die eine hält die Pflanze im Lot, die andere drücktden aufgeworfenen Boden an. Im Lehrplan ihrer Schule ist die Baumpflanzaktion fest verankert: Erkundung des Ökosystems Wald. DieBiologielehrerin Ingrid Arning legt Wert auf praktische Erfahrung. 'Damit die Schüler näher an die Naturkommen und lernen, wie viel Arbeit so etwas macht', sagt sie. Ihre Schüler sollen nicht nur Rotbuche und Traubeneiche pflanzen, sondern auch Farne und Brombeeren entfernen, sowie einen Anstrich gegen Wildverbiss vornehmen. Für die Theoretische Einführung hat auch sie Johannes-Otto Lübke von Regionalforstamt Ostwestfalen-Lippe hinzugezogen. Der Revierförster sagt, die Traubeneiche sei trockenresistenter als die Stieleiche. Außerdem klärt er die Kinder über die Bedeutung des Waldes als CO2-Speicher und Sauerstoffproduzenten auf. Zugleich betont er dessen Rolle als Holzlieferant. Elf Millionen Hektar Wald wachsen auf bundesrepublikanischem Boden und bedecken damit etwa ein Drittel Deutschlands.\""
const smallText = "\"Mit dem Spaten gegen den Klimawandel\" - ist die Überschrift von einem Zeitungsartikel im Haller Kreisblatt. Am 28.02.2022 wurde ein Bericht über dieses Projekt veröffentlicht: \"Zwei achte Klassen erstiegen am Freitagmorgen einen Hang in Teuto oberhalb der Gaststätte Bergfrieden. Die Schüler und Schülerinnen sind bewehrt mit Pflanzwerkzeugen. Jeder ihrer Tritte sucht Halt - so steil geht es hinauf. Wo einst Fichten standen, ragen nur noch wenige, tote Stämme wie riesige Zahnstocher aus dem Boden. [...] Carla schlägt mit ihrer Eisenstange ein Loch in den Boden. Die Achtklässlerin wil mit dem Hieb Osning-Sandsteinlage aufbrechen, die die Kalamitätsfläche unter der dünnen Humusschicht durchzieht. [...]\""

function showMore(e)
{
    e.parentElement.querySelector("p").innerHTML = fullText
    e.parentElement.style.height = ""
    e.innerText = "weniger lesen"
    e.setAttribute("onclick", "showLess(this);")
}


function showLess(e)
{
    e.parentElement.querySelector("p").innerHTML = smallText
    e.parentElement.style.height = "340px"
    e.innerText = "mehr lesen"
    e.setAttribute("onclick", "showMore(this);")
}
