<template>
    <nav class="navbar navbar-expand-lg navbar-dark static-top navbarBlack">
        <div class="container">
            <router-link :to="{name:'home'}">
                <a class="navbar-brand">
                    <img src="../../assets/images/DJ_SAWIO_cien.png" alt="" id="logo">
                </a>
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <router-link
                        :to="{name:'home'}"
                        tag="li"
                        class="nav-item"
                        active-class="active"
                        exact
                    >
                        <a class="nav-link">Strona główna</a>
                    </router-link>
                    <!-- <router-link
                        :to="{name:'oferta'}"
                        tag="li"
                        class="nav-item"
                        active-class="active"
                        exact
                    >
                        <a class="nav-link">Oferta</a>
                    </router-link>-->
                    <router-link
                        :to="{name:'muzyka'}"
                        tag="li"
                        class="nav-item"
                        active-class="active"
                        exact
                    >
                        <a class="nav-link">Muzyka</a>
                    </router-link>
                    <router-link
                        :to="{name:'sprzet'}"
                        tag="li"
                        class="nav-item"
                        active-class="active"
                        exact
                    >
                        <a class="nav-link">Sprzęt</a>
                    </router-link>
                    <router-link
                        :to="{name:'omnie'}"
                        tag="li"
                        class="nav-item"
                        active-class="active"
                        exact
                    >
                        <a class="nav-link">O mnie</a>
                    </router-link>
                    <router-link
                        :to="{name:'gallery'}"
                        tag="li"
                        class="nav-item"
                        active-class="active"
                        exact
                    >
                        <a class="nav-link">Galeria</a>
                    </router-link>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >Imprezy</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link
                                :to="{name:'imprezyWesele'}"
                                tag="a"
                                class="dropdown-item"
                                active-class="active"
                                exact
                            >Wesele</router-link>
                            <router-link
                                :to="{name:'imprezyKlub'}"
                                tag="a"
                                class="dropdown-item"
                                active-class="active"
                                exact
                            >Klub</router-link>
                            <router-link
                                :to="{name:'imprezyUrodziny'}"
                                tag="a"
                                class="dropdown-item"
                                active-class="active"
                                exact
                            >Urodziny</router-link>
                            <router-link
                                :to="{name:'imprezyInne'}"
                                tag="a"
                                class="dropdown-item"
                                active-class="active"
                                exact
                            >Inne</router-link>
                        </div>
                    </li>
                    <router-link
                        :to="{name:'kontakt'}"
                        tag="li"
                        class="nav-item"
                        active-class="active"
                        exact
                    >
                        <a class="nav-link">Kontakt</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped>
#logo {
    height: 40px;
    width: auto;
}
.navbarBlack {
    color: white;
    font-weight: bold;
    font-size: 18px;
    background-color: rgba(0, 0, 0, 0.7);
}
.dropdown-item,
.dropdown-menu {
    background-color: black;
    color: white;
}
</style>
