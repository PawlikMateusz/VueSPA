<template>
    <div class="container" style="font-family: 'Krub', sans-serif;">
        <div class="row">
            <div class="col-md-12">
                <h3>W poniższych linkach znajdziecie moje poczynania.
                    <br>Miłego odsłuchu :)
                </h3>
            </div>
        </div>
        <div class="row">
            <div id="linki">
                <div class="inline">
                    <a class="link" href="https://www.facebook.com/sawioofficial/">
                        <img src="../../assets/images/facebook.png" alt="" class="socialIcon">
                        <h4>Facebook</h4>
                    </a>
                </div>
                <div class="inline">
                    <a
                        class="link"
                        href="https://www.youtube.com/channel/UCiM0WiZd4z8KexLObVaIzAA/videos?view_as=subscriber"
                    >
                        <img src="../../assets/images/youtube.png" alt="" class="socialIcon">
                        <h4>YouTube</h4>
                    </a>
                </div>
                <div class="inline">
                    <a class="link" href="https://soundcloud.com/sawiomusic">
                        <img src="../../assets/images/soundcloud.png" alt="" class="socialIcon">
                        <h4>SoundCloud</h4>
                    </a>
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
    margin-top: 20vh;
    padding-bottom: 20vh;
}
.row {
    text-align: center;
    margin-top: 10vh;
}
.socialIcon {
    max-height: 40px;
    width: auto;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 15px;
}
.link {
    text-decoration: none;
    color: white;
}
.inline {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
}
#linki {
    margin-right: auto;
    margin-left: auto;
}
</style>
