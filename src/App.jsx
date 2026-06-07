import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Cursor from "./components/Cursor/Cursor";

function App() {
  return (
    <BrowserRouter>
    <Cursor />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;