import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import { App, FailedPage, SuccessPage } from 'pages/index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/ok" element={<SuccessPage />} />
        <Route path="/fail" element={<FailedPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
