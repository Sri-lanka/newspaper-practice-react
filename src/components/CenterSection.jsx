import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainContent from './MainContent';
import NewsDetails from './NewsDetails';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/news/:id" element={<NewsDetails></NewsDetails>} />
            </Routes>
        </Router>
    );
}