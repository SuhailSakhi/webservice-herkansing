<?php
/**
 * @return array
 */
function getFighter()
{
      return [
          [
              "id" => 1,
              "name" => "Khabib Nurmagomedov",
          ],
          [
              "id" => 2,
              "name" => "Dustin Poirier",
          ],
          [
              "id" => 3,
              "name" => "Conor Mcgregor",

          ],
          [
              "id" => 4,
              "name" => "Isreal Adesanya",
          ],

          [
              "id" => 5,
              "name" => "Alexander Volkanovski",

          ],
          [
              "id" => 6,
              "name" => "Max Holloway",
          ],
          [
              "id" => 7,
              "name" => "Kamaru Usman",
          ],
          [
              "id" => 8,
              "name" => "Alex Perreira",
          ],

          [
              "id" => 9,
              "name" => "Jon jones",
          ],

          [
              "id" => 10,
              "name" => "Francis Ngannou",
          ]
      ];
}

/**
 * @param $id
 * @return mixed
 */
function getFighterDetails($id)
{
    $tags = [
        1 => [
            "id" => 1,
            "name" => "Khabib Nurmagomedov",
            "img" => "img/khabib.jpg",
            "imgalt" => "khabib logo",
            "bio" => [
                "record: 29-0",
                "weightclass: Lightweight",
                "reach: 70 inches",
                "age: 32",
                "height: 5'10",
                "born: September 20, 1988",
                "fighting out of: Dagestan, Russia",
                "style: Sambo, Judo, Wrestling",
            ],
        ],
            2 => [
                "id" => 2,
                "name" => "Dustin Poirier",
                "img" => "img/dustin.jpg",
                "imgalt" => "Dustin Poirier",
                "bio" => [
                    "record: 28-7 (1 NC)",
                    "weightclass: Lightweight",
                    "reach: 72 inches",
                    "age: 33",
                    "height: 5'9",
                    "born: January 19, 1989",
                    "fighting out of: Lafayette, Louisiana, United States",
                    "style: Boxing, Brazilian Jiu-Jitsu, Wrestling",
                ],
            ],
            3 => [
                "id" => 3,
                "name" => "Conor McGregor",
                "img" => "img/conor.jpg",
                "imgalt" => "Conor McGregor",
                "bio" => [
                    "record: 22-6",
                    "weightclass: Lightweight, Welterweight",
                    "reach: 74 inches",
                    "age: 33",
                    "height: 5'9",
                    "born: July 14, 1988",
                    "fighting out of: Dublin, Ireland",
                    "style: Boxing, Taekwondo",
                ],
        ],
        4 => [
            "id" => 4,
            "name" => "Israel Adesanya",
            "img" => "img/isreal.jpg",
            "imgalt" => "israel logo",
            "bio" => [
                "record: 20-1",
                "weightclass: Middleweight",
                "reach: 80 inches",
                "age: 32",
                "height: 6'4",
                "born: July 22, 1989",
                "fighting out of: Auckland, New Zealand",
                "style: Kickboxing, Boxing, Taekwondo",
            ],
        ],
        5 => [
            "id" => 5,
            "name" => "Alexander Volkanovski",
            "img" => "img/alex.jpg",
            "imgalt" => "alexander logo",
            "bio" => [
                "record: 23-1",
                "weightclass: Featherweight",
                "reach: 71 inches",
                "age: 33",
                "height: 5'6",
                "born: September 29, 1988",
                "fighting out of: New South Wales, Australia",
                "style: Freestyle Wrestling, Boxing, Brazilian Jiu-Jitsu",
            ],
        ],
        6 => [
            "id" => 6,
            "name" => "Max Holloway",
            "img" => "img/max.jpg",
            "imgalt" => "max logo",
            "bio" => [
                "record: 22-6",
                "weightclass: Featherweight",
                "reach: 69 inches",
                "age: 30",
                "height: 5'11",
                "born: December 4, 1991",
                "fighting out of: Waianae, Hawaii, United States",
                "style: Boxing, Kickboxing, Brazilian Jiu-Jitsu",
            ],
        ],
        7 => [
            "id" => 7,
            "name" => "Kamaru Usman",
            "img" => "img/kamaru.jpg",
            "imgalt" => "kamaru logo",
            "bio" => [
                "record: 19-1",
                "weightclass: Welterweight",
                "reach: 76 inches",
                "age: 34",
                "height: 6'0",
                "born: May 11, 1987",
                "fighting out of: Auchi, Nigeria",
                "style: Wrestling, Boxing, Judo",
            ],
        ],
        8 => [
            "id" => 8,
            "name" => "Alex Pereira",
            "img" => "img/alex.jpg",
            "imgalt" => "Alex Pereira",
            "bio" => [
                "record: 3-1",
                "weightclass: Middleweight",
                "reach: 75 inches",
                "age: 34",
                "height: 6'1",
                "born: July 25, 1987",
                "fighting out of: Sao Paulo, Brazil",
                "style: Kickboxing, Boxing, Brazilian Jiu-Jitsu",
            ],
        ],
        9 => [
            "id" => 9,
            "name" => "Jon Jones",
            "img" => "img/jon.jpg",
            "imgalt" => "Jon Jones",
            "bio" => [
                "record: 26-1 (1 NC)",
                "weightclass: Light Heavyweight, Heavyweight",
                "reach: 84.5 inches",
                "age: 34",
                "height: 6'4",
                "born: July 19, 1987",
                "fighting out of: Albuquerque, New Mexico, United States",
                "style: Wrestling, Muay Thai, Brazilian Jiu-Jitsu",
            ],
        ],
        10 => [
            "id" => 10,
            "name" => "Francis Ngannou",
            "img" => "img/francis.jpg",
            "imgalt" => "Francis Ngannou",
            "bio" => [
                "record: 16-3",
                "weightclass: Heavyweight",
                "reach: 83 inches",
                "age: 35",
                "height: 6'4",
                "born: September 5, 1986",
                "fighting out of: Paris, France",
                "style: Boxing, Brazilian Jiu-Jitsu",
            ],
        ],

    ];

    return $tags[$id];
}