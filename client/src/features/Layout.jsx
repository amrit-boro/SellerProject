import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import AdBarr from "./advertisement/AdBarr";
import ScrollTop from "./ui/ScrollTop";

function Layout() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <AdBarr />
      <div>
        <main>
          <ScrollTop />

          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
