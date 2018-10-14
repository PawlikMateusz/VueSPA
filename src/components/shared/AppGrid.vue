<template>
    <div>
        <app-header></app-header>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from "../shared/Header";
import Footer from "../shared/Footer";
export default {
    components: {
        AppHeader: Header,
        AppFooter: Footer
    }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
