import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./Auh/AuthProvider";
import TopMenu from "./Componet/Header/Dashboard_Top";
import LoginDashboard from "./Componet/Login/login";
import Upload from "./Componet/Upload/Upload";
import Main from "./Componet/Home/main";

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginDashboard />} />
        {!isLoggedIn ? (
          <Route path="*" element={<Navigate to="/login" replace />} />
        ) : (
          <Route
            path="/"
            element={
              <div className="flex flex-col h-screen">
                <div className="w-screen z-50">
                  <TopMenu />
                </div>
                <div className="overflow-y-scroll">
                  <Upload />
                  <Main className="z-30" />
                </div>
              </div>
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
