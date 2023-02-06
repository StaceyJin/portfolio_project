import { createRouter, createWebHistory } from "vue-router"
import homePage from "@/components/homePage"
import aboutMePage from "@/components/aboutMePage"
import skillsPage from "@/components/skillsPage"
import newlyAcquiredPage from "@/components/newlyAcquiredPage"
import contactPage from "@/components/contactPage"

const routes = [
    {
        path: "/",
        name: "Home",
        component: homePage
    },
    {
        path: "/aboutMe",
        name: "AboutMe",
        component: aboutMePage
    },
    {
        path: "/skills",
        name: "Skills",
        component: skillsPage
    },
    {
        path: "/newlyAcquired",
        name: "NewlyAcquired",
        component: newlyAcquiredPage
    },
    {
        path: "/contact",
        name: "Contact",
        component: contactPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;