
import MainContent from "./components/MainContent";
import { NewsProvider } from "./components/NewsContext";
import NewsDetails from "./components/NewsDetails";
import Index from "./pages/index";
import Auth from "./pages/Auth";
import Form from "./pages/form"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import NewFormulary from "./components/NewFormulary";
function App() {
  return (
    <NewsProvider news={[]}>
      {/* <Index></Index>*/}
      <Router>
            <Routes>
                <Route path="/" element={<Index><MainContent/></Index>} />
                <Route path="/login" element={<Auth><LoginForm></LoginForm></Auth>} />
                <Route path="/register" element={<Auth><RegisterForm></RegisterForm></Auth>} />
                <Route path="/create_new" element={<Form><NewFormulary></NewFormulary></Form>} />
                <Route path="/edit_new/:id" element={<Form><NewFormulary></NewFormulary></Form>} />
                <Route path="/news/:id" element={<Index><NewsDetails /></Index>} />
                <Route path="/user_news/:id" element={<Index><MainContent/></Index>} />
                <Route path="/category_news/:id_category" element={<Index><MainContent/></Index>} />
            </Routes>
        </Router>
    </NewsProvider>
  );
}

export default App;
