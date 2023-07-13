import "./App.css";
import { AppRoutes } from "./routes";

function App() {

  const token = localStorage.getItem('token');

  return <div className="App">
    <AppRoutes user={token}/>
  </div>;
}

export default App;
