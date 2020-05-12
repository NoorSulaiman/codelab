import Vue from "vue";
import Router from "vue-router";
import HomePage from "../home/HomePage.vue";
import RobotBuilder from "../build/RobotBuilder.vue";
import PartsInfo from "../Parts/PartsInfo.vue";
import BrowseParts from "../Parts/BrowseParts.vue";
import RobotHeads from "../Parts/RobotHeads.vue";
import RobotArms from "../Parts/RobotArms.vue";
import RobotTorsos from "../Parts/RobotTorsos.vue";
import RobotBases from "../Parts/RobotBases.vue";
import HomeSidebar from "../sidebar/HomeSidebar.vue";
import BuildSidebar from "../sidebar/BuildSidebar.vue";
import ShoppingCart from "../cart/ShoppingCart.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      components: { default: HomePage, sidebar: HomeSidebar }
    },
    {
      path: "/build",
      name: "Build",
      components: { default: RobotBuilder, sidebar: BuildSidebar }
    },
    {
      path: "/parts/browse",
      name: "BrowseParts",
      component: BrowseParts,
      children: [
        { name: "BrowseHeads", path: "heads", component: RobotHeads },
        { name: "BrowseArms", path: "arms", component: RobotArms },
        { name: "BrowseTorsos", path: "torsos", component: RobotTorsos },
        { name: "BrowseBases", path: "bases", component: RobotBases }
      ]
    },
    {
      path: "/parts/:partType/:id",
      name: "Parts",
      component: PartsInfo,
      props: true,
      beforeEnter(to, from, next) {
        const isValidId = Number.isInteger(+to.params.id);
        next(isValidId);
      }
    },
    {
      path: "/cart",
      name: "Cart",
      component: ShoppingCart
    }
  ]
});
