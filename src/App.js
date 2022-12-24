import React from "react";
import "./scss/app.scss";
import { ClickArea } from "./components/ClickArea";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { useDispatch } from "react-redux";
import { setState } from "./redux/slice";
import { Footer } from "./components/Footer";
import { PerSecond } from "./utils/PerSecondComponent";
import { PerMinute } from "./utils/PerMinuteComponent";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem("state")) {
      dispatch(setState());
    }
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        <ClickArea />
        <Shop />
        <Footer />
      </div>
      <PerSecond />
      <PerMinute />
    </>
  );
}

export default App;
