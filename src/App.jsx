import { NewsProvider } from "./components/NewsContext";
import Index from "./pages/index";
import TableNew from "./pages/tableNew";

function App() {
  return (
    <NewsProvider news={[]}>
      <Index />
      <TableNew></TableNew>
    </NewsProvider>
  );
}

export default App;
