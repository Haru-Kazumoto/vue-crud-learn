import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue")
    },
    // {
    //     path: "/this-is-nested-routes",
    //     name: "nested routes",
    //     component: Nested,
    //     children: [
    //         {
    //             path: "/children-routes",
    //             name: "Children Routes",
    //             component: ChildrenComponent
    //         }
    //     ]
    // }
];

const route = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default route;