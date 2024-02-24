import { useRoutes } from "react-router-dom";

import { Layout } from "@/components/Layout";

import { RoutePaths } from "./RoutePaths";

export default function Router() {
  const element = useRoutes([
    {
      path: RoutePaths.ROOT,
      element: <Layout />,
      children: [{ index: true, element: <h1>Home</h1> }],
    },
  ]);

  return element;
}
