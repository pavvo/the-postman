import { useRoutes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths";

export default function Router() {
  const element = useRoutes([
    {
      path: RoutePaths.ROOT,
      element: <h1>Home</h1>,
    },
  ]);

  return element;
}
