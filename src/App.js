import React from "react";
import "./scss/app.scss";
import { ClickArea } from "./components/ClickArea";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { useDispatch } from "react-redux";
import { setClickStrength, setCoinValue } from "./redux/puzaCoinSlice";
import { Footer } from "./components/Footer";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem("value")) {
      dispatch(setCoinValue());
    }
    if (localStorage.getItem("clickStrength")) {
      dispatch(setClickStrength());
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <ClickArea />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
