import Gallery from "./components/content/Gallery.vue";
import Home from "./components/content/Home.vue";
// import Oferta from "./components/content/Oferta.vue";
import Sprzet from "./components/content/Sprzet.vue";
import Muzyka from "./components/content/Muzyka.vue";
import Omnie from "./components/content/Omnie.vue";
import Kontakt from "./components/content/Kontakt.vue";

import Inne from "./components/content/imprezy/Inne.vue";
import Klub from "./components/content/imprezy/Klub.vue";
import Urodziny from "./components/content/imprezy/Urodziny.vue";
import Wesele from "./components/content/imprezy/Wesele.vue";

import AppGrid from "./components/shared/AppGrid.vue";

export const routes = [
  {
    path: "/",
    component: AppGrid,
    children: [
      {
        path: "",
        name: "home",
        component: Home
      },
      {
        path: "gallery",
        name: "gallery",
        component: Gallery
      },
      // {
      //   path: "oferta",
      //   name: "oferta",
      //   component: Oferta
      // },
      {
        path: "omnie",
        name: "omnie",
        component: Omnie
      },
      {
        path: "kontakt",
        name: "kontakt",
        component: Kontakt
      },
      {
        path: "sprzet",
        name: "sprzet",
        component: Sprzet
      },
      {
        path: "muyzka",
        name: "muzyka",
        component: Muzyka
      },
      {
        path: "imprezy/wesele",
        name: "imprezyWesele",
        component: Wesele
      },
      {
        path: "imprezy/klub",
        name: "imprezyKlub",
        component: Klub
      },
      {
        path: "imprezy/urodziny",
        name: "imprezyUrodziny",
        component: Urodziny
      },
      {
        path: "imprezy/inne",
        name: "imprezyInne",
        component: Inne
      }
    ]
  },
  { path: "*", redirect: { name: "home" } }
];
