<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import AppGrid from "./components/shared/AppGrid";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
export default {
    name: "app",
    components: {
        AppGrid,
        AppHeader: Header,
        AppFooter: Footer
    }
};
</script>

<style>
body {
    background-color: black;
    background-image: url("./assets/images/background-min.jpg");

    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}
</style>
