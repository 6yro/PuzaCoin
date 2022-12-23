import React from "react";
import "./scss/app.scss";
import { ClickArea } from "./components/ClickArea";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { useDispatch } from "react-redux";
import { setLocalStorage } from "./redux/slice";
import { Footer } from "./components/Footer";
import { CycleComponent } from "./components/CycleComponent";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setLocalStorage());
  }, []);

  return (
    <div className="app">
      <Header />
      <ClickArea />
      <Shop />
      <Footer />
      <CycleComponent />
    </div>
  );
}

export default App;
