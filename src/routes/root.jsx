import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../footer"


export default function Root() {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
