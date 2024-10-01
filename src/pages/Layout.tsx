import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <Nav />
        <div className="flex flex-col items-center justify-center flex-1 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
