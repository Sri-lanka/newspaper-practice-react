import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import NewsDetail from '../components/NewsDetail'; // Componente para los detalles de la noticia
//import AnotherComponent from '../components/AnotherComponent'; // Otro componente que quieras mostrar
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