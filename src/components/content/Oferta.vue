<template>
    <div class="container" style="font-family: 'Krub', sans-serif;">
        <div class="row">
            <div class="col-md-3">
                <h2>
                    <strong>OFERTA</strong>
                </h2>
                <span class="small-spacing">
                    <p class="info">1 osoba</p>
                    <p class="opis">TYPOWY SKŁAD</p>
                </span>
                <span class="small-spacing">
                    <p class="info">2500 zł</p>
                    <p class="opis">WESELE</p>
                </span>
                <span class="small-spacing">
                    <p class="info">800 zł</p>
                    <p class="opis">POPRAWINY</p>
                </span>
                <span class="small-spacing">
                    <p class="info">40 km</p>
                    <p class="opis">DOJAZD GRATIS</p>
                </span>
                <span>
                    <p class="info">REPERTUAR</p>
                    <p class="opis"></p>
                    <ul>
                        <li>disco polo</li>
                        <li>przeboje polskie</li>
                        <li>disco</li>
                    </ul>
                </span>
            </div>
            <div class="col-md-9">
                <p id="ofertaTekst">
                    Szukasz Dj-a ,który maksymalnie zaangażuje się w to ,aby goście ciągle byli na parkiecie?
                    <br>Ciągle przeglądasz ogłoszenia żeby wybrać kogoś kto naprawdę jest profesjonalistą i wykonuję swoją pasję z uśmiechem na twarzy?
                    <br>Potrzebujesz kogoś kto świetnie oświetli salę? Nada jej " smaczek" którym będzie przykuwać uwagę gości zamiast świecącego bałaganu?
                    <br>A może jeszcze fajnie było by żeby osoba odpowiedzialna za prowadzenie imprezy potrafiła wysłuchać gości i gdyby ktoś się trafił z
                    muzyczną propozycją to żeby ją w mig spełniła?
                    <br>
                    <br>Oddaj cały temat związany z muzyką mi. Przestań się martwić i stresować czymś co dla mnie jest codziennością. Odpręż się ,wyluzuj, zajmij dobrą zabawą ze swoimi gośćmi bo za sterami stoi -DJ SAWIO!
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
    color: white;
    margin-top: 10vh;
    padding-bottom: 20vh;
}
p {
    font-size: 20px;
}

.info {
    font-size: 25px;
    font-style: italic;
    font-weight: bold;
    margin-top: 20px;
}
.opis {
    font-size: 15px;
}
.small-spacing {
    line-height: 0.6;
}
#ofertaTekst {
    line-height: 1.7;
}
h2 {
    text-decoration: underline;
}
</style>
