import "./App.scss";
import { ClickArea } from "./components/ClickArea";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";

function App() {
  return (
    <div className="app">
      <Header />
      <ClickArea />
      <Shop />
    </div>
  );
}

export default App;
