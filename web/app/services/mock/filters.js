/**
 * User: tgrabus
 * Date: 20.10.14
 * Time: 20:10
 */

define(['models/CityModel'], function (CityModel) {

    function getAllCities() {
        var cities = [
            'Warszawa',
            'Kraków',
            'Łódź',
            'Wrocław',
            'Poznań',
            'Gdańsk',
            'Szczecin',
            'Bydgoszcz',
            'Lublin',
            'Katowice',
            'Białystok',
            'Gdynia',
            'Częstochowa',
            'Radom',
            'Sosnowiec',
            'Toruń',
            'Kielce',
            'Gliwice',
            'Zabrze',
            'Bytom',
            'Olsztyn',
            'Bielsko Biała',
            'Rzeszów',
            'Ruda Śląska',
            'Rybnik',
            'Tychy',
            'Dąbrowa Górnicza',
            'Płock',
            'Opole',
            'Elbląg',
            'Gorzów Wielkopolski',
            'Wałbrzych',
            'Włocławek',
            'Zielona Góra',
            'Tarnów',
            'Chorzów',
            'Kalisz',
            'Koszalin',
            'Legnica',
            'Grudziądz',
            'Słupsk',
            'Jaworzno',
            'Jastrzębie Zdrój',
            'Jelenia Góra',
            'Nowy Sącz',
            'Konin',
            'Piotrków Trybunalski',
            'Siedlce',
            'Lubin',
            'Inowrocław',
            'Mysłowice',
            'Piła',
            'Ostrowiec Świętokrzyski',
            'Ostrów Wielkopolski',
            'Siemianowice Śląskie',
            'Stargard Szczeciński',
            'Pabianice',
            'Gniezno',
            'Suwałki',
            'Głogów',
            'Chełm',
            'Przemyśl',
            'Zamość',
            'Tomaszów Mazowiecki',
            'Stalowa Wola',
            'Kędzierzyn Koźle',
            'Leszno',
            'Łomża',
            'Żory',
            'Bełchatów',
            'Mielec',
            'Tarnowskie Góry',
            'Tczew',
            'Świdnica',
            'Piekary Śląskie',
            'Będzin',
            'Zgierz',
            'Biała Podlaska',
            'Racibórz',
            'Ełk',
            'Pruszków',
            'Świętochłowice',
            'Ostrołęka',
            'Starachowice',
            'Zawiercie',
            'Legionowo',
            'Tarnobrzeg',
            'Puławy',
            'Wodzisław Śląski',
            'Radomsko'
        ]

        var sortedCitiesByName = cities.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });

        return sortedCitiesByName.map(function(city) {
            return new CityModel(city);
        });
    }


    return {
        getAllCities: getAllCities
    };
});

