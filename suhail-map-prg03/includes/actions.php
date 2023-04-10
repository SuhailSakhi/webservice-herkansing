<?php
/**
 * @return array
 */
function getMusea()
{
    return [
        [
            "id" => 1,
            "name" => "Maritiem Museum",
        ],
        [
            "id" => 2,
            "name" => "Depot van Boojmans van Beuningen",
        ],
        [
            "id" => 3,
            "name" => "Mariniersmuseum",
        ],
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getMuseaDetails($id)
{
    $tags = [
        1 => [
            "id" => 1,
            "name" => "Maritiem Museum",
            "img" => "img/maritiem.jpeg",
            "imgalt" => "maritiem logo",
            "linktext" => "maritiemmuseum.nl",
            "link" => "https://maritiemmuseum.nl/",
            "criteria" => [
                "parkeren: Ja",
                "invalide toilet: Ja",
                "entree toegankelijkheidvriendelijk: Ja. ",
                "invalide toilet: Ja",


            ],
            "openingstijden" => [
                "gesloten",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "11:00 tot 17:00"
            ],
            "openingsdagen" => [
                "Maandag",
                "Dinsdag",
                "Woensdag",
                "Donderdag",
                "Vrijdag",
                "Zondag",
                "Zaterdag"
            ],
            "bannerimg" => "img/maritiem.jpeg",
            "bannerimgalt" => "banner maritiem",
            "info" => "Aan de haven van Rotterdam staat het maritiem museum met wisselende, eigentijdse tentoonstellingen en activiteiten neemt het maritiem museum je mee op reis door ons zeevaart heden, verleden en de toekomst."
        ],
        2 => [
            "id" => 2,
            "name" => "Depot van Boojmans van Beuningen",
            "img" => "img/boojman.jpg",
            "imgalt" => "boojman",
            "linktext" => "boojman.nl",
            "link" => "https://www.boijmans.nl/nl",
                "criteria" => [
                    "parkeren: Ja",
                    "invalide toilet: Ja",
                    "entree toegankelijkheidvriendelijk: Ja. ",
                    "invalide toilet: Ja",
            ],
            "openingstijden" => [
                "Gesloten",
                "11:00 tot 17:00",
                "11:00 tot 17:00",
                "11:00 tot 17:00",
                "11:00 tot 17:00",
                "11:00 tot 17:00",
                "11:00 tot 17:00"
            ],
            "openingsdagen" => [
                "Maandag",
                "Dinsdag",
                "Woensdag",
                "Donderdag",
                "Vrijdag",
                "Zondag",
                "Zaterdag"
            ],
            "bannerimg" => "img/boojman.jpg",
            "bannerimgalt" => "banner booj",
            "info" => "Het depot van Boojmans en Beuningen is misschien wel een van de meest indrukwekkende gebouwen in Rotterdam. Het depot is de enige toegankelijke kunst depot in de wereld met ruim 152.000 kunstwerken die niet direct tentoongesteld worden en opgeslagen zijn in het museum.",
        ],
        3 => [
            "id" => 3,
            "name" => "Mariniersmuseum",
            "img" => "img/mariniers.jpg",
            "imgalt" => "logo mariniers",
            "linktext" => "mariniersmuseum.nl",
            "link" => "https://www.mariniersmuseum.nl/nl",
            "criteria" => [
                "parkeren: Ja",
                "invalide toilet: Ja",
                "entree toegankelijkheidvriendelijk: Ja. ",
                "invalide toilet: Ja",
            ],
            "openingstijden" => [
                "Gesloten",
                "9:30 tot 17:00",
                "9:30 tot 17:00",
                "9:30 tot 17:00",
                "9:30 tot 17:00",
                "9:30 tot 17:00",
                "9:30 tot 17:00"
            ],
            "openingsdagen" => [
                "Maandag",
                "Dinsdag",
                "Woensdag",
                "Donderdag",
                "Vrijdag",
                "Zondag",
                "Zaterdag"
            ],
            "bannerimg" => "img/mariniers.jpg",
            "bannerimgalt" => "banner mariniers",
            "info" => "Het stoerste museum van Nederland. Het maritiem museum is een stoer dagje uit voor jong en oud. In het mariniers museum kan je alles te weten komen over de stoerste mannen en vrouwen uit het Nederlandse leger en ook zelf in de schoenen staan van een marinier door de verschillende activiteiten. Het museum heeft verhalen en tentoongestelde stukken uit verschillende oorlogen en oorlogsmissie ’s die je kan bezichtigen.",
        ],
    ];

    return $tags[$id];
}