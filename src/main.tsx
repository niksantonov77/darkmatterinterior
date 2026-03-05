import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Offer from './pages/Offer.tsx'
import Privacy from './pages/Privacy.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/offer" element={<Offer />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
