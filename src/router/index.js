import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";
import About from "../views/AboutView.vue";
import EventDetails from "../views/EventDetails.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventListView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/event/:id",
    name: "EventDetials",
    props: true,
    component: EventDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
