import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Layout = () => {
  return (
    <>
        <Nav />
        <div className="flex flex-col items-center justify-center flex-1 overflow-hidden">
          <Outlet />
        </div>
    </>
  );
};

export default Layout;
