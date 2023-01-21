import { createRouter, createWebHistory } from "vue-router"
import homePage from "@/components/homePage"
import aboutMePage from "@/components/aboutMePage"
import skillsPage from "@/components/skillsPage"
import newlyAcquiredPage from "@/components/newlyAcquiredPage"

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
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;