import { NewsProvider } from "./components/NewsContext";
import Index from "./pages/index";


function App() {
  return (
    <NewsProvider news={[]}>
      <Index />
    </NewsProvider>
  );
}

export default App;
