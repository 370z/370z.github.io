import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Demo1 from "../views/demo1.vue";
import Demo2 from "../views/demo2.vue";
import Demo3 from "../views/demo3.vue";
import Demo4 from "../views/demo4.vue";
import Demo5 from "../views/demo5.vue";
import Demo6 from "../views/demo6.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/demo1",
        name: "Demo1",
        component: Demo1,
    },
    {
        path: "/demo2",
        name: "Demo2",
        component: Demo2,
    },
    {
        path: "/demo3",
        name: "Demo3",
        component: Demo3,
    },
    {
        path: "/demo4",
        name: "Demo4",
        component: Demo4,
    },
    {
        path: "/demo5",
        name: "Demo5",
        component: Demo5,
    },
    {
        path: "/demo6",
        name: "Demo6",
        component: Demo6,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;