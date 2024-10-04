import MainContent from "./components/MainContent";
import { NewsProvider } from "./components/NewsContext";
import NewsDetails from "./components/NewsDetails";
import Index from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <NewsProvider news={[]}>
      {/* <Index></Index>*/}
      <Router>
            <Routes>
                <Route path="/" element={<Index><MainContent/></Index>} />
                <Route path="/news/:id" element={<Index><NewsDetails /></Index>} />
                <Route path="/user_news/:id" element={<Index><MainContent/></Index>} />
            </Routes>
        </Router>
    </NewsProvider>
  );
}

export default App;
