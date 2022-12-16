import React from "react";
import puzaIcon from "../assets/images/puzaIcon.png";

export const Home = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (localStorage.getItem("value")) {
      setValue(+localStorage.getItem("value"));
    }
  }, []);

  const addPuzaCoin = () => {
    setValue(value + 1);
    localStorage.setItem("value", value + 1);
  };

  const clearResult = () => {
    localStorage.clear("value");
    window.location.reload();
  };

  return (
    <div className="homePage">
      <p className="textValue">У Вас {value} PuzaCoin!</p>
      <button onClick={addPuzaCoin} className="iconWrapper">
        <img className="puzaIcon" src={puzaIcon} alt="" />
      </button>
      <button onClick={clearResult}>Очистить результат</button>
    </div>
  );
};
