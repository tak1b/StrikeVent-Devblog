import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main
        className="sv-container"
        style={{ flex: 1, paddingTop: "48px", paddingBottom: "24px" }}
      >
        <Outlet />
      </main>
      <div className="sv-container">
        <Footer />
      </div>
    </div>
  );
}
