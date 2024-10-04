import "./App.css";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ProgressSpinner } from "primereact/progressspinner";

const Layout = lazy(() => import("./pages/Layout"));
const Games = lazy(() => import("./pages/Games"));
const NotFound = lazy(() => import("./pages/NotFound"));
const GameInfo = lazy(() => import("./pages/GameInfo"));
const Home = lazy(() => import("./pages/Home"));
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const ListTeam = lazy(() => import("./pages/admin/Teams"));

function App() {
  return (
    <Suspense fallback={
    <div className="w-full h-full flex justify-center items-center">
    <ProgressSpinner 
    />
    </div>
   }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="games" element={<Games />} />
            <Route path="games/*" element={<GameInfo />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="teams" element={<ListTeam />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;