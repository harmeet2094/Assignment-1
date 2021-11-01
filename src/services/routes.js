import Post from "../components/post/js";
import EditPost from "../components/editPost/js";

const routes = [
  {
    path: "/",
    exact: true,
    component: Post,
  },
  { 
    path: "/edit", 
    component: EditPost 
  },
];

export default routes;
