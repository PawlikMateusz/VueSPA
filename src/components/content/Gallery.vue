<template>
    <div class="container">
        <silentbox-group>
            <silentbox-item src="https://www.youtube.com/watch?v=oIAcJABwt4U">
                <img src="../../assets/images/gallery/film1.jpg">
            </silentbox-item>
            <silentbox-item src="https://www.youtube.com/watch?v=Ooe-DhTcvEc">
                <img src="../../assets/images/gallery/film2.jpg">
            </silentbox-item>
            <silentbox-item src="https://www.youtube.com/watch?v=o-y1Kh9i8DE">
                <img src="../../assets/images/gallery/film3.jpg">
            </silentbox-item>
            <silentbox-item :src="require('../../assets/images/gallery/1.jpg')" description>
                <img src="../../assets/images/gallery/12.jpg">
            </silentbox-item>
            <silentbox-item :src="require('../../assets/images/gallery/2.jpg')" description>
                <img src="../../assets/images/gallery/13.jpg">
            </silentbox-item>
            <silentbox-item :src="require('../../assets/images/gallery/2.jpg')" description>
                <img src="../../assets/images/gallery/14.jpg">
            </silentbox-item>
            <silentbox-item :src="require('../../assets/images/gallery/1.jpg')" description>
                <img src="../../assets/images/gallery/1.jpg">
            </silentbox-item>
            <silentbox-item :src="require('../../assets/images/gallery/2.jpg')" description>
                <img src="../../assets/images/gallery/2.jpg">
            </silentbox-item>
            <silentbox-item :src="require('../../assets/images/gallery/3.jpg')" description>
                <img src="../../assets/images/gallery/3.jpg">
            </silentbox-item>
            <silentbox-item :src="require('../../assets/images/gallery/4.jpg')" description>
                <img src="../../assets/images/gallery/4.jpg">
            </silentbox-item>
            <silentbox-item :src="require('../../assets/images/gallery/5.jpg')" description>
                <img src="../../assets/images/gallery/5.jpg">
            </silentbox-item>
            <silentbox-item :src="require('../../assets/images/gallery/6.jpg')" description>
                <img src="../../assets/images/gallery/6.jpg">
            </silentbox-item>
            <silentbox-item
                class="silentbox-item"
                :src="require('../../assets/images/gallery/7.jpg')"
                description
            >
                <img src="../../assets/images/gallery/7.jpg">
            </silentbox-item>
            <silentbox-item
                class="silentbox-item"
                :src="require('../../assets/images/gallery/8.jpg')"
                description
            >
                <img src="../../assets/images/gallery/8.jpg">
            </silentbox-item>
            <silentbox-item
                class="silentbox-item"
                :src="require('../../assets/images/gallery/9.jpg')"
                description
            >
                <img src="../../assets/images/gallery/9.jpg">
            </silentbox-item>
            <silentbox-item
                class="silentbox-item"
                :src="require('../../assets/images/gallery/10.jpg')"
                description
            >
                <img src="../../assets/images/gallery/10.jpg">
            </silentbox-item>
            <silentbox-item
                class="silentbox-item"
                :src="require('../../assets/images/gallery/11.jpg')"
                description
            >
                <img src="../../assets/images/gallery/11.jpg">
            </silentbox-item>
        </silentbox-group>
    </div>
</template>

<script>
export default {};
</script>
    
<style scoped>
.container {
    text-align: center;
    padding-bottom: 10vh;
}
img {
    height: 250px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 10px;
}
@media screen and (max-width: 800px) {
    img {
        max-width: 300px;
        height: auto;
    }
}
</style>
