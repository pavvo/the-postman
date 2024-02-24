import { useRoutes } from "react-router-dom";

import { Layout } from "@/components/Layout";

import { Posts } from "@/pages/posts";
import { Post } from "@/pages/post";

import { RoutePaths } from "./RoutePaths";

export default function Router() {
  const element = useRoutes([
    {
      path: RoutePaths.ROOT,
      element: <Layout />,
      children: [
        { index: true, element: <Posts /> },
        { path: RoutePaths.POST, element: <Post /> },
      ],
    },
  ]);

  return element;
}
