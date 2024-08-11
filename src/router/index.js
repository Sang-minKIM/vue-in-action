import Vue from "vue";
import Router from "vue-router";
import Form from "@/view/Form";
import Main from "@/view/Main";
import Product from "@/view/Product";
import EditProduct from "@/view/EditProduct";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "iMain",
      component: Main,
      props: true
    },
    {
      path: "/form",
      name: "Form",
      component: Form,
      props: true
    },
    {
      path: "/product/:id",
      name: "Id",
      component: Product,
      props: true,
      children: [
        {
          path: "edit",
          name: "Edit",
          component: EditProduct,
          props: true
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
