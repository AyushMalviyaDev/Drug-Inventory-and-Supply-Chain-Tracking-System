import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "./layout/MainLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";  
import ProtectedRoute from "./components/ProtectedRoute";
import ChangePassword from "./pages/ChangePassword";
import VerifyOTP from "./pages/VerifyOTP";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Landing = lazy(() => import("./pages/Landing"));
const Orders = lazy(() => import("./pages/Orders"));
const Distribution = lazy(() => import("./pages/Distribution"));
const Inventory = lazy(() => import("./pages/Inventory"));
const Reports = lazy(() => import("./pages/Reports"));
const Settings = lazy(() => import("./pages/Settings"));



function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} /> 
      <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login/>} />  
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/verify" element={<VerifyOTP />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path="/distribution" element={<ProtectedRoute><Distribution /></ProtectedRoute>} />
        <Route path="/inventory" element={<ProtectedRoute><Inventory /></ProtectedRoute>} />
        <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/changepassword" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />

      </Route>

    </Routes>
  );
}

export default App;