import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Offer from './pages/Offer.tsx'
import Privacy from './pages/Privacy.tsx'
import Refund from './pages/Refund.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/offer" element={<Offer />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/refund" element={<Refund />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
)
