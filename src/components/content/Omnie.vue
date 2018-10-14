<template>
    <div class="container" style="font-family: 'Krub', sans-serif;">
        <div id="aboutMeDiv">
            <div class="row tresc">
                <div class="col-md-6">
                    <img id="AboutMePic" src="../../assets/images/gallery/5.jpg" alt="">
                </div>
                <div id="opis" class="col-md-6">
                    <h3>Hej!</h3>
                    <p>
                        Mam na imię Damian. Od 10 lat gram muzykę.
                        Od 10 lat uzupełniam swoją kolekcję niepowtarzalnych
                        numerów, które później serwuję ludziom na parkiecie.
                        Prowadzę wszelkiego rodzaju imprezy. Kocham muzykę i nie
                        ograniczam jej do jednego czy dwóch gatunków...
                        Zadowolenie moich klientów to czynnik napędzający
                        moje działania. Zawszę dążę do tego, aby parkiet był pełny
                        ponieważ jest to oznaką świetnie wykonywanej pracy.
                    </p>
                    <p>
                        Lubię jak impreza oprócz dobrej muzyki jest ciekawie oświetlona, dlatego
                        tworze oryginalne show za pomocą systemu DMX.
                        Daje to ogromne możliwości i wprowadza Twoją imprezę na wyższy poziom.
                        Na życzenie klienta dojeżdżam w dowolne miejsce w Polsce
                        z całym sprzętem nagłośnieniowym i oświetleniowym.
                    </p>
                    <p>
                        Jako, że granie muzyki to już za mało postanowiłem
                        wejść na wyższy lewel i
                        od pięciu lat tworzę swoje utwory. Głównie to muzyka
                        elektroniczna i klubowa. Jeśli potrzebujesz muzykę do
                        reklamy czy filmu? Napisz... Chętnie pomogę.
                    </p>
                </div>
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
    margin-top: 5vh;
    text-align: center;
    padding-bottom: 10vh;
}
h3 {
    line-height: 1.5;
    font-weight: bold;
}
#AboutMePic {
    max-height: 60vh;
    width: auto;
}
.tresc {
    margin-top: 20px;
    font-size: 20px;
}
#opis {
    text-align: justify;
}
p {
    line-height: 1.3;
    margin-bottom: 40px;
}
</style>
