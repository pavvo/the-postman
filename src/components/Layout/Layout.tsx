import { Outlet } from "react-router-dom";

import { useAppContext } from "@/hooks/useAppContext";
import { useLogger } from "@/hooks/useLogger";

import "./Layout.css";

export interface LayoutProps {
  message?: string;
}

export function Layout({ message }: LayoutProps) {
  const { defaultMessage } = useAppContext();

  useLogger(message || defaultMessage, "Layout");

  return (
    <div className="layout">
      <Outlet />
    </div>
  );
}
