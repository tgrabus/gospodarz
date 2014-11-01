/**
 * User: tgrabus
 * Date: 20.10.14
 * Time: 20:10
 */

define(['knockout'], function (ko) {
    return {
        getAllCities: getAllCities,
        getPopularCities: getPopularCitiesSortedByName
    };
});

function getAllCities() {
    var allCities = [
        'Warszawa'
        ,
        'Kraków'
        ,
        'Łódź'
        ,
        'Wrocław'
        ,
        'Poznań'
        ,
        'Gdańsk'
        ,
        'Szczecin'
        ,
        'Bydgoszcz'
        ,
        'Lublin'
        ,
        'Katowice'
        ,
        'Białystok'
        ,
        'Gdynia'
        ,
        'Częstochowa'
        ,
        'Radom'
        ,
        'Sosnowiec'
        ,
        'Toruń'
        ,
        'Kielce'
        ,
        'Gliwice'
        ,
        'Zabrze'
        ,
        'Bytom'
        ,
        'Olsztyn'
        ,
        'Bielsko Biała'
        ,
        'Rzeszów'
        ,
        'RudaŚląska'
        ,
        'Rybnik'
        ,
        'Tychy'
        ,
        'Dąbrowa Górnicza'
        ,
        'Płock'
        ,
        'Opole'
        ,
        'Elbląg'
        ,
        'Gorzów Wielkopolski'
        ,
        'Wałbrzych'
        ,
        'Włocławek'
        ,
        'ZielonaGóra'
        ,
        'Tarnów'
        ,
        'Chorzów'
        ,
        'Kalisz'
        ,
        'Koszalin'
        ,
        'Legnica'
        ,
        'Grudziądz'
        ,
        'Słupsk'
        ,
        'Jaworzno'
        ,
        'Jastrzębie Zdrój'
        ,
        'JeleniaGóra'
        ,
        'NowySącz'
        ,
        'Konin'
        ,
        'Piotrków Trybunalski'
        ,
        'Siedlce'
        ,
        'Lubin'
        ,
        'Inowrocław'
        ,
        'Mysłowice'
        ,
        'Piła'
        ,
        'Ostrowiec Świętokrzyski'
        ,
        'Ostrów Wielkopolski'
        ,
        'Siemianowice Śląskie'
        ,
        'Stargard Szczeciński'
        ,
        'Pabianice'
        ,
        'Gniezno'
        ,
        'Suwałki'
        ,
        'Głogów'
        ,
        'Chełm'
        ,
        'Przemyśl'
        ,
        'Zamość'
        ,
        'Tomaszów Mazowiecki'
        ,
        'StalowaWola'
        ,
        'Kędzierzyn Koźle'
        ,
        'Leszno'
        ,
        'Łomża'
        ,
        'Żory'
        ,
        'Bełchatów'
        ,
        'Mielec'
        ,
        'Tarnowskie Góry'
        ,
        'Tczew'
        ,
        'Świdnica'
        ,
        'Piekary Śląskie'
        ,
        'Będzin'
        ,
        'Zgierz'
        ,
        'Biała Podlaska'
        ,
        'Racibórz'
        ,
        'Ełk'
        ,
        'Pruszków'
        ,
        'Świętochłowice'
        ,
        'Ostrołęka'
        ,
        'Starachowice'
        ,
        'Zawiercie'
        ,
        'Legionowo'
        ,
        'Tarnobrzeg'
        ,
        'Puławy'
        ,
        'Wodzisław Śląski'
        ,
        'Radomsko'
    ]
    return   allCities;
}

function getPopularCitiesSortedByName() {
    var mostPopularCities = [
        'Warszawa'
        ,
        'Kraków'
        ,
        'Łódź'
        ,
        'Wrocław'
        ,
        'Poznań'
        ,
        'Gdańsk'
        ,
        'Szczecin'
        ,
        'Bydgoszcz'
        ,
        'Lublin'
        ,
        'Katowice'
        ,
        'Białystok'
        ,
        'Gdynia'
        ,
        'Częstochowa'
        ,
        'Radom'
        ,
        'Sosnowiec'
        ,
        'Toruń'
        ,
        'Kielce'
        ,
        'Gliwice'
        ,
        'Zabrze'
    ]
    return    mostPopularCities.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    })
}