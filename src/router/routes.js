
const routes = [
  {
    path: "/",
    component: () => import("src/layouts/MenuBar.vue"),
    children: [
      { path: "", component: () => import("src/pages/OrderScreen.vue") },
      { path: "/hist", component: () => import("src/pages/HistoryScreen.vue") },
      { path: "/profile", component: () => import("src/pages/IndexPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/Login",
    component: () => import("pages/LockScreen.vue"),
  },
  {
    path: "/Register",
    component: () => import("pages/RegisterScreen.vue"),
  },
]

export default routes
