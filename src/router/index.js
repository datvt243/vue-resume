import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/skill",
    name: "Skill",
    component: () => import("../views/Skill.vue")
  },
  {
    path: "/education",
    name: "Education",
    component: () => import("../views/Education.vue")
  },
  {
    path: "/experience",
    name: "Experience",
    component: () => import("../views/Experience.vue")
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("../views/Portfolio.vue")
  },
  {
    path: "/person",
    name: "Person",
    component: () => import("../views/Person.vue")
  },
  {
    path: "/portfolio-vue",
    name: "PortfolioVue",
    component: () => import("../views/PortfolioVue.vue")
  },
  {
    path: "/portfolio-nodejs",
    name: "PortfolioVue",
    component: () => import("../views/PortfolioNodejs.vue")
  },
  {
    path: "/portfolio-typescript",
    name: "PortfolioTypescript",
    component: () => import("../views/PortfolioTypescript.vue")
  },
  {
    path: "*",
    name: "404",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
