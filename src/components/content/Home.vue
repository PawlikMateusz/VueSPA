<template>
    <div class="container">
        <div id="landingPage">
            <img id="homeImage" src="../../assets/images/DJ_SAWIO.png" alt="">
            <div class="welcomeText">
                <h1 id="landingText">Muzyka na każdą okazję
                    <br>
                    <span id="landingTextSub">wesela, urodziny, imprezy klubowe</span>
                </h1>
                <p>Dowiedz się więcej na:</p>
            </div>
            <a href="https://www.facebook.com/sawioofficial/">
                <img src="../../assets/images/facebook.png" alt="" class="socialIcon">
            </a>
            <a
                href="https://www.youtube.com/channel/UCiM0WiZd4z8KexLObVaIzAA/videos?view_as=subscriber"
            >
                <img src="../../assets/images/youtube.png" alt="" class="socialIcon">
            </a>
            <a href="https://soundcloud.com/sawiomusic">
                <img src="../../assets/images/soundcloud.png" alt="" class="socialIcon">
            </a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
    color: white;
    margin-top: 20vh;
    text-align: center;
    padding-bottom: 20vh;
    font-family: Impact, Charcoal, sans-serif;
}
#homeImage {
    max-width: 70%;
}
#landingText {
    font-size: 60px;
}
#landingTextSub {
    font-size: 30px;
}
.socialIcon {
    max-height: 40px;
    width: auto;
    margin-right: 10px;
    margin-left: 10px;
}
.welcomeText {
    margin-top: 30px;
}
</style>
