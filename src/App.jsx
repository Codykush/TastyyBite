import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Dashboard from "./pages/admin/Dashboard";
import AdminAddFood from "./pages/AdminAddFood";
import ManageFoods from "./pages/admin/ManageFoods";

function App() {
  return (
    <Routes>

      {/* User */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      {/* Admin */}

      <Route
        path="/admin"
        element={<Dashboard />}
      />

      <Route
        path="/admin/add-food"
        element={<AdminAddFood />}
      />

      <Route
        path="/admin/manage-foods"
        element={<ManageFoods />}
      />

    </Routes>
  );
}

export default App;