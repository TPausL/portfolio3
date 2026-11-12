import "./Layout.css";

import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link";
import { Header } from "../components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <Header />
      <div
        style={{
          display: "flex",
          margin: "auto",
          width: "100%",
        }}
      >
        <Content>{children}</Content>
      </div>
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container" className="w-full">
      <div
        id="page-content"
        style={{
          padding: 20,
          minHeight: "calc(100vh - 104px)",
          width: "100%"
        }}
      >
        {children}
      </div>
    </div>
  );
}