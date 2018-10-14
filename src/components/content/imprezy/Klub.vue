<template>
    <div class="container" style="font-family: 'Krub', sans-serif;">
        <div class="row">
            <h3>...To słoneczny, miły, bujający, wesoły house przełamywany głęboką nutką gatunku deephouse.</h3>
            <p>
                Właśnie taką muzykę chcę grać! Jeśli potrzebujesz takiej muzyki granej na żywo to zapraszam do współpracy.
                Oferuję autentyczność w tym co robie, uśmiech i dużo radości płynącej z tego, że zajmuję się tym co kocham.
                Zapraszam do odsłuchu:
            </p>
            <p>
                <a
                    href="https://www.youtube.com/watch?v=oIAcJABwt4U&feature=youtu.be"
                >https://www.youtube.com/watch?v=oIAcJABwt4U&feature=youtu.be</a>
                <br>po więcej zapraszam do zakładki
                <router-link :to="{name:'muzyka'}">
                    <a>muzyka</a>
                </router-link>
            </p>
            <p>
                Otwierasz klub, bar? Chcesz go osiwetlić, ale nie wiesz od czego zacząć?
                Chętnie pomogę w średniozaawansowanych konstrukcjach oświetleniowych.
                Lokal na 1000 osób potrafię zrobić w naprawdę powalającym stylu zapewniając
                prostą obsługę oświetlenia.
            </p>
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
.row {
    text-align: center;
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
}
p {
    margin-top: 30px;
    text-align: justify;
    font-size: 1.2em;
}
</style>
