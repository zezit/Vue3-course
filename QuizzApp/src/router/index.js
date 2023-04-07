import { createRouter, createWebHistory } from "vue-router"

// routing rules
const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("../views/HomeView.vue")
        },
        {
            path: "/quiz/:id",
            name: "Quiz",
            component: () => import("../views/CardView.vue")
        }
    ]
})

export default routes