import React from "react";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import CampaignPage from "./pages/CampaignPage.jsx";

function App() {
  return (
    <Routes>
      <Route index path="/:campaginid" element={<CampaignPage />} />
      <Route
        path="/"
        element={
          <div className="use-ui-sans text-gray-900 min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-semibold">Campaign Reporter</h1>
              <p className="text-gray-600">
                Open /your-campaign-id to view the report.
              </p>
            </div>
          </div>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
